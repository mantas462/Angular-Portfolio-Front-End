import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  panels = [
    {
      active: true,
      source: 'CodeAcademy Certificate - ',
      name: 'Introduction to Web Development',
      link: 'https://www.codeacademy.lt/programavimo-kursai/java-studijos/',
      imageURL: 'assets/images/codeacademylogo.png',
      courses: [
        {
          name:
            'Advanced Java features (OOP, Design patterns... - Declerative programming)',
        },
        {
          name: 'Spring structure (Security, Boot, REST)',
        },
        {
          name: 'Hibernate ',
        },
        {
          name: 'MySQL',
        },
        {
          name: '3 months long',
        },
      ],
    },
    {
      active: false,
      source: 'Lead2Pro Certificate - ',
      name: 'Introduction to Programming',
      link: 'https://www.facebook.com/lead2pro/',
      imageURL: 'assets/images/lead2pro.jpg',
      courses: [
        {
          name: 'Introduction to Java',
        },
        {
          name: 'HTML',
        },
        {
          name: 'CSS ',
        },
        {
          name: 'Javascript',
        },
        {
          name: '3 months long',
        },
      ],
    },
    {
      active: false,
      source: 'Udemy Certificate  - ',
      name: 'Spring and Hibernate for beginners',
      link: 'https://www.udemy.com/course/spring-hibernate-tutorial/',
      imageURL: 'assets/images/spring.png',
      courses: [
        {
          name: 'Spring core (Security, Rest, Boot)',
        },
        {
          name: 'AOP',
        },
        {
          name: 'Spring MVC ',
        },
        {
          name: 'Jpa',
        },
        {
          name: 'Hibernate',
        },
        {
          name: '41 hours long',
        },
      ],
    },

    {
      active: false,
      source: 'Udemy Certificate  - ',
      name: 'Hibernate: Advanced Development Techniques',
      link: 'https://www.udemy.com/course/hibernate-tutorial-advanced/',
      imageURL: 'assets/images/hibernate.jpeg',
      courses: [
        {
          name: 'Mapping collections - sets, lists, maps, sorted maps, sorted',
        },
        {
          name: 'Mapping components - embeddable',
        },
        {
          name: 'Mapping enums',
        },
        {
          name: 'Inheritance mapping - Single Table',
        },
        {
          name: 'Inheritance mapping - Table per class',
        },
        {
          name: 'Inheritance mapping - Joined table',
        },
        {
          name: 'Inheritance mapping - Mapped superclass',
        },
        {
          name: '3.5 hours long',
        },
      ],
    },

    {
      active: false,
      source: 'Udemy Certificate  - ',
      name: 'Full Stack  with Spring Boot and Angular (1)',
      link:
        'https://www.udemy.com/course/full-stack-angular-spring-boot-tutorial/',
      imageURL: 'assets/images/aands.png',
      courses: [
        {
          name: 'Introduction to Typescript',
        },
        {
          name: 'Introduction to Angular',
        },
        {
          name: 'Connecting Spring Rest To Angular',
        },
        {
          name: 'Learning by doing the eComeerce project',
        },
        {
          name: '12 hours long',
        },
      ],
    },

    {
      active: false,
      source: 'Udemy Certificate  - ',
      name: 'Full Stack  with Spring Boot and Angular (2)',
      link:
        'https://www.udemy.com/course/full-stack-application-development-with-spring-boot-and-angular/',
      imageURL: 'assets/images/aands.png',
      courses: [
        {
          name: 'Introduction to Angular',
        },
        {
          name: 'Introduction to Web Services and Rest',
        },
        {
          name: 'Connecting Spring Rest To Angular',
        },
        {
          name: 'Basic Authentication',
        },
        {
          name: 'JWT and Spring Security',
        },
        {
          name: '11 hours long',
        },
      ],
    },

    {
      active: false,
      source: 'Udemy Certificate  - ',
      name: 'Master Java Unit Testing',
      link: 'https://www.udemy.com/course/learn-unit-testing-with-spring-boot/',
      imageURL: 'assets/images/junit.png',
      courses: [
        {
          name: 'Mockito',
        },
        {
          name: 'Unit tests',
        },
        {
          name: 'Integration tests',
        },
        {
          name: 'Performance tests',
        },
        {
          name: 'JsonAssert',
        },
        {
          name: 'Hamcrest',
        },
        {
          name: 'JsonPath',
        },
        {
          name: '4 hours long',
        },
      ],
    },

    {
      active: false,
      source: 'Udemy Certificate  - ',
      name: 'Docker for Java developers',
      link: 'https://www.udemy.com/course/docker-hands-on/',
      imageURL: 'assets/images/docker.png',
      courses: [
        {
          name: 'Docker structure',
        },
        {
          name: 'Managing Containers',
        },
        {
          name: 'Dockerfiles',
        },
        {
          name: 'DockerHub',
        },
        {
          name: 'Networking',
        },
        {
          name: 'Volumes',
        },
        {
          name: 'Swarm',
        },
        {
          name: 'Microservices on EC2',
        },
        {
          name: '8.5 hours video',
        },
      ],
    },

    {
      active: false,
      source: 'Udemy Certificate  - ',
      name: 'Angular - The Complete Guide',
      link: 'https://www.udemy.com/course/the-complete-guide-to-angular-2/',
      imageURL: 'assets/images/angular.png',
      courses: [
        {
          name: 'Angular structure',
        },
        {
          name: 'Debuggings',
        },
        {
          name: 'Databinding',
        },
        {
          name: 'Directives',
        },
        {
          name: 'Services',
        },
        {
          name: 'Routing',
        },
        {
          name: 'Observables',
        },
        {
          name: 'Modules',
        },
        {
          name: '34 hours long',
        },
      ],
    },

    {
      active: false,
      source: 'Udemy Certificate - ',
      name: 'Angular Styling & Animations',
      link:
        'https://www.udemy.com/course/angular-styling-animations-for-angular-2-and-angular-4/',
      imageURL: 'assets/images/angular.png',
      courses: [
        {
          name: 'CSS Styling',
        },
        {
          name: 'Diving in to Angular Animations package',
        },
        {
          name: 'Exploring new Angular features',
        },
        {
          name: '8 hours long',
        },
      ],
    },

    {
      active: false,
      source: 'Udemy Certificate - ',
      name: 'Bootstrap',
      link:
        'https://www.udemy.com/course/bootstrap-4-from-scratch-with-5-projects/',
      imageURL: 'assets/images/bootstrap.png',
      courses: [
        {
          name: 'Learning HTML',
        },
        {
          name: 'Learning CSS',
        },
        {
          name: 'Basics of JQuery',
        },
        {
          name: 'Learning Bootstrap 4',
        },

        {
          name: 'Building 5 websites from scratch',
        },

        {
          name: '11,5 hours long',
        },
      ],
    },
  ];
}
