import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontlyneTest';
  isOriginalImage: boolean = true; // Flag to track which image is displayed

  // Images URLs
  originalImage: string = 'assets/ArrowLineRight.svg';
  alternateImage: string = 'assets/downArroe.svg';

  // Method to toggle the image
  toggleImage() {
    this.isOriginalImage = !this.isOriginalImage;
  }

}
