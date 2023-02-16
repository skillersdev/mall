import { Component, OnInit } from '@angular/core';
import { Routes,Router,RouterModule}  from '@angular/router';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AppSettings } from 'src/app/appSettings';
declare var jquery:any;
declare var $ :any; 
import { CommonService } from '../../services/common.service';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  banner:any;
  model:any={};
  constructor(private CommonService: CommonService) { }

  ngOnInit() {
    this.banner=localStorage.getItem('shopbannername');
    $(".banner-img").css("background-image", "url(" + this.banner + ")");
    this.editshop(localStorage.getItem('shopId'));
  }
  editshop(id:any)
  {
    this.CommonService.editdata(AppSettings.editshop,id)
        .subscribe(resultdata =>{   
          this.model = resultdata.result;          
        });
  }
  submitContactform(){
    this.CommonService.insertdata(AppSettings.sendContactdetails,this.model)
    .subscribe( (response) => {
       if(response.status=='success')
       {
        alert(response.message);
         window.location.reload();
       }
        else{
          alert(response.message);
          window.location.reload();
        }
     })
  }
}
