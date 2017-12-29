import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewtopicPage } from './newtopic';

@NgModule({
  declarations: [
    NewtopicPage,
  ],
  imports: [
    IonicPageModule.forChild(NewtopicPage),
  ],
})
export class NewtopicPageModule {}
