import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks : string[] = ['https://www.hackerrank.com/','https://en.wikipedia.org/wiki/Wiki'];
  myImage : string[] = ['assets/img/tetemetro01.gif'];
  constructor() { }

  ngOnInit() {
  }

}
