import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  parsedloginDetails: any;

  constructor(private router: Router) { }

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
    this.parsedloginDetails = JSON.parse(window.sessionStorage.getItem('loginDetails'));

    this.loadScript("assets/theme/js/jquery-3.2.1.min.js");
    this.loadScript("assets/theme/js/popper.min.js");
    this.loadScript("assets/theme/js/bootstrap.min.js");
    this.loadScript("assets/theme/js/jquery.slimscroll.js");
    this.loadScript("assets/theme/js/app.js");
  }
  movetoUpdateProfile() {
this.router.navigateByUrl("adminlogin/updateprofile");
// this.loadScript("assets/theme/js/jquery-3.2.1.min.js");
//     this.loadScript("assets/theme/js/popper.min.js");
//     this.loadScript("assets/theme/js/bootstrap.min.js");
//     this.loadScript("assets/theme/js/jquery.slimscroll.js");
//     this.loadScript("assets/theme/js/select2.min.js");
//     this.loadScript("assets/theme/js/moment.min.js");
//     this.loadScript("assets/theme/js/bootstrap-datetimepicker.min.js");
//     this.loadScript("assets/theme/js/app.js");
  }
}
