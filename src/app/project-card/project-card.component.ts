import { Component, Input } from '@angular/core';
import { Project } from '../models/project';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent {
  @Input() Project = {} as Project; //lets you receive data from the parent
  bsModalRef?: BsModalRef; //this is for our modal. ? = optional

  constructor(private modalService: BsModalService) {}

  openProjectModal() {
    const modalOptions: ModalOptions = {
      //this is a class that lets you define modal options--add to 
      class: 'modal-lg',
    };

    this.bsModalRef = this.modalService.show(ProjectModalComponent, modalOptions);
  }
}
