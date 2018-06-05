import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesServices } from '../../services/quotes';
import { QuotePage } from '../quote/quote';
import { SettingServices } from '../../services/settings';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[];
  constructor(
    private quoteService: QuotesServices,
    private modalCtrl: ModalController,
    private settingServices: SettingServices
  ) {}

  ionViewWillEnter() {
    this.quotes = this.quoteService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove:boolean) => {
      if(remove) {
        this.onRemoveFromFavorite(quote);
      }
    });
  }

  onRemoveFromFavorite(quote: Quote) {
    this.quoteService.removeQuoteFromFavorites(quote);
    const position = this.quotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id === quote.id;
    });
    this.quotes.splice(position,1);
  }

  isAltBackground() {
    return this.settingServices.isAltBackground();
  }
}
