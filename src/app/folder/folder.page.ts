import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  private titles: Map<string, string>;
  public title: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.titles = new Map();
    this.titles.set('home', 'My Account');
    this.titles.set('claim', 'New Claim');
    this.titles.set('my-claims', 'My Claims');
    this.titles.set('my-coverage', 'My Coverage');
    this.titles.set('contact', 'Contact Us');
    this.titles.set('messages', 'Messages');
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.title = this.titles.get(id);
  }
}
