# GitHub Pages Setup Guide

## ✅ What's been configured:

1. **Base Path**: Vite is configured with `base: '/PDF_REARRANGE/'`
2. **GitHub Actions**: Automatic deployment workflow added
3. **Jekyll disabled**: `.nojekyll` file prevents Jekyll processing
4. **Build files**: `dist/` folder with all production assets

## 🔧 To enable GitHub Pages:

1. Go to: https://github.com/Virendra-Phirke/PDF_REARRANGE/settings
2. Scroll down to **"Pages"** section
3. Set **Source** to: **"Deploy from a branch"**
4. Select **Branch**: **"main"** and **Folder**: **"/ (root)"**
5. Click **Save**

## OR (Recommended - using GitHub Actions)

1. Go to: https://github.com/Virendra-Phirke/PDF_REARRANGE/settings
2. Scroll down to **"Pages"** section
3. Set **Source** to: **"GitHub Actions"**
4. This will use the workflow we created automatically
5. The workflow will deploy from `gh-pages` branch created automatically

## 🚀 After configuration:

Your app will be live at:
**https://virendra-phirke.github.io/PDF_REARRANGE/**

Give it 2-3 minutes to build and deploy.

## ✓ To verify it's working:

1. Open GitHub Actions tab
2. Look for workflow run named "Deploy to GitHub Pages"
3. If it shows a green checkmark, deployment was successful
4. Check the Pages settings to see the active deployment URL

## 🐛 Troubleshooting:

If still blank:
- Open browser DevTools (F12)
- Check Console tab for errors
- Check Network tab to see if assets loaded (should see `/PDF_REARRANGE/assets/*`)
- Go to repo Settings > Pages > Visit site to verify URL

## Local Testing:

```powershell
npm run build
npm run preview
# Open http://localhost:4173
```

## Files Structure for Deployment:

```
dist/
├── index.html (main entry point with correct base paths)
├── assets/
│   ├── index-Bj3oeAOa.js (bundled React app)
│   └── index-CcNFoptK.css (Tailwind styles)
└── favicon.svg
```

All asset paths are prefixed with `/PDF_REARRANGE/` ✓
