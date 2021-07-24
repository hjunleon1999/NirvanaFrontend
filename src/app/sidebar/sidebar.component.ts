import { Component, OnInit, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  @Input()primaryRoute:string;
  ngOnInit(): void {
  }

}
