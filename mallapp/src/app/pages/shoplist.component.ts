import { Component,OnInit } from '@angular/core';
import { Routes,Router,RouterModule,ActivatedRoute}  from '@angular/router';
import { Http, Response,  RequestOptions, URLSearchParams, Headers } from '@angular/http';
import { AppSettings } from '../appSettings';
import { CommonService } from '../services/common.service';
declare var jquery:any;
declare var $ :any; 

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: []
})
export class ShoplistComponent implements OnInit  {
  title = 'mall';
  public model:any;
  productlist:any;  
  image:any;
  shop:any;
  category:any;
  banner:any;
  viewData:any;
  selectedQty : any;
  orderItems:any;
  bannerDetail:any;
  customerData:any;
  productdata:any;
  productfilter:any;
  mallLogo:any;
  shopactionModel:any;
  
  constructor(private CommonService: CommonService,private route:ActivatedRoute,private router: Router,private http:Http) { }

ngOnInit() {
  this.model={};
  this.shopactionModel={};
  this.model.selectedQty=1;
  this.image = AppSettings.IMAGE_BASE;
  this.customerData={};
  this.productdata=[];
  
 this.route.params.subscribe(params => { 
    this.model.shopname = params['shopid']; 
    this.model.floorCode = params['floorid'];
    this.model.mallName = params['id'];// (+) converts string 'id' to a number
    localStorage.setItem('shopUrl','mall/'+params['id']+'/floor/'+params['floorid']+'/shop/'+params['shopid'])
 }); 
 
  this.CommonService.insertdata(AppSettings.getshopmallproduct,this.model)
  .subscribe(response =>{  
    this.productlist = response.result;
    this.shop = response.shop;
    this.shopactionModel.totalfollowers = this.shop.follow_count;
    this.shopactionModel.totalviewers = this.shop.view_count;
    this.category=response.categorylist;

    this.bannerDetail = (this.shop.shop_banner_detail)?this.shop.shop_banner_detail:this.shop.banner;
    this.banner = this.image+this.bannerDetail;

    console.log(this.banner);
    this.mallLogo = this.image+ this.shop.logo;
    this.category.forEach(catData => {
        

        this.productfilter=response.result.filter(res => res.category_id == catData.id);
       this.productdata.push({catName:catData.category_name,productlist:this.productfilter});   

    });
    if(this.shop.logo){
      $("#my_image").attr("src",this.mallLogo);
    }else{
      $("#my_image").attr("src","assets/img/logo/logo.png");
    }
   

    $(".banner-img").css("background-image", "url(" + this.banner + ")");
    

    console.log("this.productdata--->",this.mallLogo);
    localStorage.setItem('logoname', this.shop.logo);
    localStorage.setItem('shopbannername', this.banner);
    localStorage.setItem('shopId', this.shop.id);
   

  });
}

addQty(){
  this.model.selectedQty=parseFloat(this.model.selectedQty) + 1;
}

subQty(){
  if(this.model.selectedQty>0){
    this.model.selectedQty=parseFloat(this.model.selectedQty) - 1;
  }else{
    this.model.selectedQty=1;
  }
  
}

viewProduct(proData:any) {
  this.viewData=proData;
  console.log("viewData-->",this.viewData);
}

confirmOrder(){
 
  this.CommonService.insertdata(AppSettings.addOrder,this.model)
    .subscribe(response =>{ 
    $("#OrderFormModal").modal('hide');
    alert("Order Placed Successfully");
   
  });
}
actionOnShop(type:any,shopId:any,typeCount:any){
  this.shopactionModel.type = type;
  this.shopactionModel.shopid = shopId;
  this.shopactionModel.typeCount = typeCount;
  this.CommonService.insertdata(AppSettings.shopAction,this.shopactionModel)
    .subscribe(response =>{   
      console.log(response)
      if(response.follow)    {
        this.shopactionModel.totalfollowers = response.follow;
      }else{
        this.shopactionModel.totalviewers = response.view;
      }
    
  });
}
placeOrder(orderProduct:any,selectedQty:any){
  this.orderItems=orderProduct;
  this.model.shop_id=orderProduct.shop_id;
  this.model.mall_id =orderProduct.mall_id;
  this.model.floor_id=orderProduct.floor_id;
  this.model.product_id=orderProduct.id;
  this.model.product_code=orderProduct.product_code;
  this.model.product_name=orderProduct.product_name;
  this.model.product_price=orderProduct.product_price;
  this.model.tot_order_price=(this.model.selectedQty*orderProduct.product_price);
  


 
  if(this.model.cus_name){

  }else{
    $("#exampleModal").modal('hide');
    $("#OrderFormModal").modal('show');
  }

}
}
 