import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  feeds: any = [{
    poster:{
      name:"Hoe Jun Leong",
      title:"Computer Engineer",
      pic:"assets/png/myFaceSquare2.jpg"
    },
    createdTimestamp: 1615743446,
    text: "Over the weekend, Yong Kang Chia, Dhanush Manogar and I took part in Hex Cambridge 2021, a Hackathon organised by The University of Cambridge. We chose to tackle the Optiver challenge, as we wanted to explore algo trading for the first time. It was certainly tough but a rewarding experience indeed!",
    multimedia:{
      media:"assets/png/myFaceSquare2.jpg"
    },
  }, {
    poster:{
      name:"Hoe Jun Leong",
      title:"Computer Engineer",
      pic:"assets/png/myFaceSquare2.jpg"
    },
    createdTimestamp: 16157434461234,
    text: "Over the weekend, Yong Kang Chia, Dhanush Manogar and I took part in Hex Cambridge 2021, a Hackathon organised by The University of Cambridge. We chose to tackle the Optiver challenge, as we wanted to explore algo trading for the first time. It was certainly tough but a rewarding experience indeed!",
  }
  ]


  constructor() { }

  ngOnInit(): void {
  }
  navigateToExplore(e){
    //direct to explore route
    console.log(e);
  }
}
