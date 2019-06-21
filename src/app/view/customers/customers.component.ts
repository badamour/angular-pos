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
  newcustomerid;
  selectedCustomer: Customer = new Customer('', '', '', 0);
  @ViewChild('txtId') txtId: ElementRef;
  @ViewChild('frmCustomer') frmCustomer: NgForm;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.customerService.getAllCustomers().subscribe(customers => {
      this.customers = customers;
      console.log(this.customers);
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
            alert('Failed to save the customer');
            this.customers.push(this.selectedCustomer);
          } else {
            alert('Customer has been saved successfully');
          }
        });

    } else {
      alert('Invalid Data, Please Correct...!');
    }
  }

  deleteData(temp) {
    const index = this.customers.indexOf(temp);
    this.customers.splice(index, 1);
    this.customerService.daleteCustomer(temp.cusid).subscribe(result => {
      if (result === null) {
        alert('Customer Deleted');
        this.customerService.getAllCustomers().subscribe(customers => {
          this.customers = customers;
        });

      }
    });
  }
}
