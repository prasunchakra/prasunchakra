import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface IProjectDetails {
  heading: string;
  subHeading: string;
  image: string;
  backendRepo: string;
  frontendRepo: string;
  backendRepoName: string;
  frontendRepoName: string;
  description: string;
  websiteUrl: string;
}

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [NgIf],
  template: `
    <div class="flex flex-col items-center p-6 space-y-8">
      <!-- Heading -->
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-semibold text-center">
        {{ selectedProject.heading }}
      </h1>
      <!-- Subheading -->
      <h2 class="text-xl sm:text-2xl md:text-3xl text-center text-violet-400">
        {{ selectedProject.subHeading }}
      </h2>
      <!-- Project Description -->
      <div
        class="max-w-3xl text-justify leading-relaxed text-lg text-violet-100 mt-8 px-4"
        [innerHTML]="selectedProject.description"
      ></div>
      <!-- Image -->
      <!-- <img
        src="{{ selectedProject.image }}"
        alt="Project Image"
        class="w-4/5 h-auto rounded-lg shadow-lg"
      /> -->
      <!-- GitHub Links -->
      <div
        class="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-8"
      >
        <a
          href="{{ selectedProject.frontendRepo }}"
          target="_blank"
          *ngIf="selectedProject.frontendRepo"
          class="flex items-center px-6 py-3 rounded-full bg-white text-slate-950 border border-solid border-white hover:border-violet-700 duration-200 group"
        >
          <i class="fab fa-github text-2xl mr-2"></i>
          <span class="poppins">{{ selectedProject.frontendRepoName }}</span>
        </a>
        <a
          href="{{ selectedProject.backendRepo }}"
          target="_blank"
          *ngIf="selectedProject.backendRepo"
          class="flex items-center px-6 py-3 rounded-full bg-white text-slate-950 border border-solid border-white hover:border-violet-700 duration-200 group"
        >
          <i class="fab fa-github text-2xl mr-2"></i>
          <span class="poppins">{{ selectedProject.backendRepoName }}</span>
        </a>
      </div>
      <!-- Website Link -->
      <div class="mt-6">
        <a
          *ngIf="selectedProject.websiteUrl; else noUrl"
          [href]="selectedProject.websiteUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="px-8 py-4 rounded-full bg-violet-800 text-white text-lg font-medium hover:bg-violet-500 duration-200 group"
        >
          Visit the Website
        </a>

        <ng-template #noUrl>
          <button
            class="px-8 py-4 rounded-full bg-gray-400 text-white text-lg font-medium cursor-not-allowed relative"
            disabled
          >
            Visit the Website
            <span class="absolute -top-2 right-2 text-sm text-red-500">*</span>

            <!-- Custom tooltip -->
            <span class="tooltip">Work in progress</span>
          </button>
        </ng-template>
      </div>
    </div>
  `,
  styles: [
    `
      button {
        position: relative;
      }

      .tooltip {
        visibility: hidden;
        background-color: #333;
        color: #fff;
        text-align: center;
        border-radius: 5px;
        padding: 5px;
        position: absolute;
        z-index: 1;
        bottom: 125%; /* Adjust as needed */
        left: 50%;
        transform: translateX(-50%);
        white-space: nowrap;
        font-size: 12px;
        opacity: 0;
        transition: opacity 0.3s;
      }

      .tooltip::after {
        content: '';
        position: absolute;
        top: 100%; /* Arrow points down */
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #333 transparent transparent transparent;
      }

      button:hover .tooltip {
        visibility: visible;
        opacity: 1;
      }
    `,
  ],
})
export class ProjectDetailsComponent {
  selectedProject: IProjectDetails = {
    heading: '',
    subHeading: '',
    image: '',
    backendRepo: '',
    frontendRepo: '',
    backendRepoName: '',
    frontendRepoName: '',
    description: '',
    websiteUrl: '',
  };
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.selectedProject = this.projectDetails[params['projectName']];
    });
  }
  projectDetails: { [key: string]: IProjectDetails } = {
    "OmniSphere": {
      "heading": "OmniSphere",
      "subHeading": "A next-generation super app that seamlessly integrates e-commerce, ride-hailing, food delivery, and essential services into one powerful platform. Designed for efficiency and convenience, it is poised to redefine the digital marketplace.",
      "image": "https://prasunchakra.com/assets/images/omnisphere.png",
      "backendRepo": "https://github.com/prasunchakra/OmniSphere-backend",
      "frontendRepo": "https://github.com/prasunchakra/OmniSphere-frontend",
      "backendRepoName": "Codebase:- OmniSphere Backend",
      "frontendRepoName": "Codebase:- OmniSphere Frontend",
      "websiteUrl": "",
      "description": ""
    },
    "InQuizitive": {
      "heading": "InQuizitive",
      "subHeading": "An interactive quiz platform designed to spark curiosity and engage learners. Built with scalability in mind, it’s on track to become a full-fledged EdTech solution—integrating robust LMS features, dynamic analytics, and more.",
      "image": "https://prasunchakra.com/assets/images/inquizitive.png",
      "backendRepo": "https://github.com/prasunchakra/InQuizitive-backend",
      "frontendRepo": "https://github.com/prasunchakra/InQuizitive-frontend",
      "backendRepoName": "Codebase:- InQuizitive Backend",
      "frontendRepoName": "Codebase:- InQuizitive Frontend",
      "websiteUrl": "https://inquizitive.prasunchakra.com/",
      "description": ""
    },
    "TravelBuddy": {
      "heading": "TravelBuddy",
      "subHeading": "An AI-powered travel assistant that personalizes itineraries, suggests hidden gems, and optimizes trip planning with real-time insights. Designed to make traveling seamless and unforgettable.",
      "image": "https://prasunchakra.com/assets/images/travelbuddy.png",
      "backendRepo": "https://github.com/prasunchakra/TravelBuddy-backend",
      "frontendRepo": "https://github.com/prasunchakra/TravelBuddy-frontend",
      "backendRepoName": "Codebase:- TravelBuddy Backend",
      "frontendRepoName": "Codebase:- TravelBuddy Frontend",
      "websiteUrl": "",
      "description": ""
    },
    "ThreatSentry": {
      "heading": "ThreatSentry",
      "subHeading": "A cutting-edge AI-driven cybersecurity platform that proactively detects and mitigates security threats in real-time. Engineered for enterprises to stay ahead of cyber risks.",
      "image": "https://prasunchakra.com/assets/images/threatsentry.png",
      "backendRepo": "https://github.com/prasunchakra/ThreatSentry-backend",
      "frontendRepo": "https://github.com/prasunchakra/ThreatSentry-frontend",
      "backendRepoName": "Codebase:- ThreatSentry Backend",
      "frontendRepoName": "Codebase:- ThreatSentry Frontend",
      "websiteUrl": "",
      "description": ""
    },
    "SkillTailor": {
      "heading": "SkillTailor",
      "subHeading": "An AI-powered learning platform that intelligently adapts to user preferences, offering curated courses and skill-building pathways for a tailored learning experience.",
      "image": "https://prasunchakra.com/assets/images/skilltailor.png",
      "backendRepo": "https://github.com/prasunchakra/SkillTailor-backend",
      "frontendRepo": "https://github.com/prasunchakra/SkillTailor-frontend",
      "backendRepoName": "Codebase:- SkillTailor Backend",
      "frontendRepoName": "Codebase:- SkillTailor Frontend",
      "websiteUrl": "",
      "description": ""
    },
    "InterviewPrepAI": {
      "heading": "InterviewPrepAI",
      "subHeading": "A state-of-the-art AI-powered interview preparation tool that provides resume analysis, personalized question generation, and AI-driven feedback to help job seekers excel.",
      "image": "https://prasunchakra.com/assets/images/interviewprepai.png",
      "backendRepo": "https://github.com/prasunchakra/InterviewPrepAI-backend",
      "frontendRepo": "https://github.com/prasunchakra/InterviewPrepAI-frontend",
      "backendRepoName": "Codebase:- InterviewPrepAI Backend",
      "frontendRepoName": "Codebase:- InterviewPrepAI Frontend",
      "websiteUrl": "",
      "description": ""
    },
    "FinView": {
      "heading": "FinView",
      "subHeading": "A smart personal finance assistant that tracks expenses, analyzes spending habits, and provides AI-driven financial recommendations to optimize savings.",
      "image": "https://prasunchakra.com/assets/images/finview.png",
      "backendRepo": "https://github.com/prasunchakra/FinView-backend",
      "frontendRepo": "https://github.com/prasunchakra/FinView-frontend",
      "backendRepoName": "Codebase:- FinView Backend",
      "frontendRepoName": "Codebase:- FinView Frontend",
      "websiteUrl": "",
      "description": ""
    },
    "TableTalks": {
      "heading": "TableTalks",
      "subHeading": "An AI-moderated debate and discussion platform that enhances structured argumentation, logical reasoning, and fact-checking for productive discourse.",
      "image": "https://prasunchakra.com/assets/images/tabletalks.png",
      "backendRepo": "https://github.com/prasunchakra/TableTalks-backend",
      "frontendRepo": "https://github.com/prasunchakra/TableTalks-frontend",
      "backendRepoName": "Codebase:- TableTalks Backend",
      "frontendRepoName": "Codebase:- TableTalks Frontend",
      "websiteUrl": "",
      "description": ""
    },
    "HealthHarmony": {
      "heading": "HealthHarmony",
      "subHeading": "An AI-driven health companion that offers personalized diet and fitness plans, tracking progress, and optimizing wellness based on individual habits and goals.",
      "image": "https://prasunchakra.com/assets/images/healthharmony.png",
      "backendRepo": "https://github.com/prasunchakra/HealthHarmony-backend",
      "frontendRepo": "https://github.com/prasunchakra/HealthHarmony-frontend",
      "backendRepoName": "Codebase:- HealthHarmony Backend",
      "frontendRepoName": "Codebase:- HealthHarmony Frontend",
      "websiteUrl": "",
      "description": ""
    },
    "BlockDrive": {
      "heading": "BlockDrive",
      "subHeading": "A decentralized and secure cloud storage solution leveraging blockchain technology to provide immutable, encrypted, and peer-to-peer file storage.",
      "image": "https://prasunchakra.com/assets/images/blockdrive.png",
      "backendRepo": "https://github.com/prasunchakra/BlockDrive-backend",
      "frontendRepo": "https://github.com/prasunchakra/BlockDrive-frontend",
      "backendRepoName": "Codebase:- BlockDrive Backend",
      "frontendRepoName": "Codebase:- BlockDrive Frontend",
      "websiteUrl": "",
      "description": ""
    }
  }
  ;
}
