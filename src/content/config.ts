import { defineCollection, z } from 'astro:content';

const facultyCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    designation: z.string(),
    role: z.string().optional(),
    avatar: z.string().default('/assets/images/faculty-placeholder.svg'),
    photo: z.string().optional(),
    banner: z.string().default('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1600&q=80'),
    email: z.string(),
    phone: z.string().optional(),
    office: z.string(),
    intercom: z.string().optional(),
    faculty_type: z.string().optional(),
    department: z.string().optional(),
    rank_order: z.number().default(10),
    research_interests: z.array(z.string()).default([]),
    short_summary: z.string().default('Faculty member in the Department of Biological Sciences.'),
    scholar_url: z.string().url().optional().or(z.literal('')),
    google_scholar: z.string().optional().or(z.literal('')),
    orcid_url: z.string().url().optional().or(z.literal('')),
    orcid: z.string().optional().or(z.literal('')),
    researchgate_url: z.string().url().optional().or(z.literal('')),
    researchgate: z.string().optional().or(z.literal('')),
    linkedin_url: z.string().url().optional().or(z.literal('')),
    linkedin: z.string().optional().or(z.literal('')),
    x_url: z.string().url().optional().or(z.literal('')),
    x_twitter: z.string().optional().or(z.literal('')),
    cv_pdf: z.string().optional(),
    status: z.string().optional(),
    education: z.array(z.object({
      degree: z.string(),
      institution: z.string(),
      year: z.string(),
    })).optional(),
    positions: z.array(z.object({
      title: z.string(),
      institution: z.string(),
      period: z.string(),
    })).optional(),
  }),
});

const programsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    code: z.string(),
    degree_level: z.enum(['Undergraduate', 'Graduate', 'Postgraduate']),
    duration: z.string(),
    credit_hours: z.string(),
    overview: z.string(),
    eligibility: z.string(),
    order: z.number().default(1),
    plos: z.array(z.string()),
    career_prospects: z.array(z.string()),
    admission_url: z.string().url().default('https://admission.iiu.edu.pk/'),
    scheme_of_studies: z.array(z.object({
      semester: z.string(),
      courses: z.array(z.object({
        code: z.string(),
        title: z.string(),
        credits: z.string(),
        prerequisite: z.string().optional(),
      })),
    })),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
  }),
});

const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    author: z.string().default('Department Communications Desk'),
    category: z.string(),
    summary: z.string(),
    featured_image: z.string(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

const eventsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    time: z.string(),
    location: z.string(),
    category: z.enum(['Seminar', 'Conference', 'Workshop', 'Viva', 'Symposium']),
    speaker: z.string(),
    speaker_title: z.string(),
    featured_image: z.string(),
    registration_link: z.string().optional(),
    summary: z.string(),
  }),
});

const researchAreasCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    lead_faculty: z.array(z.string()),
    featured_image: z.string(),
    order: z.number().default(1),
  }),
});

const labsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    code: z.string(),
    in_charge: z.string(),
    location: z.string(),
    focus: z.string(),
    featured_image: z.string(),
    equipment: z.array(z.object({
      name: z.string(),
      model: z.string(),
      manufacturer: z.string().optional(),
      purpose: z.string(),
    })),
  }),
});

export const collections = {
  faculty: facultyCollection,
  programs: programsCollection,
  news: newsCollection,
  events: eventsCollection,
  'research-areas': researchAreasCollection,
  labs: labsCollection,
};
