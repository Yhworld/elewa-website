import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversationalLearningPageComponent } from './main/conversational-learning-page/conversational-learning-page.component';
import { ConversationRoutingModule } from './conversation.routing';

@NgModule({
  imports: [CommonModule, ConversationRoutingModule],
  declarations: [ConversationalLearningPageComponent],
  exports: [ConversationalLearningPageComponent],
})
export class FeaturesPagesConversationalLearningModule {}
