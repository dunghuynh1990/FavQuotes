import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesServices } from '../../services/quotes';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup: {category: string, quotes: Quote[], icon: string}; 
  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private quoteService: QuotesServices) {
    
  }

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorites(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you wnat to add the qutoe?',
      buttons: [
        {
          text: 'Yes, go ahead',
          handler: () => {
            this.quoteService.addQuoteToFavorites(selectedQuote);
          }
        },
        {
          text: 'No, I changed my mind',
          role: 'cancel',
          handler: () =>{
            console.log('No');
          }
        }
      ]
    });

    alert.present();
  }

  onRemoveFromFavorites(selectionQuote: Quote) {
    this.quoteService.removeQuoteFromFavorites(selectionQuote);
  }

  isFavorite(quote: Quote) {
    return this.quoteService.isQuoteFavorite(quote);
  }
}
