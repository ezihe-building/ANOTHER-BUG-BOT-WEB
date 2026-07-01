import { useEffect, useRef, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Upload, Music, Trash2, Check, Play, AlertCircle, Volume2 } from 'lucide-react';
import {
  deleteSong,
  getDefaultSongId,
  getSongs,
  saveSong,
  setDefaultSong,
  StoredSong,
} from '@/lib/audioDb';
import { Link } from 'wouter';

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function Songs() {
  const [songs, setSongs] = useState<StoredSong[]>([]);
  const [defaultId, setDefaultId] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewId, setPreviewId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const load = async () => {
    try {
      const [loadedSongs, loadedDefault] = await Promise.all([
        getSongs(),
        getDefaultSongId(),
      ]);
      setSongs(loadedSongs);
      setDefaultId(loadedDefault || loadedSongs[0]?.id || null);
    } catch (e) {
      setError('Could not load songs from browser storage.');
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('audio/')) {
      setError('Please upload an audio file (MP3, WAV, etc.).');
      return;
    }
    setIsUploading(true);
    setError(null);
    try {
      const song = await saveSong(file);
      await setDefaultSong(song.id);
      await load();
    } catch (e) {
      setError('Upload failed. File may be too large for browser storage.');
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleSetDefault = async (id: string) => {
    await setDefaultSong(id);
    setDefaultId(id);
  };

  const handleDelete = async (id: string) => {
    await deleteSong(id);
    await load();
  };

  const handlePreview = (id: string) => {
    if (previewId === id) {
      setPreviewId(null);
      audioRef.current?.pause();
    } else {
      setPreviewId(id);
    }
  };

  const activeSong = songs.find((s) => s.id === previewId);

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="mb-12 text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <Volume2 className="w-8 h-8 text-primary" />
              <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight uppercase">
                Audio <span className="text-primary">Vault</span>
              </h1>
            </div>
            <p className="text-zinc-400 font-mono max-w-xl mx-auto">
              Upload your tracks here. The selected song will play when you press ENTER in the navigation.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="mb-12">
            <div
              onClick={() => fileInputRef.current?.click()}
              className="group relative border-2 border-dashed border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary/60 rounded-2xl p-12 text-center cursor-pointer transition-all duration-300"
            >
              <div className="absolute inset-0 bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {isUploading ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Upload className="w-7 h-7 text-primary" />
                  )}
                </div>
                <div>
                  <p className="font-display font-bold text-xl text-white mb-1">
                    {isUploading ? 'Uploading...' : 'Drop or click to upload a song'}
                  </p>
                  <p className="text-sm text-zinc-500 font-mono">
                    MP3, WAV, OGG — stored locally in your browser
                  </p>
                </div>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="audio/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          </motion.div>

          {error && (
            <motion.div
              variants={fadeIn}
              className="mb-8 flex items-center gap-3 rounded-lg border border-red-500/30 bg-red-500/10 px-5 py-4 text-red-200"
            >
              <AlertCircle className="w-5 h-5 shrink-0" />
              <p className="font-mono text-sm">{error}</p>
            </motion.div>
          )}

          <motion.div variants={fadeIn}>
            <div className="flex items-center justify-between mb-6 border-b border-zinc-800 pb-4">
              <h2 className="font-display font-bold text-2xl text-white">Stored Tracks</h2>
              <span className="font-mono text-sm text-zinc-500">{songs.length} song(s)</span>
            </div>

            {songs.length === 0 ? (
              <div className="text-center py-16 border border-zinc-800 rounded-xl bg-zinc-950/50">
                <Music className="w-12 h-12 text-zinc-700 mx-auto mb-4" />
                <p className="text-zinc-500 font-mono">No songs uploaded yet.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {songs.map((song) => (
                  <div
                    key={song.id}
                    className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
                      defaultId === song.id
                        ? 'border-primary/50 bg-primary/10'
                        : 'border-zinc-800 bg-zinc-950/50 hover:border-zinc-700'
                    }`}
                  >
                    <button
                      onClick={() => handlePreview(song.id)}
                      className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors"
                    >
                      {previewId === song.id ? (
                        <div className="w-3 h-3 bg-white rounded-sm" />
                      ) : (
                        <Play className="w-4 h-4 text-primary ml-0.5" />
                      )}
                    </button>
                    <div className="flex-1 min-w-0">
                      <p className="font-display font-bold text-white truncate">{song.name}</p>
                      <p className="text-xs font-mono text-zinc-500">
                        {(song.size / 1024 / 1024).toFixed(2)} MB · {song.type}
                      </p>
                    </div>
                    {defaultId === song.id ? (
                      <span className="flex items-center gap-2 text-xs font-mono text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                        <Check className="w-3 h-3" /> ACTIVE
                      </span>
                    ) : (
                      <button
                        onClick={() => handleSetDefault(song.id)}
                        className="text-xs font-mono text-zinc-400 hover:text-white transition-colors px-3 py-1.5"
                      >
                        Set Active
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(song.id)}
                      className="w-9 h-9 rounded-full flex items-center justify-center text-zinc-500 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          <motion.div variants={fadeIn} className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-mono text-sm text-zinc-500 hover:text-primary transition-colors"
            >
              ← Back to NULL X CRASHER
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {activeSong && (
        <audio
          ref={audioRef}
          src={URL.createObjectURL(new Blob([activeSong.data], { type: activeSong.type }))}
          autoPlay
          controls={false}
          onEnded={() => setPreviewId(null)}
        />
      )}
    </div>
  );
}
