import 'zone.js/dist/zone';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
// import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
// import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    // AddTutorialComponent,
    // TutorialDetailsComponent,
    // TutorialsListComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
