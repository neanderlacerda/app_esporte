import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-new-todo-modal',
  templateUrl: './new-todo-modal.page.html',
  styleUrls: ['./new-todo-modal.page.scss'],
})
export class NewTodoModalPage implements OnInit {

  @Input() modalController: ModalController;

  constructor() { }

  ngOnInit() {
  }
  dismiss() {
    this.modalController.dismiss();
  }
  cadastrar(){
    alert('Cadastro realizado com sucesso!')
  }

}
