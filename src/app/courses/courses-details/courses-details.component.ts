import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from 'src/app/common/models/course';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.scss'],
})
export class CoursesDetailsComponent {
  currentCourse: Course;
  originalTitle= '';

  @Input() set course(value) {
    if(!value) return;
    this.currentCourse = {...value};
    this.originalTitle = this.currentCourse.title;
  }

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
}