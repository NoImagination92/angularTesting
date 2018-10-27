import { Component, OnInit, Input } from '@angular/core';
import { Coin} from '../../model/Coin'

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  @Input () coin : Coin;
  constructor() { 
    this.coin = new Coin ();
  }

  ngOnInit() {
  }

}
