import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lampada',
  templateUrl: './lampada.component.html',
  styleUrls: ['./lampada.component.css']
})
export class LampadaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0,0)
  }

}
