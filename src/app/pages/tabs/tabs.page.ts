import { Component, EnvironmentInjector, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonTabs, IonTabBar, IonTabButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  apps,
  cart, 
  grid,
  cash,
  person, homeSharp, calculatorOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, CommonModule, FormsModule]
})
export class TabsPage  {
  public environmentInjector: EnvironmentInjector = inject(EnvironmentInjector);

  constructor() { 
    addIcons({homeSharp,cart,grid,calculatorOutline,person,apps,cash});
  }

}
