import { Component, Input } from '@angular/core';
import { Project } from '../models/project';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() Project = {} as Project; //lets you receive data from the parent
  bsModalRef?: BsModalRef; //this is for our modal. ? = optional

  constructor(private modalService: BsModalService) {


  }

  openProjectModal() {
    this.bsModalRef = this.modalService.show('');
  }
}
