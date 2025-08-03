import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-collection-filtered',
  templateUrl: './collection-filtered.page.html',
  styleUrls: ['./collection-filtered.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CollectionFilteredPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
