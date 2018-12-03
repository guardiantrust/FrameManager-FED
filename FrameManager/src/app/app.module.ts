import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule} from './material';
import { FrameCreateComponent } from './frame-create/frame-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CopeManageComponent } from './cope-manage/cope-manage.component';
import { SpeciesManageComponent } from './species-manage/species-manage.component';
import { EdgeManageComponent } from './edge-manage/edge-manage.component';
import { PanelManageComponent } from './panel-manage/panel-manage.component';
import { DrawerManageComponent } from './drawer-manage/drawer-manage.component';
import { ArchTypeManageComponent } from './arch-type-manage/arch-type-manage.component';
import { ArchSizeManageComponent } from './arch-size-manage/arch-size-manage.component';
@NgModule({
  declarations: [
    AppComponent,
    FrameCreateComponent,
    CopeManageComponent,
    SpeciesManageComponent,
    EdgeManageComponent,
    PanelManageComponent,
    DrawerManageComponent,
    ArchTypeManageComponent,
    ArchSizeManageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
