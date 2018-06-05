import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, reorderArray } from 'ionic-angular';
import { Quote } from "../../data/quote.interface";
import quotes from '../../data/quotes';
import { QuotesPage } from '../quotes/quotes';

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit{
  quoteCollection: {category: string, quotes: Quote[], icon: string}[];
  quotesPage = QuotesPage
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.quoteCollection = quotes;
  }

  reorderItems(indexes) {
    this.quoteCollection = reorderArray(this.quoteCollection, indexes);
  }
}
