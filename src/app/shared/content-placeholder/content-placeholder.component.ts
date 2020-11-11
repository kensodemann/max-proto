import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-placeholder',
  templateUrl: './content-placeholder.component.html',
  styleUrls: ['./content-placeholder.component.scss'],
})
export class ContentPlaceholderComponent implements OnInit {
  @Input() title: string;

  constructor() {}

  ngOnInit() {}
}
