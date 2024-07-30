import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../models/project';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  featuredProject = {} as Project;
 // bsModalRef?: BsModalRef;

  constructor(
    private titleservice: Title,
    private projectService: ProjectsService,
    private modalService: BsModalService
  ) {
    //this will set the tab title
    this.titleservice.setTitle('Be-Asia McKerracher - Home');
  }

  ngOnInit(): void {
    this.featuredProject = this.projectService.getProjectById(0);
  }

  // openProjectModal() {

  //   const modalOptions = {
  //     class: 'modal-lg',
  //     initialState: {
  //       project: this.featuredProject
  //     }
  //   }

  //   this.bsModalRef = this.modalService.show(
  //     ProjectModalComponent, modalOptions    )
  //   ;
  // }
}
