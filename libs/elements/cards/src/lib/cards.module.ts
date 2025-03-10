import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsModule } from '@elewa-website/elements/layout/buttons';

import { ElewaInfoCardComponent } from './components/elewa-info-card/elewa-info-card.component';
import { ElewaProjectItemCardComponent } from './components/elewa-project-item-card/elewa-project-item-card.component';
import { ElewaNewsItemCardComponent } from './components/elewa-news-item-card/elewa-news-item-card.component';
import { ElewaWebsitePriceItemCardComponent } from './components/elewa-price-item-card/elewa-website-price-item-card.component';
import { ElewaTeamMemberCardComponent } from './components/elewa-team-member-card/team-member-card.component';
import { ElewaPriceListComponent } from './components/elewa-price-list/elewa-price-list.component';
import { ElewaSdgListComponent } from './components/elewa-sdg-list/elewa-sdg-list.component';
import { ElewaSdgCardComponent } from './components/elewa-sdg-card/elewa-sdg-card.component';

@NgModule({
  imports: [CommonModule, ButtonsModule],
  declarations: [
    ElewaInfoCardComponent,
    ElewaWebsitePriceItemCardComponent,
    ElewaNewsItemCardComponent,
    ElewaProjectItemCardComponent,
    ElewaTeamMemberCardComponent,
    ElewaPriceListComponent,
    ElewaSdgListComponent,
    ElewaSdgCardComponent,
  ],
  exports: [
    ElewaInfoCardComponent,
    ElewaWebsitePriceItemCardComponent,
    ElewaNewsItemCardComponent,
    ElewaProjectItemCardComponent,
    ElewaTeamMemberCardComponent,
    ElewaPriceListComponent,
    ElewaSdgListComponent,
    ElewaSdgCardComponent
  ],
})
export class CardsModule {}
