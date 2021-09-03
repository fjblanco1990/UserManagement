import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-error',
  templateUrl: './shared-error.component.html',
  styleUrls: ['./shared-error.component.scss']
})
export class SharedErrorComponent implements OnInit {
  @Input() error: string;
  @Input() isError: boolean
  constructor() { }

  ngOnInit(): void {
  }

}
