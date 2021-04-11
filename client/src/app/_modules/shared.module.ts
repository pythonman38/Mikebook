import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FileUploadModule } from 'ng2-file-upload';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ToastrModule } from 'ngx-toastr';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
    TabsModule.forRoot(),
    NgxGalleryModule,
    FileUploadModule
  ],
  exports: [
    BsDropdownModule,
    ToastrModule,
    TabsModule,
    NgxGalleryModule,
    FileUploadModule
  ]
})
export class SharedModule { }
