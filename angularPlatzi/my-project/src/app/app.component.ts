import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'farzin';
  age = 30;
  img = 'https://jungladigital.com/wp-content/uploads/2019/03/w3schools.png';
  btnDisavled = true;

  person = {
    name: 'friii',
    age: 31,
    avatar:
      'http://2.bp.blogspot.com/_I2N-ZY7aoTQ/TIqoyEFh_9I/AAAAAAAAHyw/Df6KPPfJNcM/s320/logo_w3school.png',
  };

  toggleButton() {
    this.btnDisavled = !this.btnDisavled;
  }

  increaseAge() {
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
}
