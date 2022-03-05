import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
// import {ConfirmDialogModule} from 'primeng/confirmdialog';
// import {ConfirmationService} from 'primeng/api';
@Component({
  selector: 'app-ejm',
  templateUrl: './ejm.component.html',
  styleUrls: ['./ejm.component.css']
})
export class EjmComponent implements OnInit {
  sss: any
  // products: Product[] = [];
  product:Product = {
    id:'ejm',
    code:'ejm',
    name:'ejm',
    description:'ejm',
    price:1,
    quantity:2,
    inventoryStatus:'ejm',
    category:'ejm',
    image:'ejm',
    rating:1
}


  constructor() { }

//   confirm() {
//     this.confirmationService.confirm({
//         message: 'Are you sure that you want to perform this action?',
//         accept: () => {
//             //Actual logic to perform a confirmation
//         }
//     });
// }

  ngOnInit(): void {
  }

}
