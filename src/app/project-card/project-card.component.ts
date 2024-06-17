import { Component, Input } from '@angular/core';
import { Project } from '../models/project';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() Project = {} as Project; //this gives us our model information

}
