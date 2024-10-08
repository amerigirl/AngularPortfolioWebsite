import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent {
  //you need to add a renderer to deal with viewing files or downloading them??

  isSummaryOpen: boolean = false;
  isWorkExperienceOpen: boolean = false;
  isLanguageSkillsOpen: boolean = false;
  isEducationOpen: boolean = false;
  
  constructor(private renderer: Renderer2,private titleservice: Title) {
    //this will set the tab title
    this.titleservice.setTitle('Be-Asia McKerracher - Resume');
  }

  downloadFile() {
    const link = this.renderer.createElement('a'); //learn more about the renderer
    link.setAttribute('target', '_blank'); //opens into a new window
    link.setAttribute('href', '/assets/images/resumePDF2024.pdf');
    link.setAttribute('download', 'resumePDF2024.pdf');
    link.click();
    link.remove();
  }
}
