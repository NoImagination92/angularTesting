import { Injectable } from '@angular/core';
import { Data} from '../model/data'
import { Coin} from '../model/Coin'
import {HttpClient } from '@angular/common/http'
import {Observable } from 'rxjs';
import { DataDetail} from '../model/dataDetail';
import { Detail} from '../model/detail';

@Injectable({
  providedIn: 'root'
})
export class ComapiService {

  //cryptoMock : Data = {"data":[{"id":1,"name":"BITCOIN","symbol": "BTC","website_slug":""},{"id":2,"name":"LITCOIN","symbol": "LC","website_slug":""}]};

  constructor(private httpClient : HttpClient) { }

  listCrypto : Coin[];

  urlListCrypto = "https://api.coinmarketcap.com/v2/listings/";
  urlDetailCrypto = "https://api.coinmarketcap.com/v2/ticker/";

  public getListCrypto () : Observable<Data> {
    //
    return this.httpClient.get<Data>(this.urlListCrypto);
   
  }

  public getCryptoDetails (aCoinId: Number) : Observable<DataDetail> {
    
    console.log("url = "+this.urlDetailCrypto+aCoinId+"/");
    console.log(this.httpClient.get<DataDetail>(this.urlDetailCrypto+aCoinId+"/"));
    return this.httpClient.get<DataDetail>(this.urlDetailCrypto+aCoinId+"/");
    
  } 
}
