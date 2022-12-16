import { Component } from '@angular/core';
import { Http, Response,  RequestOptions, URLSearchParams, Headers } from '@angular/http';
import { AppSettings } from './appSettings';
import { CommonService } from './services/common.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mall';
  model:any;

  
  
  constructor(private CommonService: CommonService,private http:Http) { }

ngOnInit() {
  this.model={};
  this.CommonService.insertdata(AppSettings.getmallproductDetail,this.model)
  .subscribe(package_det =>{       
    //console.log(package_det);
  });
}
}
