import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { OrderConfirmationComponent } from '../order-confirmation/order-confirmation.component';



interface colors {
value: string
}

export interface order{
  forename: string,
  surname: string,
  emailAddress: string,
  addressLineOne: string,
  addressLineTwo: string,
  postcode: string,
  color: string;

}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  orderForm = new FormGroup({
    forename: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    emailAddress: new FormControl('', Validators.required),
    addressLineOne: new FormControl('', Validators.required),
    addressLineTwo: new FormControl(''),
    postcode: new FormControl('', Validators.required),
    color: new FormControl('', Validators.required),
  });

  constructor(public dialog: MatDialog) {}

  colors: colors[] = [
    {value: 'Red'},
    {value: 'Green'},
    {value: 'Blue'},
    {value: 'Yellow'},
  ];

onSubmit()
{
  if (this.orderForm.valid)
  {
    const payload = this.orderForm.value as order;
    console.log(payload) 

    let dialogRef = this.dialog.open(OrderConfirmationComponent, {
      data: {
        forename: payload.forename,
        surname: payload.surname,
        emailAddress: payload.emailAddress,
        addressLineOne: payload.addressLineOne,
        addressLineTwo: payload.addressLineTwo,
        postcode: payload.postcode,
        color: payload.color,
      }

    });
    
     
  }
  else
  {
    return;
  }
}
}


