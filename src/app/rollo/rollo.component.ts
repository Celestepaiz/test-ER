import { Component, OnInit } from '@angular/core';
import {NgbPanelChangeEvent} from '@ng-bootstrap/ng-bootstrap';

declare let paypal: any;

@Component({
  selector: 'app-rollo',
  templateUrl: './rollo.component.html',
  styleUrls: ['./rollo.component.css']
})


export class RolloComponent implements OnInit {
  isCollapsed = false;
  isCollapsed2 = true;

  public beforeChange($event: NgbPanelChangeEvent) {

    if ($event.panelId === 'preventchange-2') {
      $event.preventDefault();
    }

    if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
      $event.preventDefault();
    }
  }

  addScript: boolean = false;
  paypalLoad: boolean = false;

  finalAmount: number = 1;

  paypalconfig = {
    env: 'sandbox',
    client: {
      sandbox: 'AWXKT42pvW0yB-LHRMphM2t-rn4FS9pIldA7DYZdCaziB_bMeGXNsDeQYtXjleYxtM0K38aCTWwEwLGs' 
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.finalAmount, currency: 'USD'}}
          ]
        }
      })
    },

    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        //do somenthing when payment is successful
      })
    }
  };

  ngAfterViewChecked(): void{
    if(!this.addScript){
      this.addPaypalScript().then(() => {
          paypal.Button.render(this.paypalconfig, '#paypal-button-container');
          this.paypalLoad = false;
      })
    }
  }

  addPaypalScript(){
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  } 
  

  constructor() { }

  ngOnInit() {
  }
  
  muestraDetalle(){
    if (this.isCollapsed == true && this.isCollapsed2 == false) {
      this.isCollapsed = false;
      this.isCollapsed2 = true;
    }
  }

  muestraInfo(){
    if (this.isCollapsed2 == true && this.isCollapsed == false) {
      this.isCollapsed = true;
      this.isCollapsed2 = false;
    }
  }


}
