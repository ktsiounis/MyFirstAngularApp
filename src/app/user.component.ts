import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent {
  name = 'Dinos Tsiounis';

  onUserInput(event) {
    this.name = event.value;
  }
}
