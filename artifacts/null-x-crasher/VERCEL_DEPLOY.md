# Deploy to Vercel

This is a self-contained Vite + React app ready for Vercel deployment.

## Quick Deploy

1. Go to https://vercel.com/new
2. Import the GitHub repo: `https://github.com/ezihe-building/ANOTHER-BUG-BOT-WEB`
3. In the project settings, set **Root Directory** to:
   ```
   artifacts/null-x-crasher
   ```
4. Leave the build command and output directory as auto-detected by `vercel.json`:
   - Build Command: `pnpm run build`
   - Output Directory: `dist/public`
5. Click **Deploy**.

Vercel will read `packageManager: "pnpm@10.26.1"` and install dependencies with pnpm automatically.

## What is included

- Pre-entry intro screen with boot animation
- ENTER button plays `MONTAGEM GAME.mp3`
- BARRY X MD navigation plays `MONTAGEM OCTUS.mp3`
- Automatic page-based audio switching
- Secret song triggers on nav buttons
- ZENITH LAB footer section
- AMOLED black + purple theme

## Audio files

Audio files must be placed in this folder to be served correctly:

```
artifacts/null-x-crasher/public/audio/
  ├── MONTAGEM GAME.mp3
  └── MONTAGEM OCTUS.mp3
```

If you want to change the songs, replace those files and push to GitHub.

## Notes

- No backend is required for this version.
- The app is fully static.
- All paths are relative, so it works with any Vercel domain.
