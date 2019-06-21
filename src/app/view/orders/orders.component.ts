import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Order} from '../../dto/order';
import {OrderService} from '../../service/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  selectedOrder: Order = new Order('', '', '', 0);
  @ViewChild('txtId') txtId: ElementRef;
  @ViewChild('frmOrder') frmOrder: NgForm;

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    this.orderService.getAllOrders().subscribe(orders => {
      this.orders = orders;
    });
  }

  tableRow_Click(order: Order): void {
    this.selectedOrder = Object.assign({}, order);
  }

  newItem(): void {
    this.txtId.nativeElement.focus();
  }

  saveItem(): void {
    if (!this.frmOrder.invalid) {

      this.orderService.saveOrder(this.selectedOrder)
        .subscribe(resp => {
          if (resp) {
            alert('Order has been saved successfully');
            this.orders.push(this.selectedOrder);
          } else {
            alert('Failed to save the Order');
          }
        });

    } else {
      alert('Invalid Data, Please Correct...!');
    }
  }


}
