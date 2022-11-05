import { Component, OnInit } from '@angular/core';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faSquareJs } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
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
  faBootstrap = faBootstrap;
  faAngular = faAngular;
  faDatabase = faDatabase;


  constructor() { }

  ngOnInit(): void {
  }

}
