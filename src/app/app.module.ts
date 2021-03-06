import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { GridListComponent } from './grid-list/grid-list.component';
import { StepperComponent } from './stepper/stepper.component';
import { TabsComponent } from './tabs/tabs.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { SlideBarComponent } from './slide-bar/slide-bar.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    GridListComponent,
    StepperComponent,
    TabsComponent,
    ExpansionPanelComponent,
    TableComponent,
    FormComponent,
    SlideBarComponent,
    HeaderBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
