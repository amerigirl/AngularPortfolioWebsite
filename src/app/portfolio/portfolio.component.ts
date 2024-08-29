import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../models/project';
import { Tag } from '../models/tag';
import { ProjectsService } from '../_services/projects.service';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  projects = {} as Project[]; //let's chat about this!
  isCollapsed: boolean = true;
  typeScript: boolean = false;
  html: boolean = false;
  angular: boolean = false;
  javaScript: boolean = false;
  cSharp: boolean = false;
  java: boolean = false;
  aspNet: boolean = false;
  python: boolean = false;
  nodeJS: boolean = false;
  sql: boolean = false;

  constructor(
    private titleservice: Title,
    private projectService: ProjectsService
  ) {
    //this will set the tab title //built in Javascript service
    this.titleservice.setTitle('Be-Asia McKerracher - Portfolio');
  }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  filter() {
    let filterTags: Tag[] = [];

    if (this.typeScript) {
      filterTags.push(Tag.TYPESCRIPT);
    }

    if (this.html) {
      filterTags.push(Tag.HTML);
    }

    if (this.angular) {
      filterTags.push(Tag.ANGULAR);
    }

    if (this.javaScript) {
      filterTags.push(Tag.JAVASCRIPT);
    }

    if (this.cSharp) {
      filterTags.push(Tag.CSHARP);
    }

    if (this.java) {
      filterTags.push(Tag.JAVA);
    }

    if (this.aspNet) {
      filterTags.push(Tag.ASPNET);
    }

    if (this.python) {
      filterTags.push(Tag.PYTHON);
    }

    if (this.nodeJS) {
      filterTags.push(Tag.NODEJS);
    }
    if (this.sql) {
      filterTags.push(Tag.SQL);
    }

    this.projects = this.projectService.getProjectsByFilter(filterTags);
  }
}
