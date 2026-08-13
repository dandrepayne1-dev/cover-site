# CØVER Financial Group — website

Static site. No build step, no framework. Edit the HTML directly and it deploys.

## Files

| File | What it is |
|---|---|
| `index.html` | Athlete home page |
| `departments.html` | Athletic department seat license |
| `team.html` | The coaching seat and the partner bench |
| `contact.html` | Story, principles, and contact |
| `assets/css/site.css` | All styling for every page |
| `assets/js/site.js` | Booking link, email, nav highlighting, scroll reveal |
| `assets/img/` | Drop photos here |

## Before launch

**1. Booking link.** Open `assets/js/site.js` and edit the first line:

```js
const COVER_BOOKING_URL = "https://calendly.com/REPLACE-ME";
```

That single line points every "Book a Call" and "Start Your Baseline" button on all four pages.

**2. Email.** Second line of the same file:

```js
const COVER_EMAIL = "hello@coverfinancialgroup.com";
```

**3. Prices.** `index.html` has three placeholders reading `SET PRICE`. Replace with real numbers, or delete the `<span class="price">` lines entirely to leave pricing off the site.

**4. Photos.** Put three images in `assets/img/`, then in `index.html` and `team.html` replace each placeholder:

```html
<div class="shot"><span>IMG Ø1 // FIELD</span></div>
```

with

```html
<div class="shot"><img src="assets/img/field.jpg" alt="D'Andre Payne playing defensive back"></div>
```

**5. Legal review.** Have counsel read the footer disclaimer, the firewall section on `departments.html`, and the no-commission language on `team.html` before going live.

## Deploying to Vercel

1. Create a new repository on GitHub and upload these files to the root. Drag and drop works in the GitHub web interface.
2. Go to vercel.com, sign in with GitHub, click **Add New → Project**.
3. Select the repository. Framework preset: **Other**. Leave build settings empty. Click **Deploy**.
4. You get a live `.vercel.app` URL in under a minute.
5. For your own domain: **Settings → Domains** in the Vercel project, add the domain, then update DNS at your registrar as Vercel instructs.

Every push to the repository redeploys automatically.

## Editing later

Text lives directly in the HTML. Search for the sentence you want to change and edit it. Colors, type and spacing are defined at the top of `assets/css/site.css` under `:root` — changing a value there updates every page at once.

## Still open

- Three prices on `index.html`
- Seat rates live in the brief, not on the site, by design
- Partner bench on `team.html` shows one seat in review and three open
