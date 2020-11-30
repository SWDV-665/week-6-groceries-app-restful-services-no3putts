import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
// import { GroceryService } from '../service/grocery.service';
// import { InputDialogService } from '../service/input-dialog.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
// import { HttpClient} from '@angular/common/http'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page],
  //  providers: [GroceryService,InputDialogService,SocialSharing, HttpClient]
  providers: [SocialSharing]
})
export class Tab1PageModule {}
