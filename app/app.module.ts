import { ToastrService } from './common/toastr.service';
import { Eventservice } from './events/shared/event.service';
import { NavBarComponent } from './nav/navbar.component';
import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {EventsAppComponent} from './events-app.component'
import {EventsListComponent} from './events/events-list.component'
import {EventsThumbnailComponent} from './events/events-thumbnail.component'

@NgModule({
imports: [BrowserModule],
declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavBarComponent],
bootstrap: [EventsAppComponent],
providers: [Eventservice, ToastrService]
})
export class AppModule{}