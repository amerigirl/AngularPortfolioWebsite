import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../models/project';
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
    tags: ["JavaScript", "Leetcode"],
  };

  constructor(private titleservice: Title) {
    //this will set the tab title
    this.titleservice.setTitle('Be-Asia McKerracher - Portfolio');
  }
}
