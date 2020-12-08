import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NzTableModule } from "ng-zorro-antd/table";

import { FilterPipe } from "./pipes/filter.pipe";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent, FilterPipe],
  imports: [BrowserModule, NzTableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
