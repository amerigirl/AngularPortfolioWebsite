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
      summary: 'Leetcode practice problems :) ',
      description:
        'This is a compilation of easy and medium JavaScript practice exercises for coding interviews.  Data structures and algorithms are also great for building logic and reasoning skills.',
      projectLink: 'https://github.com/amerigirl/JavaScript-Practice-Exercises',
      pictures: ['/assets/images/studying!.jpg'],
      tags: [Tag.JAVASCRIPT],
    },
    {
      id: 0,
      name: 'Student Admin Portal (F.E.)',
      summary: 'Because students need things too!',
      description:
        'This app will give you an opportunity to view, create, update and delete students in a mock database. It will also allow you, once created, to upload an image that shows your student, along with the ability to change your image and basic demographic data at any time. This app uses the Angular framework with Angular Materials for styling. This is a basic CRUD app designed to give you practice with the foundational elements of working with Angular and connecting to an API to provide access to a database for persistent storage.',
      projectLink:
        'https://github.com/amerigirl/Student-Admin-Portal-with-Persistent-Storage',
      pictures: ['/assets/images/SAportal.png'],
      tags: [Tag.TYPESCRIPT, Tag.ANGULAR, Tag.HTML],
    },
    {
      id: 0,
      name: 'Student Admin Portal (B.E.)',
      summary: 'Creating persistent storage with ASP.NET!',
      description:
        'As a companion repo to the Lets-Make-Some-New-Students repo, this repository will offer the connectivity needed to store your student data via a REST API created using ASP .NET Core. It uses automapper to map infomration coming from the front end securely to a SQL database for secure storage and retrival in the frontend for edits, etc.',
      projectLink:
        'https://github.com/amerigirl/Student-Admin-Portal-API-CompanionRepo',
      pictures: ['/assets/images/backendwork.png'],
      tags: [Tag.ASPNET, Tag.CSHARP, Tag.SQL],
    },
  ];

  constructor(private titleservice: Title) {
    //this will set the tab title //built in Javascript service
    this.titleservice.setTitle('Be-Asia McKerracher - Portfolio');
  }
}
