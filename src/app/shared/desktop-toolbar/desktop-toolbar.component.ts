import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-desktop-toolbar',
  templateUrl: './desktop-toolbar.component.html',
  styleUrls: ['./desktop-toolbar.component.scss'],
})
export class DesktopToolbarComponent implements OnInit {
  @Input() username: string;

  constructor() {}

  ngOnInit() {}
}
