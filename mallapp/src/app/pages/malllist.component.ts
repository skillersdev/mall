import { Component,OnInit } from '@angular/core';
import { Routes,Router,RouterModule,ActivatedRoute}  from '@angular/router';
import { Http, Response,  RequestOptions, URLSearchParams, Headers } from '@angular/http';
import { AppSettings } from '../appSettings';
import { CommonService } from '../services/common.service';
declare var jquery:any;
declare var $ :any; 

@Component({
  selector: 'app-malllist',
  templateUrl: './malllist.component.html',
  styleUrls: []
})
export class MalllistComponent {
  title = 'mall';
  model:any;
  productlist:any;  
  image:any;
  mall:any;
  banner:any;
  
  constructor(private CommonService: CommonService,private route:ActivatedRoute,private router: Router,private http:Http) { }

ngOnInit() {
  this.model={};
  this.image = AppSettings.IMAGE_BASE;

this.CommonService.getdata(AppSettings.getshopmallproduct)
  // this.CommonService.insertdata(AppSettings.getshopmallproduct,this.model)
  .subscribe(response =>{       
    this.productlist = response.result;
    this.mall = response.shop;
  });
}
}
 