import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
/*
a- In the FavPhotosComponent class, assign a better section heading to the photosTitle variable:DONE
b- The image variables should hold URLs for images, but only one is is filled in. Complete at least one more, which can be from the web or personal pictures. To copy the URL for an image on the web, right-click (or control-click) on the image and select the "Copy Image Location" menu option:DONE
c- In the .html file for this component, use placeholders in the img tags to display your chosen images:DONE.
d- Adjust the HTML to display one image per line:DONE
e- Use the .css file for this component to make all the images be the same size:DONE
f- Refresh the webpage to check the updated content:DONE*/
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Some world landscapes';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  //image2 = 'assets/img/tetemetro.png';
  image2 = 'assets/img/Bliss_New_Zealand.jpg';
  image3 = 'assets/img/antartica_2005.jpg';

  constructor() { }

  ngOnInit() {
  }

}