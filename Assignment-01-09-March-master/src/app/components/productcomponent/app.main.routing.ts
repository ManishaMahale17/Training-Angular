import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-routing',
  template: `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand">Assignment 04/07</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" [routerLink]="['']" >List Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#" [routerLink]="['add']" >Add Products</a>
        </li>
      </ul>
    </div>

  </div>
</nav>
<router-outlet></router-outlet>
  `
})

export class MainRoutingComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
