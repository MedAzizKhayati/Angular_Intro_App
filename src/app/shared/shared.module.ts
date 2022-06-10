import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import {RouterModule} from '@angular/router';


const materialModules = [
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatNativeDateModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatRippleModule,
  MatTooltipModule
];

@NgModule({
  declarations: [
    SidenavComponent,
    TopbarComponent
  ],
  imports: [
    CommonModule,
    ...materialModules,
    FormsModule, 
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports: [
    SidenavComponent,
    TopbarComponent,
    ...materialModules,
    FormsModule, 
    ReactiveFormsModule,
    FlexLayoutModule
  ],
})
export class SharedModule { }
