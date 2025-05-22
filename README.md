# Spikers Dashboard

A modern, modular, and fully responsive Angular dashboard UI, built with Tailwind CSS, Angular signals, and best practices for accessibility, design tokens, and maintainability.
![image](https://github.com/user-attachments/assets/869a6e7e-d307-4f65-8f3f-3a110cd70129)
![image](https://github.com/user-attachments/assets/62967089-331f-4bd5-b0d9-0d55e4803b73)
![image](https://github.com/user-attachments/assets/c69efb85-d55b-4096-9d1b-b684c6ef7e32)
![image](https://github.com/user-attachments/assets/f85d52ac-61ff-434a-a15a-ff6ad96f0d36)
![image](https://github.com/user-attachments/assets/7ed32644-150b-41ad-ab41-6181e1e39916)




---

## Features

- **Sidebar Navigation**
  - Responsive, collapsible sidebar with ARIA and keyboard accessibility.
  - Navigation links with icons and active state.
  - Language switcher (English/Kiswahili) with instant UI update.
  - User profile and logout button.

- **Dashboard Layout**
  - Main dashboard page with a two-panel layout:
    - **Center Information Panel**: Info panels, remediation techniques, and info tables.
    - **Right Information Panel**: Risk summary, contextual risk table, and asset flow visualization.

- **Asset Flow Visualization**
  - Custom, responsive flow diagram showing asset relationships and risk status.
  - Uses SVG for arrows and PrimeNG icons for nodes.

- **Contextual Risk Table**
  - Responsive, paginated table of assets and their contextual risk.
  - Uses design tokens for all colors, font sizes, and weights.
  - Fully accessible and keyboard navigable.

- **Risk Summary**
  - Doughnut chart (PrimeNG/Chart.js) showing risk distribution.
  - Custom legend and center value.
  - ARIA roles for screen reader accessibility.

- **Remediation Techniques**
  - Expandable/collapsible cards for remediation advice.
  - ARIA attributes for accessibility.

- **Internationalization**
  - Uses `@ngx-translate/core` for runtime language switching.
  - English and Kiswahili translations included.

- **Design Tokens & Theming**
  - All colors, font sizes, radii, and shadows are managed via SCSS/CSS variables and Tailwind classes.

- **Accessibility**
  - Semantic HTML, ARIA tags, and keyboard navigability throughout.

---

## Project Structure

```
src/
  app/
    elements/
      components/
        sidebar/           # Sidebar navigation
        layout-container/  # Main layout wrapper
      pages/
        examples/          # Demo and theme reference
    features/
      components/
        asset-flow/                # Asset flow diagram
        contextual-risk-table/     # Risk table
        risk-summary/              # Risk summary chart
        remediation-techniques-card/ # Remediation cards
        ... (other modular components)
      pages/
        dashboard-page/            # Main dashboard page
      services/
        asset.service.ts           # Asset data and pagination
        sidebar-state.service.ts   # Sidebar open/minimized state
    models/
      asset.interface.ts           # Asset data model
      ... (other interfaces)
  styles/
    _custom-tailwind.scss         # Design tokens and Tailwind customizations
    _variables.scss               # SCSS variables for design tokens
  public/
    i18n/                         # Translation files (en.json, sw.json)
```

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- Angular CLI (`npm install -g @angular/cli`)
- pnpm or npm

### Install dependencies

```bash
pnpm install
# or
npm install
```

### Development server

```bash
ng serve
```

Navigate to `http://localhost:4200/`.

### Building for production

```bash
ng build
```

### Running tests

```bash
ng test
```

---

## Accessibility & Best Practices

- All navigation and interactive elements are keyboard accessible.
- ARIA roles and labels are used for screen readers.
- No inline styles; all styling is via classes and design tokens.
- Fully responsive and mobile-friendly.

---

## Internationalization

- Switch languages instantly using the sidebar language switcher.
- Add more languages by extending the `public/i18n/` JSON files.

---

## Theming & Design Tokens

- All colors, font sizes, radii, and shadows are defined in `src/styles/_custom-tailwind.scss` and `src/styles/_variables.scss`.
- Use these tokens for consistent, maintainable styling.

---

## Example & Theme Reference

Visit `/examples` in the app for a live reference of all theme tokens, colors, radii, spacing, and typography.

---

## License

MIT
