import { Component, OnInit } from '@angular/core';
import { Course } from '../common/models/course';
import { CoursesService } from '../common/services/courses.service';
import { Observable } from 'rxjs';

const emptyCourse: Course = {
  id: null,
  title: '',
  description: '',
  percentComplete: 0,
  favorite: false,
};

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses = [];
  courses$: any;
  selectedCourse = emptyCourse;
  originalTitle: string;

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    // this.courses = this.coursesService.courses;
    this.fetchCourses();
  }

  selectCourse(course: Course) {
    this.selectedCourse = course;
  }

  deleteCourse(courseId: unknown) {
    console.log('delete course', courseId);
  }

  reset() {
    this.selectCourse({ ...emptyCourse });
  }

  saveCourse(course: Course) {
    if (course.id) {
      this.updateCourse(course);
    } else {
      this.createCourse(course);
    }
  }

  createCourse(course: Course) {
    this.coursesService.create(course).subscribe(result => this.fetchCourses());
  }

  updateCourse(course: Course) {
    this.coursesService.update(course).subscribe(result => this.fetchCourses());
  }

  fetchCourses() {
    this.courses$ = this.coursesService.all();
  }
}