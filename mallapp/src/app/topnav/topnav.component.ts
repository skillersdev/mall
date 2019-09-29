import { Component,OnInit } from '@angular/core';
import { Routes,Router,RouterModule,ActivatedRoute}  from '@angular/router';
import { Http, Response,  RequestOptions, URLSearchParams, Headers } from '@angular/http';
import { AppSettings } from '../appSettings';
import { CommonService } from '../services/common.service';

declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: []
})
export class TopnavComponent implements OnInit {
  model:any;  
  image:any;
  shop:any;
  logoname:any;
  
  constructor(private CommonService: CommonService,private route:ActivatedRoute,private router: Router,private http:Http) { }

  ngOnInit() {
    this.image = AppSettings.IMAGE_BASE;
    this.logoname=localStorage.getItem('logoname');
    console.log(this.logoname,'dhana');
//  this.route.params.subscribe(params => { 
//     this.model.shopname = params['id']; // (+) converts string 'id' to a number
//     this.CommonService.insertdata(AppSettings.getshopmallproduct,this.model)
//   .subscribe(response =>{   
//     this.shop = response.shop;
//     console.log(this.shop);
//   }); 
//  }); 
 
     
  }


}
