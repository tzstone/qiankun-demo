import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
  name = 'hero-list-new'

  constructor() { 
    console.warn('hero constructor')
  }

  ngOnInit(): void {
    console.warn('hero oninit')
  }
  ngOnDestroy() :void {
    console.warn('hero destroy')
  }
}
