import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-receber',
  templateUrl: './receber.page.html',
  styleUrls: ['./receber.page.scss'],
  standalone: false,
})
export class ReceberPage implements OnInit {

  constructor(private router: Router) { }
  ngOnInit() {
  }

}
