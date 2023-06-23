import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { order } from '../landing/landing.component';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.scss']
})
export class OrderConfirmationComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: order, private dialogRef: MatDialogRef<OrderConfirmationComponent>) {}

  confirm()
{
  this.dialogRef.close()
}
}


