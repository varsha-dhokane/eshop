import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 actionType:any = 'signIn'
  constructor() { }

  ngOnInit(): void {
  }

  emitActionSign(event:any){
    this.actionType = event
  }
}
