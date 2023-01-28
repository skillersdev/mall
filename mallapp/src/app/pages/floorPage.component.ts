import { Component,OnInit } from '@angular/core';
import { Routes,Router,RouterModule,ActivatedRoute}  from '@angular/router';
import { Http, Response,  RequestOptions, URLSearchParams, Headers } from '@angular/http';
import { AppSettings } from '../appSettings';
import { CommonService } from '../services/common.service';
declare var jquery:any;
declare var $ :any; 

@Component({
  selector: 'app-floorpage',
  templateUrl: './floorPage.component.html',
  styleUrls: []
})
export class FloorPageComponent {
  title = 'Floor';
  floorshoplist:any; 
  floorDetails:any; 
  mallfloorList:any; 
  image:any;
  shop:any;
  model:any;
  mallInfo:any; 
  mallLogo:any;
  constructor(private CommonService: CommonService,private route:ActivatedRoute,private router: Router,private http:Http) { }


ngOnInit() {
  this.model={};
  this.image = AppSettings.IMAGE_BASE;

  this.route.params.subscribe(params => { 
    this.model.mallid = params['id']; // (+) converts string 'id' to a number
    this.model.floorid= params['floorid'];
 }); 

 console.log(this.model);
 
 
  this.CommonService.insertdata(AppSettings.getmallshoplist,this.model)
    .subscribe(response =>{       
    this.mallfloorList = response.result;
    this.mallInfo=response.result.mall_det;
    this.mallLogo = this.image+ this.mallInfo.image_name;
    
   
  });

  this.CommonService.insertdata(AppSettings.getshopbymallidfloorid,this.model)
    .subscribe(response =>{       
    this.floorshoplist = response.result;
    this.floorDetails = response.floorDetail;
    this.model.mallName = response.mall_name;

    $(".shop-limited-area").css("background-image", "url(" +this.image+ this.floorDetails[0].image_name + ")");
  });
 

  
  





}



}
 