import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-sensor',
  templateUrl: './select-sensor.component.html',
  styleUrls: ['./select-sensor.component.css'],
})
export class SelectSensorComponent implements OnInit {
  sensorForm: FormGroup;

  constructor(private router: Router) {}

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    let sensorid = '';
    let deviceid = '';

    this.sensorForm = new FormGroup({
      sensorId: new FormControl(sensorid, [Validators.required]),
      deviceId: new FormControl(deviceid, Validators.required),
    });
  }

  onSubmit() {
    const value = this.sensorForm.value;
    console.log(value);
    // this.router.navigate(['map', value.deviceId, value.sensorId]);
    // this.locationservice.device_location().subscribe(data=>{
    //   console.log(data);
    // })
    this.router.navigate(['lots', value.deviceId]);
  }
}
