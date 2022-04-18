import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SimpleValueState } from '../state/simple-value.state';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent {
  @Select(SimpleValueState.value) value$!: Observable<number>;
}
