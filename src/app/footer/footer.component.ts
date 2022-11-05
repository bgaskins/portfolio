import { Component, OnInit } from '@angular/core';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faTerminal = faTerminal;


  constructor() { }

  ngOnInit(): void {
  }

}
