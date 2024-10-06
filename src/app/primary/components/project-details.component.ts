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
    dialogueBridge: {
      heading: 'Dialogue Bridge',
      subHeading:
        'A Dialogue and Debate Platform That Bridges Different Worlds of opinions',
      image: '',
      backendRepo: 'https://github.com/prasunchakra/DialogueBridge-Backend',
      frontendRepo: 'https://github.com/prasunchakra/DialogueBridge-Frontend',
      backendRepoName: 'DialogueBridge-Backend',
      frontendRepoName: 'DialogueBridge-Frontend',
      websiteUrl: '',
      description: ` <p>
                        Dialogue Bridge is an innovative platform designed to foster meaningful dialogue and debate among individuals with diverse opinions. By bridging different worlds of opinions, it provides a respectful and engaging environment where users can discuss various topics, share perspectives, and learn from one another.
                    </p>
                    <p class="mt-4">
                      This open-source project welcomes contributions from the community. Explore the backend repository on GitHub at <a href="https://github.com/prasunchakra/DialogueBridge-Backend">DialogueBridge-Backend</a> and the frontend repository at <a href="https://github.com/prasunchakra/DialogueBridge-Frontend">DialogueBridge-Frontend</a>. Join us in building a space where constructive dialogue thrives.
                    </p>`,
    },
    ethicalWealth: {
      heading: 'Ethical Wealth',
      subHeading:
        'A Holistic Wealth Development Platform Focusing on Finance, Health, and Education',
      image: '',
      backendRepo: '',
      frontendRepo: '',
      backendRepoName: '',
      frontendRepoName: '',
      websiteUrl: '',
      description: `<p>
                      EthicalWealth is a comprehensive wealth development application that transcends traditional financial management. It embraces finance, health, education, and overall well-being, providing a holistic approach to personal growth. The platform measures your development over days, months, and years, encouraging you to compete against your past self for continuous improvement.
                    </p>
                    <p class="mt-4">
                      This open-source project is open for community contributions. Explore the backend repository on GitHub at <a href="https://github.com/yourusername/EthicalWealth-Backend">EthicalWealth-Backend</a> and the frontend repository at <a href="https://github.com/yourusername/EthicalWealth-Frontend">EthicalWealth-Frontend</a>. Join us in building a platform that fosters holistic growth and ethical wealth accumulation.
                    </p>`,
    },
    blissQuests: {
      heading: 'Bliss Quests',
      subHeading:
        'A Community Platform to Explore Activities for Relaxation and Rejuvenation',
      image: '',
      backendRepo: 'https://github.com/prasunchakra/BlissQuests-Monolith',
      frontendRepo: '',
      backendRepoName: 'BlissQuests-Monolith',
      frontendRepoName: '',
      websiteUrl: '',
      description: `<p>
                      BlissQuests is a platform dedicated to helping individuals discover and share activities that help them unwind and rejuvenate after hard work. Whether it's traveling, sports, recreational activities, or indulging in a favorite hobby, BlissQuests connects you with a community that shares your passions and interests.
                    </p>
                    <p class="mt-4">
                      This open-source project welcomes contributions from the community. Explore the backend repository on GitHub at <a href="https://github.com/yourusername/BlissQuests-Backend">BlissQuests-Backend</a> and the frontend repository at <a href="https://github.com/yourusername/BlissQuests-Frontend">BlissQuests-Frontend</a>. Join us in building a platform where relaxation and enjoyment are just a quest away.
                    </p>`,
    },
  };
}
