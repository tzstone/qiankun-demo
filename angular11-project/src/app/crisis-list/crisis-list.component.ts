import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.scss']
})
export class CrisisListComponent implements OnInit {
  name = 'crisis-list-new'
  constructor() { 
    console.warn('crisis constructor')
  }

  ngOnInit(): void {
    console.warn('crisis oninit')
  }
  ngOnDestroy() :void {
    console.warn('crisis destroy')
  }
}
