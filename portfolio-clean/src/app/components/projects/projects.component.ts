import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects = [
    {
      name: 'Join',
      description: 'Join is a Kanban software that simplifies project management, optimizes workflows, and boosts productivity. With customizable boards and automated workflows, teams can track progress and collaborate seamlessly.',
      stack: ['HTML', 'CSS', 'JavaScript'],
      codeLink: 'https://github.com/FabianCaspers/Join.git',
      demoLink: 'https://join.fabiancaspers.com/',
      image: '../../../assets/img/join.png',
      reverse: false
    },
    {
      name: 'Join 2.0',
      description: 'Join is a Kanban software that simplifies project management, optimizes workflows, and boosts productivity. With customizable boards and automated workflows, teams can track progress and collaborate seamlessly.',
      stack: ['HTML', 'CSS', 'JavaScript'],
      codeLink: 'https://github.com/FabianCaspers/join_dark.git',
      demoLink: 'https://darkjoin.fabiancaspers.com/',
      image: '../../../assets/img/join2.png',
      reverse: true
    },
    {
      name: 'Pokedex',
      description: 'Based on the PokeAPI a simple library that provides and catalogues pokemon information.',
      stack: ['HTML', 'CSS', 'JavaScript', 'API'],
      codeLink: 'https://github.com/FabianCaspers/pokedex.git',
      demoLink: 'https://pokedex.fabiancaspers.com/index.html',
      image: '../../../assets/img/pokedex.png',
      reverse: false
    },
    {
      name: 'El Pollo Loco',
      description: "In El Pollo Loco, players help Pepe fight off chickens using a throwable glass bottle and the ability to jump on them. It's a unique and fun game for all ages.",
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
      codeLink: 'https://github.com/FabianCaspers/portfolio-v2.git',
      demoLink: 'https://fabiancaspers.com',
      image: '../../../assets/img/new-portfolio.png',
      reverse: false
    }
  ];
}
