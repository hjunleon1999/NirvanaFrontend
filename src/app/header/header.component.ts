import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { filter } from 'rxjs/operators';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  TAG: string = "HeaderComponent"


  @Input()primaryRoute:string;
  isExploreHovered:boolean = false;
  isNotificationsHovered:boolean = false;
  isProfileHovered:boolean =false;
  dropdownRight: number = 0;


  currentActive: string = "home"

  constructor(
    private router: Router
  ) {
    // router.events.pipe(   //https://stackoverflow.com/questions/33520043/how-to-detect-a-route-change-in-angular?rq=1
    //   filter(e=> e instanceof NavigationEnd)
    // ).subscribe((val)=>{
    //   console.log(this.TAG, ": ",val)
    //   let curUrl = val["url"] 
      
    // })
   }

  ngOnInit(): void {
  }


  handleButtonGroupMouseOver(e){
    console.log(e)
    let target = e.target;
    console.log(target.offsetLeft,target.offsetWidth)
    /*if(target.dataset["role"] == "explore"){
      console.log("explore")
      this.isExploreHovered = true;
    } else if (target.dataset["role"] == "projects"){
      //this.isExploreHovered = true;
    } else if (target.dataset["role"] == "notifications"){
      this.isNotificationsHovered = true;
    } else if (target.dataset["role"] == "profile"){
      this.isProfileHovered = true;
    }*/
  }

  handleButtonGroupMouseOut(e){
    this.isExploreHovered = false;
    this.isProfileHovered = false;
    this.isNotificationsHovered = false;
  }

  goToExploreProjects(){
    this.router.navigate([`explore/projects`])
  }
  goToExplorePeople(){
    this.router.navigate([`explore/people`])
  }
  goHome(){
    this.router.navigate([``])
  }
  goToProfile(){
    this.router.navigate([`profile`])
  }

}
