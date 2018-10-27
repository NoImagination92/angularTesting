import { Injectable } from '@angular/core';
import { Data} from '../model/data'
import { Coin} from '../model/Coin'
import {HttpClient } from '@angular/common/http'
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComapiService {

  cryptoMock : Data = {"data":[{"id":1,"name":"BITCOIN","symbol": "BTC","website_slug":""},{"id":2,"name":"LITCOIN","symbol": "LC","website_slug":""}]};

  listCrypto : Coin[];

  urlListCrypto = "https://api.coinmarketcap.com/v2/listings/";
  urlDetailCrypto = "https://api.coinmarketcap.com/v2/ticker";

  public getListCrypto () : Observable<Data> {
    //
    return this.httpClient.get<Data>(this.urlListCrypto);
    //return this.cryptoMock.data;
  }
  constructor(private httpClient : HttpClient) { }
}
