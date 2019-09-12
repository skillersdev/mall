import { Component,OnInit } from '@angular/core';
import { Routes,Router,RouterModule,ActivatedRoute}  from '@angular/router';
import { Http, Response,  RequestOptions, URLSearchParams, Headers } from '@angular/http';
import { AppSettings } from '../appSettings';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: []
})
export class ShoplistComponent {
  title = 'mall';
  model:any;
  productlist:any;  
  image:any;
  
  constructor(private CommonService: CommonService,private route:ActivatedRoute,private router: Router,private http:Http) { }

ngOnInit() {
  this.model={};
  this.image = AppSettings.IMAGE_BASE;
 this.route.params.subscribe(params => {
    this.model.shopname = 'shop1'//params['id']; // (+) converts string 'id' to a number
 }); 
 
  this.CommonService.insertdata(AppSettings.getshopmallproduct,this.model)
  .subscribe(response =>{       
    this.productlist = response.result;
  });
}
}
 