import { Routes } from "@angular/router";
import { AppconfigComponent } from "src/app/Pages/appconfig/appconfig.component";
import { DashboardComponent } from "src/app/Pages/dashboard/dashboard.component";
import { DetailedviewComponent } from "src/app/Pages/detailedview/detailedview.component";
import { ProductsComponent } from "src/app/Pages/products/products.component";


// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "details", component: DetailedviewComponent },
  { path: "config", component: AppconfigComponent },
  { path: "products", component: ProductsComponent }
  // { path: "rtl", component: RtlComponent }
];
