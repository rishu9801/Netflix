import { Component, Input, OnInit } from '@angular/core';
interface Region {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
 

  constructor() {}

  ngOnInit(): void {}
}
