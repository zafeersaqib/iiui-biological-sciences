# Content Replacement Checklist (`CONTENT_TODO.md`)

This file logs all placeholders, missing departmental assets, statistics, and temporary royalty-free stock imagery used throughout the website. Every item is grouped by page/collection and must be audited and replaced with verified IIUI departmental records and high-resolution on-campus photography before deployment to production.

---

## 1. Global & Settings (`src/data/settings.yaml`, Header, Footer)

- [ ] **Official Contact Numbers**: Verify departmental direct lines and office extension numbers for the Chairperson's office, Program Incharges, and Graduate Admissions desk.
- [x] **Official Department Seal / Crest**: Temporary department crest provided by user and saved to `public/assets/images/dept-logo.png` (shield with DNA helix, green leaf, and gold "Biological Sciences" banner). To be audited or replaced with final SVG vector when provided.
- [x] **Regular Faculty Roster from Timetable Scheduler**: 17 regular faculty members indexed with Roberta Valtorta profile pages and live Fall 2026 course schedules (Prof. Dr. Zafeer Saqib, Dr. Bushra Uzair Zafar, Dr. Naveeda Riaz, Dr. Sarah Gul, Prof. Dr. Asma Gul, Dr. Shaheen Shahzad, etc.).
- [x] **Visiting & Adjunct Faculty**: 56 visiting instructors indexed in `src/data/visiting_faculty.json` with class, day, room, and time allocations from `timetable_scheduler/projects/biological_sciences_fall_2026/schedule.json`.
- [ ] **Social Media Handles**: Verify if the Department maintains independent Facebook/LinkedIn/Twitter channels or utilizes the primary IIUI institutional channels.

---

## 2. Homepage (`src/pages/index.astro`)

- [ ] **Hero Background Video / Photography**: Replace placeholder lab atmosphere banner with high-resolution 4K drone footage or photography of the IIUI H-10 Science Block and students working at the laminar flow hoods.
- [ ] **Department Key Statistics**:
  - `[PLACEHOLDER: 7+ Advanced Research Labs]` — Confirm exact lab count.
  - `[PLACEHOLDER: 14M+ PKR Grants]` — Confirm cumulative HEC/PSF/TDF grant value.
  - `[PLACEHOLDER: 280+ Indexed Publications]` — Confirm cumulative departmental publication count.
  - `[PLACEHOLDER: 120+ Postgraduate Scholars]` — Confirm current active MS & PhD student headcount.
- [ ] **Chairperson's Official Welcome Photo**: Replace avatar placeholder with high-resolution professional portrait of Prof. Dr. Asma Gul.
- [ ] **Industrial & Academic Partners Strip**: Replace placeholder partner logos (HEC, PSF, NIH, PARC, Shaukat Khanum, NUST) with official high-res SVG logos.

---

## 3. Academic Programs (`src/content/programs/*.md`)

- [ ] **BS Biology (BSBIO)**:
  - [ ] Complete 8-semester course codes, credit distribution, and prerequisite mapping approved by Academic Council.
  - [ ] HEC Curriculum Revision Year confirmation.
  - [ ] Fee structure per semester (current tuition fee schedule link).
- [ ] **BS Biotechnology (BSBT)**:
  - [ ] Complete 8-semester course matrix and laboratory practicals list.
  - [ ] Industrial internship partner list and clinical diagnostic rotations.
- [ ] **MS Biotechnology (MSBT)**:
  - [ ] Elective course streams (Agricultural Biotech, Medical Biotech, Industrial Fermentation).
  - [ ] Comprehensive exam and thesis synopsis submission timeline.
- [ ] **PhD Biotechnology (PhDBT)**:
  - [ ] Required coursework credits and GAT/GRE subject test cutoff percentiles.
  - [ ] International reviewer requirements for dissertation evaluation.

---

## 4. Faculty Profiles (`src/content/faculty/`)

### Prof. Dr. Asma Gul (`src/content/faculty/asma-gul/`)
- [ ] Official high-resolution portrait photograph (300 DPI, neutral background).
- [ ] Laboratory banner photo for Molecular Oncology & Genetics Research Lab.
- [ ] Updated list of recent 2024–2026 publications with direct PubMed/Scopus links.
- [ ] Active HEC NRPU project titles, funding allocations, and completion years.
- [ ] Complete curriculum vitae in downloadable PDF format (`cv.pdf`).

### Dr. Shaheen Shahzad (`src/content/faculty/shaheen-shahzad/`)
- [ ] Official high-resolution portrait photograph.
- [ ] Genomics Research Lab interior banner photo.
- [ ] Full publication archive with DOIs.
- [ ] List of supervised MS and PhD theses.
- [ ] Complete curriculum vitae in downloadable PDF format (`cv.pdf`).

### Dr. Bashir Ahmad (`src/content/faculty/bashir-ahmad/`)
- [ ] Official high-resolution portrait photograph.
- [ ] Applied Microbiology and Biotechnology Laboratory (AMBL) banner photo.
- [ ] Complete details on HEC Technology Development Fund (TDF) commercialization projects.
- [ ] Complete curriculum vitae in downloadable PDF format (`cv.pdf`).

### Other Faculty Members (`[TODO]`)
- [ ] Add profile entries for remaining departmental professors, associate professors, assistant professors, and lecturers following `FACULTY_PROFILE_TEMPLATE.md`.

---

## 5. Research Laboratories & Equipment (`src/content/labs/*.md`)

- [ ] **Genomics Research Lab**:
  - [ ] Real photographs of lab benches, thermal cyclers, and electrophoretic documentation systems.
  - [ ] Model numbers and serials of major analytical equipment (e.g. ABI 3500 Genetic Analyzer, Bio-Rad CFX96 Real-Time PCR).
- [ ] **Applied Microbiology and Biotechnology Lab (AMBL)**:
  - [ ] Real photographs of bioreactors, fermenters, autoclaves, and incubator shakers.
  - [ ] Safety protocols and biosafety level (BSL-1/BSL-2) certification documents.
- [ ] **Molecular Oncology & Genetics Lab**:
  - [ ] Real photographs of inverted fluorescent microscope and cell culture hoods.

---

## 6. Student Resources & Downloads (`src/pages/students/downloads.astro`)

- [ ] **Official Forms (PDFs)**:
  - [ ] MS Thesis Synopsis Submission Proforma
  - [ ] PhD Comprehensive Examination Registration Form
  - [ ] Plagiarism Clearance Certificate Request Proforma (Turnitin)
  - [ ] Laboratory Consumables Requisition Slip
  - [ ] Internship Completion & Evaluation Form

---

## 7. News & Events (`src/content/news/`, `src/content/events/`)

- [ ] Replace sample departmental news bulletins with official press releases from the IIUI Public Relations and Media section.
- [ ] Replace placeholder seminar notices with actual upcoming departmental symposium schedules and registration links.

---

## 8. Stock Photos & Image Attribution Index
*Temporary placeholder images (Unsplash/Pexels license - free for non-commercial & educational use)*:
- Hero Lab Texture: Unsplash Photo by National Cancer Institute (`https://unsplash.com/photos/JDrOIACm-dI`)
- Microscope & Culture Dishes: Unsplash Photo by CDC (`https://unsplash.com/photos/vEE00Hx5d0Q`)
- DNA Model & Pipette: Unsplash Photo by Drew Hays (`https://unsplash.com/photos/ktPKyvv8Se4`)
- Students in Science Hall: Unsplash Photo by LinkedIn Sales Solutions (`https://unsplash.com/photos/pAtA8xe_iVM`)
*(All must be superseded by authentic IIUI campus photos prior to official release).*
