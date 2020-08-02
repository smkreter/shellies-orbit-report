import { Component } from '@angular/core';
import { Satellite } from './satellite';
//let sourceList: Satellite[];
//let stevenTheSatellite = new Satellite(name: "steven", type: "fart type satellite", launchDate: "2020-08-01", orbitType: "low orbit", operational: true);
//console.log(stevenTheSatellite);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shellies-orbit-report';
  sourceList: Satellite[];
  constructor() {
    this.sourceList = [
       //new Satellite("steven", "fart type satellite", "2020-08-01", "low orbit", true),
       new Satellite({ name: "SiriusXM", type: "Communication", launchDate: "2009-03-21", orbitType: "LOW", operational: true }),
       new Satellite({ name: "Cat Scanner", type: "Imaging", launchDate: "2012-01-05", orbitType: "LOW", operational: true }),
       new Satellite({ name: "Weber Grill", type: "Space Debris", launchDate: "1996-03-25", orbitType: "HIGH", operational: false }),
       new Satellite({ name: "GPS 938", type: "Positioning", launchDate: "2001-11-01", orbitType: "HIGH", operational: true }),
       new Satellite({ name: "ISS", type: "Space Station", launchDate: "1998-11-20", orbitType: "LOW", operational: true }),
    ];
  }

}


