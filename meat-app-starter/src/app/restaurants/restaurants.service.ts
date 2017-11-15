import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import  'rxjs/add/operator/map';
import  'rxjs/add/operator/catch';

import {ErrorHandler} from "../app.error-handler";

import {Restaurant} from "./restaurant/restaurant.model";
import {Review} from "../restaurant-detail/reviews/reviews.model";

import {MenuItem} from '../restaurant-detail/menu-item/menu-item.model'

import {MEAT_API} from "../app.api"

@Injectable()
export class RestaurantsService{

 constructor(private http: Http){}

 restaurants(): Observable<Restaurant[]>{
   return this.http.get(`${MEAT_API}/restaurants`)
    .map(response => response.json()) /// Mapeando e retornando um JSON
    .catch(ErrorHandler.handlerError)
 }

 restaurantById(id: string): Observable<Restaurant>{
   return this.http.get(`${MEAT_API}/restaurants/${id}`)
    .map(response => response.json())
    .catch(ErrorHandler.handlerError)
 }

 reviewsOfRestaurants(id: string): Observable<Review[]>
 {
   return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
   .map(response => response.json())
   .catch(ErrorHandler.handlerError)
 }

 menuOfRestaurants(id: string): Observable<MenuItem[]>
 {
   return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
   .map(response => response.json())
   .catch(ErrorHandler.handlerError)
 }

}
