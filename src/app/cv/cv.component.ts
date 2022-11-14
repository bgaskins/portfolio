import { Component, OnInit } from '@angular/core';
import { faFile } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

    faFile = faFile;
  
  constructor() { }

  ngOnInit(): void {
  }
  
  
  downloadFile() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('download', `bryan-gaskins-CV.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

}
