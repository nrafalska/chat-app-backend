import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
  private messages: { sender: string, message: string }[] = [];

  addMessage(message: { sender: string, message: string }) {
    this.messages.push(message);
  }

  getAllMessages(): { sender: string, message: string }[] {
    return this.messages;
  }
}
