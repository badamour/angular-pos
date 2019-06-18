import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Customer} from '../../dto/customer';
import {NgForm} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Customer[] = [];
  selectedCustomer: Customer = new Customer('', '', '', 0);
  @ViewChild('txtId') txtId: ElementRef;
  @ViewChild('frmCustomer') frmCustomer: NgForm;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.customerService.getAllCustomers().subscribe(customers => {
      this.customers = customers;
    });
  }

  tableRow_Click(customer: Customer): void {
    this.selectedCustomer = Object.assign({}, customer);
  }

  newCustomer(): void {
    this.txtId.nativeElement.focus();
  }

  saveCustomer(): void {
    if (!this.frmCustomer.invalid) {

      this.customerService.saveCustomer(this.selectedCustomer)
        .subscribe(resp => {
          if (resp) {
            alert('Customer has been saved successfully');
            this.customers.push(this.selectedCustomer);
          } else {
            alert('Failed to save the customer');
          }
        });

    } else {
      alert('Invalid Data, Please Correct...!');
    }
  }
}
