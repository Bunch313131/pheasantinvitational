# The Pheasant Invitational – PWA + Push (OneSignal)

## Deploy on GitHub Pages
1) Create a repo (e.g., `pheasant-invitational`).
2) Upload these files to the repo root and enable **GitHub Pages** (main branch → root).
3) Update the app URL wherever needed (currently `https://your-org.github.io/pheasant-invitational`).

## OneSignal Setup
- Create a OneSignal **Web** app and copy the **App ID**.
- In `index.html`, replace the placeholder App ID.
- (Optional for Safari) Set `safari_web_id` if you configure Safari web push.
- Everyone who taps **Enable Notifications** is auto-tagged as `players`.

## iOS Install Note
- iPhone needs **Add to Home Screen** once. Then open from the new icon → tap **Enable Notifications**.

## Customize
- Replace icons in `assets/` with your polished PNGs if you like.
- Edit schedule and link placeholders in `index.html`.
- Colors are neutral; adjust CSS variables at the top if desired.

## Print the Poster
- Open `poster.html` and print (Letter/A4). QR points to `https://your-org.github.io/pheasant-invitational`. Change if your URL differs.
