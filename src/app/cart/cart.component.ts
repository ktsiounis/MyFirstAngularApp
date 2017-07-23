import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
  @Input() items = [];
  newItem = '';

  ngOnInit() {
    console.log(this.items);
    console.log('hello');
  }
  addItem() {
    if (this.newItem !== '') {
      this.items.push(this.newItem);
      this.newItem = '';
    }
    console.log(this.items);
  }
}
