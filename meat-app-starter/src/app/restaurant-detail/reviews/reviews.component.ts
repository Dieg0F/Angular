import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

import {RestaurantsService} from "../../restaurants/restaurants.service";

import {Review} from './reviews.model'

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Review[]

  constructor(private restaurantsService: RestaurantsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantsService.reviewsOfRestaurants(this.route.parent.snapshot.params['id'])
    .subscribe(reviews => this.reviews = reviews)
  }

}
