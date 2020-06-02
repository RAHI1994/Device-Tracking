import { Component, OnInit } from '@angular/core';
import { MapService } from '../shared/map.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showlots',
  templateUrl: './showlots.component.html',
  styleUrls: ['./showlots.component.css']
})
export class ShowlotsComponent implements OnInit {
deviceid:string
baylist: any
lists:any  = []
  constructor(private locationservice: MapService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.deviceid = this.route.snapshot.params['device_id']
    console.log(this.deviceid)
    this.locationservice.lots_detail(this.deviceid).subscribe(data=>{
      this.baylist = data;
      this.baylist.forEach(element => {
        this.lists.push({left: `${element.x}px`, top: `${element.y}px`, width: `${element.width}px`, height: `${element.height}px`})
        
      });
      console.log(data);
      console.log(this.lists);
     
    })
  }

}
