export interface Project {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  iconClass?: string;
  logoUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    slug: 'xtodo',
    name: 'XTodo',
    shortDescription: 'Unlock peak productivity with a modern, intelligent, and AI-powered task manager along with a touch of human expertise',
    description:
      'Modern, feature-rich todo app built with Angular 20, PrimeNG, and Tailwind CSS. Organize tasks, manage projects, and track productivity with smart filtering, a stats dashboard, and a responsive UI. Local storage by default, easily extendable to APIs. Fast, elegant, and open source.',
    iconClass: 'fa-solid fa-list-check',
    githubUrl: 'https://github.com/prasunchakra/xtodo',
    liveUrl: 'https://xtodo.prasunchakra.com'
  },
  {
    slug: 'yexam',
    name: 'YExam',
    shortDescription: 'Master exams with the ultimate practice platform offering tailored mocks, expert insights and custom support.',
    description:
      'An AI-powered exam preparation platform that helps students prepare for exams with tailored mocks and expert insights.',
    iconClass: 'fa-solid fa-file-pen',
    githubUrl: 'https://github.com/prasunchakra/yexam',
    liveUrl: 'https://yexam.prasunchakra.com'
  },
  {
    slug: 'zfarming',
    name: 'ZFarming',
    shortDescription: 'Harness the power of AI to revolutionize your urban gardening. Overcome various challenges and enjoy farming as a rewarding hobby.',
    description:
      'An AI-powered urban gardening platform that helps everyone optimize their operations with tailored insights and expert support.',
    iconClass: 'fa-solid fa-wheat-awn',
    githubUrl: 'https://github.com/prasunchakra/zfarming',
    liveUrl: 'https://zfarming.prasunchakra.com'
  },
];

export function findProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find(p => p.slug === slug);
}

