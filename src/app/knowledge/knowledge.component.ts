import { Component, OnInit } from '@angular/core';
import { faJava, faSquareJs, faHtml5, faCss3, faBootstrap, faAngular, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.css']
})
export class KnowledgeComponent implements OnInit {

  faJava = faJava;
  faSquareJs = faSquareJs;
  faHtml5 = faHtml5;
  faCss3 = faCss3;
  faAngular = faAngular;
  faReact = faReact;
  faBootstrap = faBootstrap;
  faDatabase = faDatabase;


  constructor() { }

  ngOnInit(): void {
  }

}
