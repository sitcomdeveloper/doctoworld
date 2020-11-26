import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editdepartment',
  templateUrl: './editdepartment.component.html',
  styleUrls: ['./editdepartment.component.css']
})
export class EditdepartmentComponent implements OnInit {

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
    this.loadScript("assets/theme/js/jquery-3.2.1.min.js");
    this.loadScript("assets/theme/js/popper.min.js");
    this.loadScript("assets/theme/js/bootstrap.min.js");
    this.loadScript("assets/theme/js/jquery.slimscroll.js");
    this.loadScript("assets/theme/js/select2.min.js");
    this.loadScript("assets/theme/js/app.js");
  }
  alldepartments() {
    this.router.navigateByUrl("adminlogin/departments");
  }
}
