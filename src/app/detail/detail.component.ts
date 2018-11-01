import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { Detail} from '../../model/detail'
import { ComapiService } from '../comapi.service';
import { DataDetail } from '../../model/dataDetail';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,private comapi : ComapiService){}

  name : string = "";
  id : number = 0 ;  
  cryptoDetails : Detail = new Detail ();
  

  ngOnInit() {
  this.id =  this.route.snapshot.params.id;
  console.log(this.id);
try{
  this.comapi.getCryptoDetails (this.id).subscribe (d => { this.cryptoDetails = d.data});   
  console.log(this.cryptoDetails.name);
}
catch(e){
  console.log(e);
  }
}
}
 
