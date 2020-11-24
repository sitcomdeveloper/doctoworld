import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addappointments',
  templateUrl: './addappointments.component.html',
  styleUrls: ['./addappointments.component.css']
})
export class AddappointmentsComponent implements OnInit {

  constructor() { }
  loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement("script");
    script.innerHTML = "";
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
  ngOnInit(): void {
    this.loadScript("assets/theme/js/jquery-3.2.1.min.js");
    this.loadScript("assets/theme/js/popper.min.js");
    this.loadScript("assets/theme/js/bootstrap.min.js");
    this.loadScript("assets/theme/js/jquery.slimscroll.js");
    this.loadScript("assets/theme/js/Chart.bundle.js");
    this.loadScript("assets/theme/js/chart.js");
    this.loadScript("assets/theme/js/app.js");
  }
}
