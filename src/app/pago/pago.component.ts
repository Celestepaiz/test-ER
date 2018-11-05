import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActionSequence } from 'protractor';


declare let paypal: any;


@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit, AfterViewChecked {

  name = new FormControl('');
  lastName = new FormControl('');
  email = new FormControl('');

  today: number = Date.now();

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

}
