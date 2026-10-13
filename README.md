# Ahmed Salem – Portfolio (Next.js + Tailwind)

## 1. Add your images
- `public/me.jpg` – your portrait (face near the top, around 800x1000)
- `public/projects/spotifit.png`, `timor-ai.png`, `event-countdown.png`, `ping-pong.png` – 1600x1000 screenshots
- `public/Ahmed_Salem_CV_Mobile.pdf` – replace with your latest CV (keep the same file name)

Missing images show a placeholder, so the site never breaks.

## 2. Edit content
Everything (text, links, projects, skills) is in `data/content.js`.

## 3. Run locally
```
npm install
npm run dev
```
Open http://localhost:3000

## 4. Deploy on Vercel
1. Push this folder to a GitHub repo.
2. On vercel.com choose Add New > Project, import the repo, click Deploy.
3. Every push to `main` redeploys automatically.
4. Custom domain: Project > Settings > Domains.
