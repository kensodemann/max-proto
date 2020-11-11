import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/folder/home',
      icon: 'home-outline',
    },
    {
      title: 'New Claim',
      url: '/folder/claim',
      icon: 'create-outline',
    },
    {
      title: 'My Claims',
      url: '/folder/my-claims',
      icon: 'document-text-outline',
    },
    {
      title: 'My Coverage',
      url: '/folder/my-coverage',
      icon: 'person-outline',
    },
    {
      title: 'Cantact Us',
      url: '/folder/contact',
      icon: 'chatbox-outline',
    },
    {
      title: 'Messages',
      url: '/folder/messages',
      icon: 'mail-outline',
    },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor() {
    this.initializeApp();
  }

  initializeApp() {}

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(
        page => page.title.toLowerCase() === path.toLowerCase(),
      );
    }
  }
}
