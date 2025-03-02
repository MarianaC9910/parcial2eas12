import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonText, IonCardTitle, IonCard, IonCardContent, IonCardHeader, IonLabel, IonItem } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OpenaiService } from '../openai.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [RouterModule, IonContent, IonLabel, IonHeader, IonCardTitle, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonInput, IonText, IonCard, IonCardContent, IonCardHeader, IonItem, IonCardTitle]
})
export class HomePage {
  constructor(private router: Router, private openAIService: OpenaiService) {}


  ideaPrompt: string = '';
  generatedIdea: string = '';


  async generateIdea(){
    if(this.ideaPrompt.trim() === ''){
      alert('Por favor ingresa una idea inicial.');
      return;
    }
    this.generatedIdea = await this.openAIService.generateIdea(this.ideaPrompt);
  }


}




