import { Component, OnInit } from '@angular/core';
import {NgbPanelChangeEvent} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-rollo',
  templateUrl: './rollo.component.html',
  styleUrls: ['./rollo.component.css']
})


export class RolloComponent implements OnInit {

  public beforeChange($event: NgbPanelChangeEvent) {

    if ($event.panelId === 'preventchange-2') {
      $event.preventDefault();
    }

    if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
      $event.preventDefault();
    }
  }

  

  constructor() { }

  ngOnInit() {
  }
  


}
