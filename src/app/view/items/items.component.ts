import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Item} from '../../dto/item';
import {ItemService} from '../../service/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[] = [];
  selectedItem: Item = new Item('', '', 0, 0);
  @ViewChild('txtId') txtId: ElementRef;
  @ViewChild('frmItem') frmItem: NgForm;

  constructor(private itemService: ItemService) {
  }

  ngOnInit() {
    this.itemService.getAllItems().subscribe(items => {
      this.items = items;
    });
  }

  tableRow_Click(item: Item): void {
    this.selectedItem = Object.assign({}, item);
  }

  newItem(): void {
    this.txtId.nativeElement.focus();
  }

  saveItem(): void {
    if (!this.frmItem.invalid) {

      this.itemService.saveItem(this.selectedItem)
        .subscribe(resp => {
          if (resp) {
            alert('Item has been saved successfully');
            this.items.push(this.selectedItem);
          } else {
            alert('Failed to save the item');
          }
        });

    } else {
      alert('Invalid Data, Please Correct...!');
    }
  }

}
