# Multilingual Landing Page Package

## Features
- Responsive Countdown Timer (auto-scales on mobile)
- Language-specific landing pages (EN, DE, FR, IT, ES)
- Easy-to-extend translation system

## How to Use

1. **Copy Components**
   - Place `CountdownTimer.tsx` in `src/components/`.
   - Ensure `calculateTimeUntilDeadline` is in `src/utils/dateUtils.ts`.
   - Ensure `react-i18next` is set up for translations.

2. **Set Up Pages**
   - For each language, create a folder in `/pages` (e.g., `/pages/en/`, `/pages/de/`).
   - Copy the sample `index.tsx` into each folder and adjust as needed.

3. **Translations**
   - Place translation files in `public/locales/{lang}/common.json`.

4. **Routing**
   - Use your framework's routing to serve `/en`, `/de`, etc.

5. **Language Switcher**
   - Implement a switcher that navigates to the correct language route.

## Example Directory Structure

/pages
  /en
    index.tsx
  /de
    index.tsx
  /fr
    index.tsx
  /it
    index.tsx
  /es
    index.tsx
/src
  /components
    CountdownTimer.tsx
/public
  /locales
    /en
      common.json
    /de
      common.json
    ...

## Notes
- The Countdown Timer will automatically resize on mobile.
- Each language page can be customized as needed.
