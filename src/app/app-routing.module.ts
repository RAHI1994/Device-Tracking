import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectSensorComponent } from './select-sensor/select-sensor.component';


const routes: Routes = [
  {path:  'select-sensor', component: SelectSensorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
