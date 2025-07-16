# (Beginner-Friendly Edition)

> Every block has a tiny “why” so you can read, copy, and **know what it does**.

---

### 1. The Only HTML You Need

```html
<!doctype html>
<html lang="en">
```
**Why**: `lang="en"` tells screen-readers “this page is in English” (change to `"fr"` when you show French text).

```html
<meta charset="utf-8">
<title>Learn French: Coffee</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
```
**Why**:  
- `charset` prevents weird characters.  
- `viewport` makes the page zoom correctly on phones.

```html
<meta name="theme-color" content="#4CAF50">
```
**Why**: Colors the browser’s address bar on Android to match your brand.

```html
<link rel="manifest" href="app.webmanifest">
<link rel="stylesheet" href="style.css">
<link rel="service-worker" href="sw.js">
```
**Why**:  
- Manifest = lets users “install” your page like an app.  
- CSS = your tiny style file.  
- Service-worker = offline magic (we’ll write it next).

---

### 2. The Only CSS You Need

```css
:root {
  --bg: #fafafa;
  --fg: #212121;
  --accent: #4CAF50;
  font-size: 120%;
}
```
**Why**:  
- CSS variables keep colors consistent.  
- `font-size: 120%` = bigger text for Grandma.

```css
body {
  margin: 0;
  display: grid;
  place-items: center;
  min-height: 100vh;
}
```
**Why**: Centers the card vertically on any screen.

```css
main {
  max-width: 20rem;
  padding: 1rem;
}
```
**Why**: Keeps the card narrow, so it never feels like a desktop website on a phone.

---

### 3. Web Manifest for “Install”

```json
{
  "name": "Coffee French",
  "short_name": "CoffeeFR",
  "start_url": ".",
  "display": "standalone",
  "background_color": "#4CAF50",
  "theme_color": "#4CAF50"
}
```
**Why**: When someone taps “Add to Home Screen”, this JSON tells the phone what icon, color, and page to open.

---

### 4. Service Worker for Offline

```js
const CACHE = 'coffee-v1';
const FILES = [
  '.',
  'index.html',
  'style.css',
  'audio/un-cafe.mp3'
];
```
**Why**: List every file the lesson needs. The browser saves them so **no Wi-Fi = still works**.

```js
addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});
```
**Why**: On first visit, quietly download all FILES into the cache.

```js
addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
```
**Why**: If the user is offline, the service worker shows the cached copy instead of an error page.

---

### 5. Accessibility & i18n Cheatsheet

| Goal | One-liner | Why |
|------|-----------|-----|
| Screen-reader friendly | `<button>` not `<div onclick>` | Buttons are announced as “button”; divs are silent. |
| Keyboard nav | `tabindex="0"` + arrow-keys in JS | Lets users without a mouse press Tab to reach every control. |
| RTL ready | `dir="auto"` on `<main>` | If you later add Arabic, the layout flips automatically. |
| Language hint | `<html lang="fr">` | Screen-readers switch pronunciation rules (English vs. French). |
| Emoji alt | `aria-label="Play audio"` | Voice readers say “Play audio” instead of “loudspeaker emoji”.

---

### 6. Performance Budget

| Asset | Max Size | Why |
|-------|----------|-----|
| HTML | 4 kB | Loads in a single network packet. |
| CSS | 2 kB | One HTTP request; fits in cache. |
| JS (if any) | 5 kB | Keeps first paint under 1 s on 3G. |
| Audio | 20 kB per clip | ~2 seconds of compressed audio. |
| Total per lesson | < 35 kB | Entire lesson downloads faster than one Instagram photo. |

---

### 7. Validation One-Liner

```bash
npx html-validate index.html && npx prettier --check .
```
**Why**:  
- `html-validate` catches typos or missing tags.  
- `prettier --check` makes sure your code is tidy and readable.

Run it before every push; if both commands say “✓”, you’re ready to ship.