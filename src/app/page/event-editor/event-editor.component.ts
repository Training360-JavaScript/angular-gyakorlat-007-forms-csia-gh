import { Observable, switchMap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from 'src/app/model/event';
import { EventService } from 'src/app/service/event.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss'],
})
export class EventEditorComponent implements OnInit {
  event$: Observable<Event> = this.ar.params.pipe(
    switchMap((params) => this.eventService.get(params['id']))
  );

  constructor(private eventService: EventService, private ar: ActivatedRoute) {}

  ngOnInit(): void {}

  onUpdate(form: NgForm) {
    this.eventService.update(form.value);
  }
}
