# Department of Biological Sciences, IIUI — Web Portal

A world-class, production-ready university department website built for the **Department of Biological Sciences, Faculty of Sciences, International Islamic University Islamabad (IIUI), Pakistan**.

Designed by benchmarking global institutional leaders (**Johns Hopkins University**, **Stonehill College**, and the **Roberta Valtorta** academic scholar layout), as well as national peers (**ASAB NUST** and **CEMB**).

---

## Key Features

1. **Academic Editorial Excellence (JHU Style)**:
   - Full-bleed hero with IIUI's signature Quranic verse (*"Read! In the Name of your Lord, Who has created"* — Surah Al-Alaq 96:1).
   - Audience-driven pathways for Prospective Students, Current Students, Researchers, and Alumni.
   - Editorial *"Research That Matters"* feature sections with research cluster highlights.
2. **Warmth & High-Conversion CTAs (Stonehill Style)**:
   - Bold degree cards for **BS Biology (BSBIO)**, **BS Biotechnology (BSBT)**, **MS Biotechnology (MSBT)**, and **PhD Biotechnology (PhDBT)**.
   - Direct linkages to the centralized IIUI online admissions portal (`https://admission.iiu.edu.pk/`).
3. **Scholar Profile Standard (Roberta Valtorta Template)**:
   - Full-width laboratory banner, circular scholar portrait, and sticky desktop sidebar with Google Scholar, ORCID, ResearchGate, LinkedIn, X, and email links.
   - 6 Interactive Tabs: **About**, **Publications** (reverse-chronological, filterable by type, with DOIs), **Projects** (grant status and funding body), **Teaching** (courses linked to syllabi), **CV & Career** (inline timeline + PDF download), and **Contact** (inquiry form & office hours).
   - Native Web Share API integration and on-the-fly QR Code generation.
4. **Domestic Life Sciences Benchmarks (ASAB / CEMB Style)**:
   - Dedicated laboratory pages with analytical equipment inventories (Real-Time PCR, Bioreactors, NanoDrop, HPLC, Gel Doc, Lyophilizers, Ultra-low Freezers).
   - Real-time aggregated departmental publications database automatically compiled from faculty YAML records.
   - HEC-approved course schemes, credit-hour distributions, and Program Learning Outcomes (PLOs).
5. **Modern Tech Stack**:
   - **Astro 4** static site generator (SSG) with **Tailwind CSS**.
   - **Decap CMS** integration accessible at `/admin` for non-technical administrative staff.
   - Instant client-side search powered by **Pagefind**.
   - Full dark mode with zero Flash of Unstyled Content (FOUC).
   - i18n-ready structure with UI strings externalized in `src/data/i18n.json` for future Urdu (RTL) support.

---

## Directory Structure

```
├── public/
│   ├── admin/                    # Decap CMS admin portal (index.html & config.yml)
│   ├── assets/images/            # Official IIUI crest, banners, placeholders
│   ├── downloads/events/         # Generated .ics calendar files
│   └── robots.txt
├── src/
│   ├── content/                  # Astro Markdown & YAML content collections
│   │   ├── faculty/              # Individual scholar index.md + companion YAMLs
│   │   ├── programs/             # BSBIO, BSBT, MSBT, PhDBT
│   │   ├── news/                 # Press dispatches & grant announcements
│   │   ├── events/               # Academic symposiums & practical workshops
│   │   ├── labs/                 # Facilities & analytical bio-instrumentation
│   │   └── research-areas/       # 6 Core scientific clusters
│   ├── components/               # Header, Footer, UtilityBar, ValtortaProfile, SearchModal
│   ├── data/                     # settings.yaml, i18n.json
│   ├── layouts/                  # Layout.astro with SEO, OpenGraph & JSON-LD
│   ├── pages/                    # File-based static routes
│   └── styles/                   # global.css (CSS variables & biological lattice motifs)
├── CONTENT_TODO.md               # Audit checklist of placeholders needing real data
├── EDITING_GUIDE.md              # Plain-language maintenance guide for staff
├── FACULTY_PROFILE_TEMPLATE.md   # Fill-in profile submission form for faculty
└── astro.config.mjs
```

---

## Local Development & Setup

### Prerequisites
- Node.js (v18 or higher; tested on v22)
- npm or pnpm

### Installation
```bash
# Clone the repository and navigate into the folder
cd iiui-biological-sciences

# Install dependencies
npm install
```

### Run Dev Server
```bash
npm run dev
```
Open `http://localhost:4321` in your browser.

### Production Build & Search Indexing
```bash
npm run build
```
The optimized static build will be placed in the `dist/` directory, and Pagefind will automatically build the search index at `dist/pagefind/`.

---

## Deployment Instructions

### 1. IIUI Institutional Web Server (Apache / Nginx / IIS)
Deploy the contents of the `dist/` folder directly to the university's web directory:
- **Nginx**: Set `root /var/www/science.iiu.edu.pk/biological-sciences;`
- **Apache**: Upload the `dist/` contents to `public_html/biological-sciences/`. Ensure `.htaccess` allows caching of `_astro/` assets.
- **IIS**: Copy `dist/` to the designated `inetpub/wwwroot/` application folder.

### 2. GitHub Pages
1. In `astro.config.mjs`, ensure `site` matches `https://<org>.github.io` and `base` matches your repository name (e.g., `/biological-sciences`).
2. Add a GitHub Actions workflow `.github/workflows/deploy.yml` with the official Astro deployment action.

### 3. Netlify
1. Connect repository in the Netlify Dashboard.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Netlify Identity: Enable Identity in Site Settings to activate Decap CMS at `/admin`.

---

## Content Integrity & Placeholders

In accordance with strict content verification rules, no unverified statistics or names have been invented. All temporary stock images, estimated grant numbers, and placeholder fields are logged in [`CONTENT_TODO.md`](file:///CONTENT_TODO.md).
