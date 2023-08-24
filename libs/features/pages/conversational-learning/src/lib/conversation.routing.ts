import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { ConversationalLearningPageComponent } from './main/conversational-learning-page/conversational-learning-page.component';

export const ELEWA_CONVERSATION_ROUTES: Route[] = [

  { path: '', component: ConversationalLearningPageComponent },

];

@NgModule({
  imports: [RouterModule.forChild(ELEWA_CONVERSATION_ROUTES)],
  exports: [RouterModule]
})
export class ConversationRoutingModule { }
