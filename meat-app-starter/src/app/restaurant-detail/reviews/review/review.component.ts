import { Component, OnInit , Input} from '@angular/core';

import {Review} from '../reviews.model'

@Component({
  selector: 'mt-review',
  templateUrl: './review.component.html'
})
export class ReviewComponent implements OnInit {

  @Input() review: Review

  constructor() { }

  ngOnInit() {
  }

}
