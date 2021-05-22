import { Component, NgZone, OnInit, ApplicationRef } from '@angular/core';
import { NavigationStart, Router } from '@angular/router'

@Component({
  selector: '#angular11 app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular11';
  prefix = (window as any).__POWERED_BY_QIANKUN__ ? '/app-angular11' : ''
  constructor(router: Router, applicationRef: ApplicationRef,
    zone: NgZone) {
  //   router.events.subscribe((val: NavigationStart) => {
  //     if (val.navigationTrigger === 'popstate') {
  //       debugger
  //       // // here changed
  //       // router.navigate([val.url], {replaceUrl:true});
  //       zone.run(() => applicationRef.tick())
  //     }
  // });
  }

  ngOnInit(): void {
  }

  toCrisis() {
    window.history.pushState({key: Date.now().toFixed(3)}, '', this.prefix + '/crisis')
    // location.hash = 'crisis'
  }

  toHeroes() {
    window.history.pushState({key: Date.now().toFixed(3)}, '', this.prefix + '/heroes')
    // location.hash = 'heroes'
  }
}
