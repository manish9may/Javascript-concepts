import { Component } from '@angular/core';
import {UPLOAD_DIRECTIVES} from 'ng2-uploader';
@Component({ 
  moduleId: module.id,
  selector: 'app-container',
  directives: [UPLOAD_DIRECTIVES],
  templateUrl: 'views/demo.html'
})
export class AppComponent {

}