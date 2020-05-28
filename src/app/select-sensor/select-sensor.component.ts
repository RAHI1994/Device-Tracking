import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-select-sensor',
  templateUrl: './select-sensor.component.html',
  styleUrls: ['./select-sensor.component.css'],
})
export class SelectSensorComponent implements OnInit {
  sensorForm: FormGroup;

  constructor() {}

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
  }
}
