import { Component, OnInit } from '@angular/core';

import { ActivatedRoute} from '@angular/router';

import {MenuItem} from '../menu-item/menu-item.model'

import {RestaurantsService} from "../../restaurants/restaurants.service";

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menuCompleto: MenuItem[]

  constructor(private restaurantsService: RestaurantsService,
      private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantsService.menuOfRestaurants(this.route.parent.snapshot.params['id'])
    .subscribe(menuCompleto => this.menuCompleto = menuCompleto)
  }

  addMenuItem(item: MenuItem){
    console.log(`${item.name}`)
  }

}
