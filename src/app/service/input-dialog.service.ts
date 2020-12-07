import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {MovieService } from '../service/grocery.service';

@Injectable({
  providedIn: 'root'
})
export class InputDialogService {

  constructor(public dataService: MovieService, public alertController: AlertController) { }

  async saveItem(item?, index?) {
    const alert = await this.alertController.create({
      header: item ? 'Edit Item' : 'Add Grocery Item',
      message: item ? 'Enter updated values' : 'Enter item, quantity, unit and imgUrl (if any, blank for default)',
      inputs: [
        {
          name: 'name',
          placeholder: 'Item',
          value: item ? item.name : null
        },
        {
          name: 'qty',
          placeholder: 'Quantity',
          value: item ? item.qty : null
        },
        {
          name: 'unit',
          placeholder: 'Unit',
          value: item ? item.unit : null
        },
        {
          name: 'imgUrl',
          placeholder: 'Image Url',
          value: item ? item.imgUrl : null
        },
        {
          name: '_id',
          placeholder: '_id',
          value: item ? item._id : null,
          disabled: true,
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancel item entry');
          }
        }, {
          text: item ? 'Save' : 'Add',
          handler: item => {
            if (item.name != '')
              if (item.imgUrl == '')
                item.imgUrl = 'assets/img/grocery.png'
           
            if(index == undefined){
              console.log("ADDING: " + item);
              // item.splice(index,1); // remove item from array
              // this.dataService.addItem(item);

            }
            else
            {
              console.log("EDITING THIS: " + item._id);
              // this.dataService.editItem(item);
            }
          }
        }
      ]
    });

   await alert.present(); // Present Alert
  }

}
