import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
 
import { MaterialModule } from "./material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
 
@NgModule({
  imports: [
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
  ],

  declarations: [
  ],

  exports: [
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
  ],

  providers: []


})

export class SharedModule {}
