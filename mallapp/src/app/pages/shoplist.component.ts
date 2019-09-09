import { Component } from '@angular/core';
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

  
  
  constructor(private CommonService: CommonService,private http:Http) { }

ngOnInit() {
  this.model={};
  this.CommonService.insertdata(AppSettings.getmallproductDetail,this.model)
  .subscribe(package_det =>{       
    console.log(package_det);
  });
}
}
 