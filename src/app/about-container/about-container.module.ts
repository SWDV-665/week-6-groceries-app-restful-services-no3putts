import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutContainerComponent } from './about-container.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [AboutContainerComponent],
  exports: [AboutContainerComponent]
})
export class AboutContainerComponentModule {}
