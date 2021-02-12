import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Runid } from 'src/app/runid';

@Component({
  selector: 'app-detailedview',
  templateUrl: './detailedview.component.html',
  styleUrls: ['./detailedview.component.scss']
})
export class DetailedviewComponent implements OnInit {

  
    constructor(private apiService: ApiService) { }   

    runid: Runid[] = [];
selectedrunid : Runid = {testcase_name: null, project_id: null,  testcase_execution_status: null}
  ngOnInit() {
    this.apiService.readPolicies().subscribe((runids: Runid[])=>{
      this.runid = runids;
      console.log(this.runid);
    })
  }

}
