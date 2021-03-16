import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cifris-cloud',
  templateUrl: './cifris-cloud.component.html',
  styleUrls: ['./cifris-cloud.component.css']
})
export class CifrisCloudComponent implements OnInit {

  fragment: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }

  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView({behavior: 'smooth'});
    } catch (e) { }
  }

}
