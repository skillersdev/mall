import { Component,OnInit } from '@angular/core';
import { Routes,Router,RouterModule,ActivatedRoute}  from '@angular/router';
import { Http, Response,  RequestOptions, URLSearchParams, Headers } from '@angular/http';
import { AppSettings } from '../appSettings';
import { CommonService } from '../services/common.service';
declare var jquery:any;
declare var $ :any; 

@Component({
  selector: 'allmalls',
  templateUrl: './allMalls.component.html',
  styleUrls: []
})
export class AllMallsComponent implements OnInit{
  title = 'Malls';
  malllist:any;
  image:any;
  shop:any;
  
  constructor(private CommonService: CommonService,private route:ActivatedRoute,private router: Router,private http:Http) { }

ngOnInit() {
  this.image = AppSettings.IMAGE_BASE;
  localStorage.setItem('logoname', 'logo.png');
this.CommonService.getdata(AppSettings.getmalllist)
  .subscribe(response =>{       
    this.malllist = response.result; 
    console.log("allmalls-->",response);
  
    this.shop = response.shop;
  });
}
}
 