import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'BMO';

  backgroundNormal = true;

  backgroundNorma2 = true;

  constructor() { }

  ngOnInit() {
  }

  runEvent(e) {
    const doa = e.target;

    if (doa.id === 'all') {
      this.backgroundNormal = false;
      this.backgroundNorma2 = true;
    } else {
      this.backgroundNormal = true;
      this.backgroundNorma2 = false;
    }

  }
}
