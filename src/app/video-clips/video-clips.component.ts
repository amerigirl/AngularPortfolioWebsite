import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-video-clips',
  templateUrl: './video-clips.component.html',
  styleUrls: ['./video-clips.component.css']
})
export class VideoClipsComponent {


  constructor(private titleservice: Title) {
    this.titleservice.setTitle('Be-Asia McKerracher - Videos');
 }
}
