import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses = [
    {
      id: 1,
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'JavaScript the HARDEST PARTS EVER!',
      description: 'Learn JavaScript like a pro! with Will',
      percentComplete: 15,
      favorite: true
    },
    {
      id: 3,
      title: 'Python Basics',
      description: 'Discover a love for Python with this course.',
      percentComplete: 30,
      favorite: true
    },
    {
      id: 4,
      title: 'Java Expert',
      description: 'Become an expert in Java with Jacob',
      percentComplete: 16,
      favorite: true
    }
  ];
  selectedCourse = null;

  constructor() { }

  ngOnInit(): void {
  }

  selectCourse(course: unknown) {
    this.selectedCourse = course;
  }

  deleteCourse(courseId: unknown) {
    console.log('delete course', courseId);
  }

  form() {
    console.log('delete');
  }

}
