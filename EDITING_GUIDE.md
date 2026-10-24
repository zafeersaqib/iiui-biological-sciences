# Staff Content Editing Guide (`EDITING_GUIDE.md`)

This guide is designed for departmental administrative officers, faculty coordinators, and web managers responsible for maintaining the **Department of Biological Sciences** website.

You can manage content through two straightforward methods:
1. **Decap CMS Web Interface** (No coding required)
2. **Direct File Editing** (Using Markdown & YAML)

---

## Method 1: Using Decap CMS (Recommended for Daily Updates)

1. **Accessing the Portal**: Open your web browser and navigate to:
   ```
   https://[your-website-url]/admin/
   ```
   *(For local testing, run `npm run dev` and open `http://localhost:4321/admin/`)*.
2. **Logging In**: Sign in with your Netlify Identity or departmental credentials.
3. **Available Collections**:
   - **Faculty Members**: Add new faculty profiles or update designations, research interests, and bios.
   - **Department News**: Publish press releases, student awards, and research grant announcements.
   - **Events & Seminars**: Post upcoming symposia, thesis defenses, and hands-on workshops.
   - **Laboratories & Facilities**: Update equipment inventories and lab descriptions.
   - **Academic Programs**: Review program overviews, duration, and learning outcomes.
4. **Publishing**: After entering the content, click **Publish** in the top-right corner. The changes will automatically be committed and deployed.

---

## Method 2: Direct File Editing

For developers and technical coordinators who prefer editing files directly in the codebase:

### 1. Adding a New Faculty Member
Create a folder inside `src/content/faculty/` using the scholar's lowercase name:
```
src/content/faculty/dr-new-faculty/
├── index.md
├── _publications.yaml
├── _projects.yaml
└── _teaching.yaml
```

#### Step A: `index.md` (Biographical & Contact Info)
```markdown
---
name: "Dr. Full Name"
designation: "Assistant Professor"
role: "Head, Plant Physiology Lab"
avatar: "/assets/images/faculty/dr-new-faculty.jpg"
banner: "/assets/images/faculty/banner-plants.jpg"
email: "faculty.name@iiu.edu.pk"
phone: "+92 (51) 9019800"
office: "Room 205, Science Block, IIUI Sector H-10"
rank_order: 5
research_interests:
  - "Plant Stress Physiology"
  - "Phytochemical Analysis"
short_summary: "Investigating molecular stress responses in local cereal varieties under drought conditions."
scholar_url: "https://scholar.google.com/citations?user=..."
orcid_url: "https://orcid.org/0000-0000-..."
cv_pdf: "/downloads/cv/cv-dr-name.pdf"
education:
  - degree: "Ph.D. in Botany"
    institution: "Quaid-i-Azam University"
    year: "2018"
positions:
  - title: "Assistant Professor"
    institution: "Department of Biological Sciences, IIUI"
    period: "2019 – Present"
---

# About Dr. Full Name

Narrative biography goes here. Highlight **key research themes** in bold text.
```

#### Step B: `_publications.yaml`
Add research articles, book chapters, and conference papers:
```yaml
- title: "Differential expression of drought-responsive genes in Triticum aestivum"
  authors: "Name, F., Co-Author, A."
  journal: "Plant Physiology and Biochemistry"
  year: 2024
  type: "journal" # options: journal, book_chapter, conference
  volume: "210"
  pages: "108-119"
  doi: "https://doi.org/10.1016/j.plaphy.2024.01.001"
  abstract: "Summary of experimental findings..."
```

#### Step C: `_projects.yaml`
```yaml
- title: "Characterization of Salt-Tolerant Endophytic Bacteria from Margalla Flora"
  funding_agency: "Pakistan Science Foundation (PSF)"
  grant_number: "PSF/Res/Bio-142"
  role: "Principal Investigator (PI)"
  duration: "2023 – 2026"
  amount: "3.2 Million PKR"
  status: "Active" # or "Concluded"
  description: "Brief summary of project objectives."
```

#### Step D: `_teaching.yaml`
```yaml
- code: "BIO-203"
  title: "Plant Physiology"
  level: "Undergraduate (BS)"
  semester: "Fall Semester"
  credits: "3 (2+1)"
  link: "/academics/programs/bs-biology"
  description: "Course outline and practical modules summary."
```

---

### 2. Publishing a News Article
Create a new file in `src/content/news/`:
`src/content/news/your-article-slug.md`
```markdown
---
title: "Headline of the Article"
date: "2024-10-23"
author: "Department Media Desk"
category: "Research & Grants" # Categories: Research & Grants, Conferences & Seminars, Admissions & Academics
featured: true
featured_image: "/assets/images/news/sample.jpg"
summary: "Short 2-sentence teaser displayed on homepage cards."
tags:
  - "Genomics"
  - "IIUI"
---

# Full Article Heading

Full article text with subheadings, quotes, and links.
```

---

### 3. Adding an Event or Seminar
Create a new file in `src/content/events/`:
`src/content/events/symposium-title.md`
```markdown
---
title: "International Symposium on Clinical Bioinformatics"
date: "2024-11-28"
time: "10:00 AM – 03:00 PM PKT"
location: "Auditorium, Science Block, IIUI Sector H-10"
category: "Symposium" # Options: Seminar, Conference, Workshop, Viva, Symposium
speaker: "Dr. Invited Scientist"
speaker_title: "Senior Scientist, National Institutes of Health"
featured_image: "/assets/images/events/bioinfo.jpg"
registration_link: "https://forms.gle/..."
summary: "Brief event description."
---

# Event Details

Detailed agenda, keynote themes, and participation criteria.
```

---

### 4. Updating Departmental Contact Details & Statistics
Edit `src/data/settings.yaml` to update:
- Phone extensions and chairperson contact email.
- Key numerical statistics on the homepage.
- Social media handles.
