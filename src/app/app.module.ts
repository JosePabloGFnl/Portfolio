import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';

import { FormsModule } from '@angular/forms';
import { SkillDetailComponent } from './skill-detail/skill-detail.component'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    SkillDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
