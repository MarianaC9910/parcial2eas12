import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonLabel, IonCardTitle } from '@ionic/angular/standalone';
import { AlertController} from '@ionic/angular';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [RouterModule, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonItem, IonLabel, IonCardTitle]
})
export class LoginPage implements OnInit {
  constructor(private alertController: AlertController, private router: Router){ }
  ngOnInit(){}
  async onSubmit(){
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;


    if(this.validateEmail(email) && password){
      const alert = await this.alertController.create({
        header: 'Login Success',
        message: 'You have logged in successfully!',
        buttons: ['Ok'],
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Please check your credentials.',
        buttons: ['Ok'],
      });
      await alert.present();
    }
  }
  validateEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }


  onSignUp(){
    this.router.navigateByUrl("sign-up")
  }


  onReset() {
    this.router.navigateByUrl("forgot-password")
  }
}



