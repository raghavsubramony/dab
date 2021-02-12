import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { FooterComponent } from "./footer/footer.component";
import { navbarComponent } from "./navbar/navbar.component";
import { SidenavComponent } from "./sidenav/sidenav.component";


@NgModule({
  imports: [CommonModule, RouterModule, NgbModule],
  declarations: [FooterComponent, navbarComponent,SidenavComponent],
  exports: [FooterComponent, navbarComponent,SidenavComponent]
})
export class ComponentsModule {}
