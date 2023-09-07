import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects = [
    {
      name: 'Flixhub',
      description: 'Flixhub is a clone of Netflix. It displays the latest movies from an API and lets you view details.',
      stack: ['Angular', 'TypeScript', 'API'],
      codeLink: 'https://github.com/FabianCaspers/Netflix-Clone.git',
      demoLink: 'https://flixhub.fabiancaspers.com/',
      image: '../../../assets/img/flixhub.png',
      reverse: false
    },
    {
      name: 'Chatterix',
      description: 'Chatterix is a clone of Slack. You can create channels and write with each other',
      stack: ['HTML', 'Angular', 'TypeScript'],
      codeLink: 'https://github.com/FabianCaspers/slack-clone.git',
      demoLink: 'https://chatterix.fabiancaspers.com/',
      image: '../../../assets/img/chatterix.png',
      reverse: false
    },
    {
      name: 'Join',
      description: 'Join simplifies project management, optimizes workflows, and boosts productivity with customizable boards and automated workflows.',
      stack: ['HTML', 'CSS', 'JavaScript'],
      codeLink: 'https://github.com/FabianCaspers/Join.git',
      demoLink: 'https://join.fabiancaspers.com/',
      image: '../../../assets/img/join.png',
      reverse: false
    },
    {
      name: 'Join [Django]',
      description: 'Join, built with a Django backend, simplifies project management, optimizes workflows, and enhances productivity through customizable boards and automated processes.',
      stack: ['Django', 'CSS', 'JavaScript'],
      codeLink: 'https://github.com/FabianCaspers/join-backend.git',
      demoLink: 'https://darkjoin.fabiancaspers.com/',
      image: '../../../assets/img/join2.png',
      reverse: true
    },
    {
      name: 'El Pollo Loco',
      description: "In El Pollo Loco, players fight chickens with glass bottles and jumping abilities. A unique, fun game for all ages.",
      stack: ['HTML', 'CSS', 'JavaScript'],
      codeLink: 'https://github.com/FabianCaspers/elpolloloco.git',
      demoLink: 'https://elpolloloco.fabiancaspers.com/index.html',
      image: '../../../assets/img/polloloco.png',
      reverse: true
    },
    {
      name: 'Personal Portfolio',
      description: 'My portfolio features projects utilizing Angular, showcasing visually captivating with a focus on web development.',
      stack: ['HTML', 'SCSS', 'Angular'],
      codeLink: 'https://github.com/FabianCaspers/portfolio-clean.git',
      demoLink: 'https://fabiancaspers.com',
      image: '../../../assets/img/new-portfolio.png',
      reverse: false
    }
  ];
}
