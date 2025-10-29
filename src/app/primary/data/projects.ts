export interface Project {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  iconClass?: string;
  logoUrl?: string;
  previewUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    slug: 'areteshala',
    name: 'AreteShala',
    shortDescription: 'From Chaos to Clarity: Master Your Career Journey',
    description:
      'Master your interview and career journey with comprehensive tools and real-time AI coaching. Build your professional profile, prep for exams and interviews, and unlock personalized career guidance—from chaos to clarity.',
    iconClass: 'fa-solid fa-graduation-cap',
    liveUrl: 'https://www.areteshala.com'
  },
  {
    slug: 'karmakanban',
    name: 'KarmaKanban',
    shortDescription: 'Transform Your Actions Into Achievement',
    description:
      'AI-powered productivity and goal-tracking platform that evolves with you. Transform your actions into achievement with visual kanban boards, behavioral insights, and personalized planning based on your unique patterns. Go beyond generic productivity and embrace human-centric growth.',
    iconClass: 'fa-solid fa-infinity',
    liveUrl: 'https://karmakanban.com'
  },
];

export function findProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find(p => p.slug === slug);
}

