# mindcare static website

Production-ready static website for **mindcare** (Android package `com.anonymous.mindcare`) to support brand presence, trust communication, and Google Play policy requirements.

## Project purpose
- Public landing site for students, families, and schools.
- Explain app value, features, and school onboarding.
- Provide public Privacy Policy and Terms pages for Google Play.

## File structure
- `index.html` — main site with all required sections.
- `privacy-policy.html` — detailed, editable policy page.
- `terms.html` — editable terms of use.
- `styles.css` — shared design system and responsive styles.
- `script.js` — mobile nav, FAQ accordion, and form validation.

## Local preview
1. Clone repository.
2. Open `index.html` directly in browser, or run a simple static server:
   - `python3 -m http.server 8080`
3. Visit `http://localhost:8080`.

## Deploy to GitHub Pages
1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, select:
   - Source: `Deploy from a branch`
   - Branch: your main branch (e.g., `main`) and root (`/`).
4. Save and wait for deployment.
5. Copy the published URL and set it as Privacy Policy URL in Play Console and in-app.

## Update these before publishing
- Play Store link placeholders: `{{PLAY_STORE_URL}}`
- Contact emails: `{{SUPPORT_EMAIL}}`, `{{PRIVACY_EMAIL}}`
- Developer/school identity: `{{DEVELOPER_OR_SCHOOL_NAME}}`
- Legal URLs: `{{PRIVACY_URL}}`, `{{TERMS_URL}}`
- Account deletion contact/path: `{{ACCOUNT_DELETION_CONTACT}}`
- App version/jurisdiction/retention placeholders in legal pages.

## Legal note
Privacy and Terms content is drafted in plain language for product readiness, but must be reviewed and approved by qualified legal counsel and school leadership before production launch.
