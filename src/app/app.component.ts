import { Component, VERSION } from '@angular/core';
import { getLinkPreview, getPreviewFromContent } from 'link-preview-js';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    getLinkPreview('http://www.youtube.com/watch?v=MejbOFk7H6c', {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }).then(data => console.debug(data));
  }
}
