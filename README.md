# MindCare static website

Production-ready static website for **MindCare** (Android package `com.anonymous.mindcare`) to support brand presence, trust communication, Google Play policy review, and Play Store validation.

## Project purpose
- Public landing site for students, families, schools, and app reviewers.
- Match the mobile app's warm yellow and soft cream visual theme.
- Explain MindCare's student support features, intended audience, and limitations.
- Provide public Privacy Policy, Terms, contact, and account deletion guidance for Google Play.

## File structure
- `index.html` — main landing page with brand, app preview, validation positioning, and trust highlights.
- `features.html` — product feature overview for schools and reviewers.
- `about.html` — mission, audience, and app-readiness page.
- `contact.html` — inquiry form and account deletion guidance.
- `privacy-policy.html` — public privacy policy for Play Console and users.
- `terms.html` — public terms of use.
- `styles.css` — shared yellow/cream design system and responsive styles.
- `script.js` — mobile navigation, contact form validation, reveal animations, and back-to-top behavior.

## Local preview
1. Clone repository.
2. Open `index.html` directly in a browser, or run a simple static server:
   - `python3 -m http.server 8080`
3. Visit `http://localhost:8080`.

## Deploy to GitHub Pages
1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, select:
   - Source: `Deploy from a branch`
   - Branch: your main branch (for example `main`) and root (`/`).
4. Save and wait for deployment.
5. Copy the published URL and set `privacy-policy.html` as the Privacy Policy URL in Play Console.

## Before publishing
- Confirm the public domain and Play Console privacy URL.
- Replace demo contact-form behavior with a real backend, email service, or support workflow.
- Have the Privacy Policy and Terms reviewed by qualified legal counsel and participating school leadership.
- Confirm school consent, retention, crisis escalation, and account deletion processes match the deployed app.

## Legal note
Privacy and Terms content is drafted in plain language for product readiness, but must be reviewed and approved by qualified legal counsel and school leadership before production launch.
