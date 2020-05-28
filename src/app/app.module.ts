import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { SelectSensorComponent } from './select-sensor/select-sensor.component';
import { MapDeviceLocationComponent } from './map-device-location/map-device-location.component';

@NgModule({
   declarations: [
      AppComponent,
      SelectSensorComponent,
      MapDeviceLocationComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      HttpClientModule,
      ReactiveFormsModule,
      FormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatCardModule,
      MatButtonModule,
      MatDialogModule,
      MatSelectModule,
      AgmCoreModule.forRoot({
         apiKey: 'AIzaSyB0b_WmJAFUsrfuG5DUVOjQctT5r-5e4cw'
       })
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
