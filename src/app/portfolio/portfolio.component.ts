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
  project: Project = {
    id: 0,
    name: 'JavaScript Practice',

    summary: 'JavaScript Leetcode practice',
    description:
      'Working through leetcode javascript practice problems can be difficult',
    projectLink: '',
    pictures: [],
    tags: [
      Tag.ANGULAR,
      Tag.ASPNET,
    ], //taken from the tag.ts file
  };

  constructor(private titleservice: Title) {
    //this will set the tab title
    this.titleservice.setTitle('Be-Asia McKerracher - Portfolio');
  }
}
