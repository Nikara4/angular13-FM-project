import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../common/services/lessons.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {


  selectedLesson = null;
  courseLessons: any;

  constructor(private lessonsService: LessonsService) {}

  ngOnInit(): void {
    this.courseLessons = this.lessonsService.courseLessons;
  }

  selectLesson(lesson: unknown) {
    this.selectedLesson = lesson;
  }

  deleteLesson(lessonTitle: unknown) {
    console.log('delete lesson', lessonTitle);
  }
}
