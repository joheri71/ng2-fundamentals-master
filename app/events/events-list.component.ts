import { ToastrService } from './../common/toastr.service';
import { Eventservice } from './shared/event.service';
import {Component, OnInit} from '@angular/core'

@Component({
    selector: 'events-list',
    template: `
            <div>
                <h1>Upcoming Angular 2 Events</h1>
                <hr/>
                <div class="row">
                <div  *ngFor="let event of events" class="col-md-5">
                <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>

            </div>   
            </div>
            </div>
            `
})
export class EventsListComponent implements OnInit {
    events:any[]

 constructor(private eventService: Eventservice, private toastr:
  ToastrService){
     
 }

 ngOnInit(){
    this.events = this.eventService.getEvents()
 }

handleThumbnailClick(eventName){
    this.toastr.success(eventName)
}

}