import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";

// import { RtlComponent } from "../../pages/rtl/rtl.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DashboardComponent } from "src/app/Pages/dashboard/dashboard.component";
import { DetailedviewComponent } from "src/app/Pages/detailedview/detailedview.component";
import { AppconfigComponent } from "src/app/Pages/appconfig/appconfig.component";
import { ProductsComponent } from "src/app/Pages/products/products.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  declarations: [
    DashboardComponent,
    DetailedviewComponent,
    AppconfigComponent,
    ProductsComponent
    // RtlComponent
  ]
})
export class AdminLayoutModule {}
