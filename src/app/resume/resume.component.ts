import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent {
  constructor(private titleservice: Title) {
    //this will set the tab title
    this.titleservice.setTitle('Be-Asia McKerracher - Resume');
  }
}
