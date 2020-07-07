import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-track-input',
  templateUrl: './track-input.component.html',
  styleUrls: ['./track-input.component.css']
})
export class TrackInputComponent implements OnInit {

  @ViewChild('input') input: ElementRef;
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSearch(value: string) {
    this.search.emit(value);
    this.clearInput();
  }

  clearInput() {
    this.input.nativeElement.value = '';
  }

}
