const DB_NAME = 'nullx_audio';
const DB_VERSION = 1;
const STORE_NAME = 'songs';
const META_KEY = 'default_song_id';

export interface StoredSong {
  id: string;
  name: string;
  type: string;
  size: number;
  data: ArrayBuffer;
  createdAt: number;
}

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains('meta')) {
        db.createObjectStore('meta', { keyPath: 'key' });
      }
    };
  });
}

export async function saveSong(file: File): Promise<StoredSong> {
  const id = `song_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  const data = await file.arrayBuffer();
  const song: StoredSong = {
    id,
    name: file.name,
    type: file.type || 'audio/mpeg',
    size: file.size,
    data,
    createdAt: Date.now(),
  };
  const db = await openDb();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);
  await new Promise<void>((resolve, reject) => {
    const put = store.put(song);
    put.onsuccess = () => resolve();
    put.onerror = () => reject(put.error);
  });
  db.close();
  return song;
}

export async function getSongs(): Promise<StoredSong[]> {
  const db = await openDb();
  const tx = db.transaction(STORE_NAME, 'readonly');
  const store = tx.objectStore(STORE_NAME);
  const songs = await new Promise<StoredSong[]>((resolve, reject) => {
    const get = store.getAll();
    get.onsuccess = () => resolve(get.result as StoredSong[]);
    get.onerror = () => reject(get.error);
  });
  db.close();
  return songs.sort((a, b) => b.createdAt - a.createdAt);
}

export async function getSong(id: string): Promise<StoredSong | null> {
  const db = await openDb();
  const tx = db.transaction(STORE_NAME, 'readonly');
  const store = tx.objectStore(STORE_NAME);
  const song = await new Promise<StoredSong | undefined>((resolve, reject) => {
    const get = store.get(id);
    get.onsuccess = () => resolve(get.result as StoredSong | undefined);
    get.onerror = () => reject(get.error);
  });
  db.close();
  return song || null;
}

export async function deleteSong(id: string): Promise<void> {
  const db = await openDb();
  const tx = db.transaction([STORE_NAME, 'meta'], 'readwrite');
  const store = tx.objectStore(STORE_NAME);
  const metaStore = tx.objectStore('meta');
  await new Promise<void>((resolve, reject) => {
    const del = store.delete(id);
    del.onsuccess = () => resolve();
    del.onerror = () => reject(del.error);
  });
  const currentDefault = await new Promise<string | undefined>((resolve, reject) => {
    const get = metaStore.get(META_KEY);
    get.onsuccess = () => resolve(get.result?.value);
    get.onerror = () => reject(get.error);
  });
  if (currentDefault === id) {
    await new Promise<void>((resolve, reject) => {
      const del = metaStore.delete(META_KEY);
      del.onsuccess = () => resolve();
      del.onerror = () => reject(del.error);
    });
  }
  db.close();
}

export async function setDefaultSong(id: string): Promise<void> {
  const db = await openDb();
  const tx = db.transaction('meta', 'readwrite');
  const store = tx.objectStore('meta');
  await new Promise<void>((resolve, reject) => {
    const put = store.put({ key: META_KEY, value: id });
    put.onsuccess = () => resolve();
    put.onerror = () => reject(put.error);
  });
  db.close();
}

export async function getDefaultSongId(): Promise<string | null> {
  const db = await openDb();
  const tx = db.transaction('meta', 'readonly');
  const store = tx.objectStore('meta');
  const result = await new Promise<{ value: string } | undefined>((resolve, reject) => {
    const get = store.get(META_KEY);
    get.onsuccess = () => resolve(get.result as { value: string } | undefined);
    get.onerror = () => reject(get.error);
  });
  db.close();
  return result?.value || null;
}

export async function getDefaultSong(): Promise<StoredSong | null> {
  const id = await getDefaultSongId();
  if (!id) {
    const songs = await getSongs();
    return songs[0] || null;
  }
  return getSong(id);
}

export function createAudioUrl(song: StoredSong): string {
  const blob = new Blob([song.data], { type: song.type });
  return URL.createObjectURL(blob);
}
