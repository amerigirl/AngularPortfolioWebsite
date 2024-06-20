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

  constructor(private titleservice: Title, private projectService: ProjectsService) {
    //this will set the tab title //built in Javascript service
    this.titleservice.setTitle('Be-Asia McKerracher - Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }


}
