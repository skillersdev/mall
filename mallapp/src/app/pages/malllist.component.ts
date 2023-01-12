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
  styleUrls: ['./malllist.style.scss']
})
export class MalllistComponent {
  title = 'mall';
  mallshoplist:any;  
  image:any;
  shop:any;
  model:any;
  mallInfo:any;
  mallfloorList:any;  
  mallLogo:any;
  constructor(private CommonService: CommonService,private route:ActivatedRoute,private router: Router,private http:Http) { }


ngOnInit() {
  this.model={};
  this.image = AppSettings.IMAGE_BASE;

  this.route.params.subscribe(params => { 
    this.model.mallid = params['id']; // (+) converts string 'id' to a number
    this.model.mall_id= params['id'];
 }); 

 
 
  localStorage.setItem('logoname', 'logo.png');
this.CommonService.insertdata(AppSettings.getmallshoplist,this.model)
  .subscribe(response =>{       
    this.mallshoplist = response.result;
    this.mallInfo=response.result.mall_det;
    console.log("response.result-->",this.mallInfo);
    this.mallLogo = this.image+ this.mallInfo.image_name;
    $(".shop-limited-area").css("background-image", "url(" +this.image+ this.mallInfo.image_name + ")");
    $(".pic").css("background-image", "url(" +this.image+ this.mallInfo.image_name + ")");
    // console.log("mallshoplist",this.mallshoplist);
    // console.log("response.result-->",response.result);
  });
 
  this.model.usergroup=2;
  
  
  this.CommonService.insertdata(AppSettings.getfloorlist,this.model)
  .subscribe(response =>{       
    this.mallfloorList = response.result;
    
  });



  var $cont = document.querySelector('.cont');
var $elsArr = [].slice.call(document.querySelectorAll('.el'));
var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

setTimeout(function() {
  $cont.classList.remove('s--inactive');
}, 200);

$elsArr.forEach(function($el) {
  $el.addEventListener('click', function() {
    if (this.classList.contains('s--active')) return;
    $cont.classList.add('s--el-active');
    this.classList.add('s--active');
  });
});

$closeBtnsArr.forEach(function($btn) {
  $btn.addEventListener('click', function(e) {
    e.stopPropagation();
    $cont.classList.remove('s--el-active');
    document.querySelector('.el.s--active').classList.remove('s--active');
  });
});



}



}
 