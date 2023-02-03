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
  imagepath:any;
  shop:any;
  logoname:any;
  banner:any;
  shopPage:Boolean=false;
  
  constructor(private CommonService: CommonService,private route:ActivatedRoute,private router: Router,private http:Http) { }

  ngOnInit() {
    this.imagepath = AppSettings.IMAGE_BASE;
    this.shopPage = false;
    this.logoname=localStorage.getItem('logoname');
 this.route.params.subscribe(params => { 
    if(params['shopid']){
      this.shopPage = true;
    }
    this.model.shopname = params['id']; // (+) converts string 'id' to a number
    this.CommonService.getdatabyid(AppSettings.getshopmallproduct,this.model)
  .subscribe(response =>{   
    this.shop = response.shop;
    // console.log(this.shop);
    this.banner = this.imagepath+this.shop.banner;
    $(".banner-img").css("background-image", "url(" + this.banner + ")");
    this.logoname=this.imagepath+this.shop.logo
    localStorage.setItem('logoname', this.shop.logo);

  }); 
 }); 
 
 this.showCart();
this.searchForm();
  }

  searchForm(){
    var searchTrigger = $('button.sidebar-trigger-search'),
    endTriggersearch = $('button.search-close'),
    container = $('.main-search-active');
    searchTrigger.on('click', function() {
        container.addClass('inside');
    });

    endTriggersearch.on('click', function() {
        container.removeClass('inside');
    });
  }
  navigatePage(){
    if(this.shopPage){
      this.router.navigate([this.router.url]);
    }else{
      this.router.navigate(['/']);
    }
    
  }
  showCart(){

    var menuTrigger = $('button.sidebar-trigger'),
            endTrigger = $('button.op-sidebar-close'),
            container = $('.sidebar-cart'),
            wrapper = $('.wrapper');
        
        wrapper.prepend('<div class="body-overlay"></div>');
        menuTrigger.on('click', function() {
            container.addClass('inside');
            wrapper.addClass('overlay-active');
        });
        
        endTrigger.on('click', function() {
            container.removeClass('inside');
            wrapper.removeClass('overlay-active');
        });
        
        $('.body-overlay').on('click', function() {
            container.removeClass('inside');
            wrapper.removeClass('overlay-active');
        });

  }

}
