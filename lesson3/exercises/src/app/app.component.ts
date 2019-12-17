import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  upEnabled = false;
  downEnabled = false;
  rightEnabled = false;
  leftEnabled = false;

  takeOffEnabled = false;
  backgroundColor = 'green';
  //shuttle's virtual coordinates
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  flightStatus = 'Current Flight Status';

  /**
  1. When the "Take off" button is clicked, the following should happen:
  a- A confirmation window should let the user know "Confirm that the shuttle is ready for takeoff." If the shuttle is ready for liftoff, then add steps b-d.
  b- The flight status should change to "Shuttle in flight."
  c- The background color of the shuttle flight screen should change from green to blue.
  d- The shuttle height should increase by 10,000 km.*/
  handleTakeOff(rocketImage) {
  let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
      this.takeOffEnabled = true;
      this.backgroundColor = 'blue';
      this.height = 10000;
      this.width = 0;
      this.message = 'Shuttle in flight.';
      rocketImage.style.bottom = parseInt(rocketImage.style.bottom) + 10 + 'px';      
    }
  }

  /**
  2. When the "Land" button is clicked, the following should happen:
  a- A window alert should let the user know "The shuttle is landing. Landing gear engaged."
  b- The flight status should change to "The shuttle has landed."
  c- The background color of the shuttle flight screen should change from blue to green.
  d- The shuttle height should go down to 0.*/
  handleLanding(rocketImage){
    window.alert('The shuttle is landing. Landing gear engaged.');
    this.flightStatus = 'The shuttle has landed.';
    this.backgroundColor = 'green';
    this.height = 0;
    rocketImage.style.bottom = '0px';
    this.takeOffEnabled = false;
  }

  /**
  3. When the "Abort Mission" button is clicked, the following should happen:
  a- A confirmation window should prompt the user if they really want to abort the mission. If the user wants to abort the mission, then add steps b-d.
  b- The flight status should change to "Mission aborted."
  c- The background color of the shuttle flight screen should change from blue to red.
  d- The shuttle height should go down to 0.*/
  handleAborting(rocketImage){
    let abort = window.confirm('Do you really want to abort Mission');
    if (abort) {
      this.flightStatus = 'Mission aborted.';
      this.backgroundColor = 'red';
      this.height = 0;
      rocketImage.style.bottom = '0px';
      this.takeOffEnabled = false;
    }
  }

  /**
  4. When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:
  a- The rocket image should move 10 px in the direction of the button that was clicked.
  b- If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 km.*/
  moveRocket(rocketImage, direction:string) {
    let leftRightmovement = parseInt(rocketImage.style.left);
    let upDownmovement = parseInt(rocketImage.style.bottom);

    const closenessLeft : number = -20000;
    const closenessBottom : number = -10000;
    const arbitraryConstantRigth : number = 60;

    switch(direction) {
      case 'right':
        if (rocketImage.offsetLeft + arbitraryConstantRigth <= rocketImage.parentElement.offsetWidth) {
          if (this.width >= closenessLeft) {
            this.leftEnabled = false;
          }
          rocketImage.style.left = leftRightmovement + 10 + 'px';
          this.width = this.width + 10000;
        } else {
          this.rightEnabled = true; 
        }
        break;
      case 'left':
        if (this.width >= closenessLeft) {
          if (rocketImage.offsetLeft + arbitraryConstantRigth <= rocketImage.parentElement.offsetWidth) {
            this.rightEnabled = false;
          }  
          rocketImage.style.left = leftRightmovement - 10 + 'px';
          this.width -= 10000;
        } else {
          this.leftEnabled = true;
        }
        break;
      case 'up':
        if (rocketImage.offsetTop >= -10) {
          if (this.height >= closenessBottom) {
            this.downEnabled = false;
          }
          rocketImage.style.bottom = upDownmovement + 10 + 'px';
          this.height += 10000;
        } else {
          this.upEnabled = true;
        }
        break;
      case 'down':
        if (this.height >= closenessBottom) {
          if (rocketImage.offsetTop >= -10) {
            this.upEnabled = false;
          }          
          rocketImage.style.bottom = upDownmovement - 10 + 'px';
          this.height -= 10000;
        } else {
          this.downEnabled = true;
        }
        break;
      default:
        // nothing to do
    }    
    this.checkWidthHeight(rocketImage)
  }

  /**
   * check the width and height values
   * changes the color value to orange if those values are too high or low. Call that function in each of the direction button click handlers*/
  checkWidthHeight(rocketImage){
    let tooCLoseToEdge:Boolean = false;
    const closenessLeft : number = -20000;
    const closenessBottom : number = -10000;
    const arbitraryConstantRigth : number = 60;
    const closenessColor : string = 'orange';
    const takeOffcolor : string = 'blue';
        
    if ((rocketImage.offsetTop <= 0)||(rocketImage.offsetLeft + arbitraryConstantRigth >= rocketImage.parentElement.offsetWidth) || (this.height <= closenessBottom) || (this.width <= closenessLeft)) {
      tooCLoseToEdge = true;
    }      
    
    if (tooCLoseToEdge) {
      this.backgroundColor = closenessColor;
    } else {
        this.backgroundColor = takeOffcolor;
    }
  }
  
}
