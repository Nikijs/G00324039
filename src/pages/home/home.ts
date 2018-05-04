import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PeoplePage } from './../People/People';
import { ApiServiceProvider } from '../../providers/api-service/api-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //json data saved in array
  swPeopleData:any[]=[];
  swPlanetData:any[]=[];
  swShipData:any[]=[];
  public buttonClicked: boolean = false;
  public buttonClicked2: boolean = false;
  public buttonClicked3: boolean = false;
  constructor(public navCtrl: NavController, private mp:ApiServiceProvider) {
//methods called when a specific button is pressed, boolean to hide and show lists
  }
  openPeople() {
    this.loadPeopleData();
    this.buttonClicked = !this.buttonClicked;
  }

  openPlanets() {
   this.loadPlanetData();
   this.buttonClicked2 = !this.buttonClicked2;
  }
  openShips() {
    this.loadShipData();
    this.buttonClicked3 = !this.buttonClicked3;
   }
/*its called people page because i didnt know how to fully rename a page i already created
It should be called infopage, pushes the info page of list of movies on to the screen,
i also have a planets page which is not used, didnt want to risk deleting it and cause errors*/
   openMore() { 
    this.navCtrl.push(PeoplePage); 
  }

   //functions to save data from the api in to array
  loadPeopleData(){
    this.mp.GetStarwarsData().subscribe(data =>
      {
         this.swPeopleData = data.results;
      })
  }
  loadPlanetData(){
    this.mp.GetStarwarsPlanetData().subscribe(data =>
      {
         this.swPlanetData = data.results;
      })
  }
  loadShipData(){
    this.mp.GetStarwarsShipData().subscribe(data =>
      {
         this.swShipData = data.results;
      })
  }
}
