import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectSensorComponent } from './select-sensor/select-sensor.component';
import { MapDeviceLocationComponent } from './map-device-location/map-device-location.component';


const routes: Routes = [
  {path:  'select-sensor', component: SelectSensorComponent},
  {path:  'map/:device_id/:sensor_id', component: MapDeviceLocationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
