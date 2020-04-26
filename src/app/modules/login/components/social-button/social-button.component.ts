import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-social-button',
  template: '',
})
export class SocialButtonComponent {
  @Output() readonly logged: EventEmitter<string> = new EventEmitter<string>()

  constructor(private social: string) { }

  handleLogin(): void {
    this.logged.emit(this.social)
  }
}
