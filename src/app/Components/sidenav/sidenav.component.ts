import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    icon: "fa-tachometer",
  },
  {
    path: "/details",
    title: "Detailed View",
    icon: "fa-tasks",
  },
  {
    path: "/config",
    title: "Configuration",
    icon: "fa-cogs",
  },
  {
    path: "/products",
    title: "Products",
    icon: "fa-folder",
  }

];

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  menuItems: any[] = [];
  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }

}
