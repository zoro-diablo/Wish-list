import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('Go to the movies', true),
    new WishItem('Go to the store', false),
    new WishItem('Grass that cuts itself'),
  ];

  filter: any = () => {};


  get visibleItems(): WishItem[] {
    return this.items.filter(this.filter);
  }
}
