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
    console.debug('sds');

    getLinkPreview('https://www.youtube.com/watch?v=MejbOFk7H6c')
      .then(data => console.debug(data))
      .catch(data => console.debug(data));
  }
}
