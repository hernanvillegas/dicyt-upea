import { Component, OnInit, ViewChildren, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
  @ViewChild('openModal')
  btnopenModal: ElementRef;


  ngOnInit(): void {
  }

  openModal(){
    this.btnopenModal.nativeElement.click();
  }

}
