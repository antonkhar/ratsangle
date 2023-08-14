import { Component } from '@angular/core';
import { MessageService } from 'src/app/servises/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {

  constructor(public messageService: MessageService) {}

  
}
