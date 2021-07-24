import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  

  TAG: string = "AppComponent"

  userSubscription: Subscription;


  
  title = 'Capstones';
  primaryRoute = "home";
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        console.log(route)
        while (route.firstChild){
          route = route.firstChild;
        } 
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.url)
    ).pipe(map(data=> {
      //  console.log(data)
      let route =[];
      data.forEach(ele=>{
        route = route.concat(ele.path)
      })
      return route;
    })).subscribe((event) => {
      console.log(this.TAG, " ", event[0])
      console.log(event)
      console.log(event.length)
      if (event.length == 0){
        this.primaryRoute = 'home'
      } else {
        this.primaryRoute = event[0];
      } 
      
    })
  }

  ngOnDestroy() {
  }

}
