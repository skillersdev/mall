import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { AppSettings } from '../appSettings';

declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: []
})
export class TopnavComponent implements OnInit {
 
  constructor(private CommonService: CommonService) {

   }

  ngOnInit() {    
  }


}
