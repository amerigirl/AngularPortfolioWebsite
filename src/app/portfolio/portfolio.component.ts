import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../models/project';
import { Tag } from '../models/tag';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  projects: Project[] = [
    //you have to add the  [].  Remember why? :)

    {
      id: 0,
      name: 'JavaScript Practice Exercises',
      summary: 'A leetcode problem a day keeps the fear away!',
      description:
        'This is a compilation of easy and medium JavaScript practice exercises for coding interviews.  Data structures and algorithms are also great for building logic and reasoning skills.',
      projectLink: 'https://github.com/amerigirl/JavaScript-Practice-Exercises',
      pictures: ['src/assets/images/leetcode.png'],
      tags: [Tag.JAVASCRIPT],
    },
  ];

  constructor(private titleservice: Title) {
    //this will set the tab title //built in Javascript service
    this.titleservice.setTitle('Be-Asia McKerracher - Portfolio');
  }
}
