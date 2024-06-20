import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../models/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  featuredProject = {} as Project;

  constructor(private titleservice: Title, private projectService: ProjectsService) { //this will set the tab title
    this.titleservice.setTitle('Be-Asia McKerracher - Home');
  }
  ngOnInit(): void {
    this.featuredProject = this.projectService.getProjectById(0);
  }
}
