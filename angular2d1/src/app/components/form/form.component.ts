import { Component, Input } from '@angular/core';
import { iPost } from '../../interfaces/post';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  @Input() posts: iPost[] = [];
}
