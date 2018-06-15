import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingListState: Observable<{ ingredients: Ingredient[]}>;

  constructor(private slService: ShoppingListService, private store: Store<{shoppingList: { ingredients: Ingredient[] }}>) { }

  ngOnInit() {
    // this will return a slice of the state
    this.shoppingListState = this.store.select('shoppingList');
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }
}
