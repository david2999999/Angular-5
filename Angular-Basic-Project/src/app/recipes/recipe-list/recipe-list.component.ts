import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Fry Chicken', 'Deep fried chicken recipe is delicious either hot or cold.',
      'https://cdn3.tmbi.com/secure/RMS/attachments/37/300x300/Crispy-Fried-Chicken_exps6445_PSG143429D03_05_5b_RMS.jpg'),
    new Recipe('Strawberry Cobbler I', 'Serve with cream or ice cream.', 'https://images.media-allrecipes.com/images/55969.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
