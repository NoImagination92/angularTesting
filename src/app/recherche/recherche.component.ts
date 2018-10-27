import { Component, OnInit } from '@angular/core';
import { Data} from '../../model/data'
import { Coin} from '../../model/Coin'
import { ComapiService } from '../comapi.service';
@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {

  listeCrypto : Coin[] ;

  public recherche : String = "Bitcoin";
  valid : Boolean = true;
  constructor(private comapi : ComapiService) { }

  onClick () {
   this.comapi.getListCrypto ().subscribe (d => this.listeCrypto = d.data);
  }

  ngOnInit() {
  }

}
