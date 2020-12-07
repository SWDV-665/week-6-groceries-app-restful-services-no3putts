import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { MovieService } from '../service/movie.service';
import { InputDialogService } from '../service/input-dialog.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

export interface Movie {
  title: string;
  year: string;
  poster: string;
  imdbID: string;
}
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page{

  title = "Movie Finder";
  items: Movie[];
  errorMessage: String;
  

  constructor(public toastController: ToastController, 
    public alertController: AlertController, 
    public dataService: MovieService, 
    public inputDialog: InputDialogService,
    public socialSharing: SocialSharing) { 
      //  dataService.dataChanged$.subscribe((dataChanged: boolean) => {
      //  this.loadItems();
      //  });
    }
  

    async loadItems(evt) {
      // this.foodList = this.foodListBackup;
      const searchTerm = evt.srcElement.value;
    
      if (!searchTerm) {
        return;
      }

      this.dataService.getMovie(searchTerm).subscribe((data: Movie[])=>{
        console.log("**************DATA******************");
        console.log(data);
        this.items = data;
      });
      // this.items = this.foodListBackup;
      console.log("********************************");
      console.log(this.items[0].title);
      console.log("********************************");
      return this.items;
    }   



  // //fetch data 
  // ionViewWillEnter() {
  //   this.loadItems();
  // }

  // loadItems() {
  //   this.dataService.getItems()
  //   .subscribe(
  //     resp => this.items = resp,
  //     error => this.errorMessage = <any>error);
  //   return this.items;
  // }
  
  async itemDetail(item, index) {
    const toast = await this.toastController.create({
      message: 'Editing Item: ' + item.name,
      duration: 5000,
      position: 'bottom',
      animated: true,
      color: 'warning',
    });
    toast.present();  // displays toast 
    console.log("Editing, send to service: " + item._id);
    this.inputDialog.saveItem(item, index);
  }

  // async removeItem(item) {
  //   const toast = await this.toastController.create({
  //     header: 'Removing...',
  //     message: 'Item removed: ' + item.name,
  //     duration: 2000,
  //     position: 'bottom',
  //     animated: true,
  //     color: 'success',
  //   });
  //   toast.present();  // displays toast 
  //   this.dataService.removeItem(item)
  // }

  async shareItem(item, index) {
    const toast = await this.toastController.create({
      header: 'Sharing...',
      message: 'Item shared: ' + item.name,
      duration: 3000,
      position: 'bottom',
      animated: true,
      color: 'success',
    });
    toast.present();  // displays toast 
    
    let message = "Can you get " + item.qty + " " + item.unit + " of " + item.name + " when you stop at the store?"
    let subject = "Needed grocery item"

    this.socialSharing.canShareViaEmail().then(()=>{
      this.socialSharing.share(message, subject, "www/"+item.imgUrl).then(() => {
        console.log("Shared via email");
      }).catch((error) => {
        console.log("Share via email failed: ",error);
      });
    }).catch((error)=>{
      console.log("Cannot share via email: ", error);
    });
  }

  // addItem(){
  //   this.inputDialog.saveItem();
  // }

}

