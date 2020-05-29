import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapService } from '../shared/map.service';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-map-device-location',
  templateUrl: './map-device-location.component.html',
  styleUrls: ['./map-device-location.component.css']
})
export class MapDeviceLocationComponent implements OnInit, OnDestroy {
  deviceId:string;
  sensorId:string;
  long:number;
  lat:number;
  zoom = 18;
  subscription: Subscription;
  error: boolean = false;

  constructor(private locationservice: MapService,private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    this.deviceId = this.route.snapshot.params['device_id'];
    this.sensorId = this.route.snapshot.params['sensor_id'];
    this.subscription = timer(0, 10000).pipe(
      switchMap(() => this.locationservice.device_location(this.deviceId))
    ).subscribe(data => {
      if (data['status'] == 'success') {
        this.long = data['data'].longitude;
        this.lat = data['data'].latitude;
      } else {
        this.error = true;
      }
      
      console.log(data);
    });
    // console.log(this.deviceId);
    // console.log(this.sensorId);
  }

  openDialog() {
    this.dialog.open(PopupComponent, {
      width: '300px',
      data: {
        sensorid: this.sensorId
      }
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
