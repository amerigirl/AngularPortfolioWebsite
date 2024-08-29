import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  //this service is fetching data from here.  Can we add a service where the data is stored in the future?
  projects: Project[] = [
    {
      id: 0,
      name: 'JavaScript Practice Exercises',
      summary: 'Learning with Leetcode  :)',
      description:
        'This is a compilation of easy and medium JavaScript practice exercises for coding interviews.  Data structures and algorithms are also great for building logic and reasoning skills.',
      projectLink: 'https://github.com/amerigirl/JavaScript-Practice-Exercises',
      pictures: [
        '/assets/images/studying!.jpg',
        '/assets/images/Karat_practice_list.png',
        '/assets/images/basic_practice.jpg',
      ],
      tags: [Tag.JAVASCRIPT],
    },
    {
      id: 1,
      name: 'Student Admin Portal (F.E.)',
      summary: 'Because students need things too!',
      description:
        'This app will give you an opportunity to view, create, update and delete students in a mock database. It will also allow you, once created, to upload an image that shows your student, along with the ability to change your image and basic demographic data at any time. This app uses the Angular framework with Angular Materials for styling. This is a basic CRUD app designed to give you practice with the foundational elements of working with Angular and connecting to an API to provide access to a database for persistent storage.',
      projectLink:
        'https://github.com/amerigirl/Student-Admin-Portal-with-Persistent-Storage',
      pictures: ['/assets/images/SAportal.png'],
      tags: [ Tag.ANGULAR, Tag.HTML],
    },
    {
      id: 2,
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

  constructor() {}

  getProjects() {
    return this.projects;
  }

  getProjectById(id: number): Project {
    //identifies the return type after :

    let project = this.projects.find((project) => project.id === id);

    //just in case :)
    if (project === undefined) {
      throw new TypeError('There is no project that matches the id: ' + id);
    }

    return project;
  }

  getProjectsByFilter(filterTags: Tag[]) {
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project) {
      let foundAll = true;

      filterTags.forEach(function (filterTag) {
        if (project.tags.includes(filterTag) == false) {
          foundAll = false;
        }
      });

      if (foundAll) {
        filteredProjects.push(project);
      }
    });

    return filteredProjects;
  }
}
