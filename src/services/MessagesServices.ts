import { getCustomRepository } from "typeorm";
import { MessagesRepository } from "../repositories/MessagesRepository";

interface IMessageCreate {
  text: string;
  user_id: string;
  admin_id?: string;
}

class MessagesServices {
  async create({ admin_id, text, user_id }: IMessageCreate) {
    const messagesRepository = getCustomRepository(MessagesRepository);

    const message = messagesRepository.create({
      admin_id,
      text,
      user_id,
    });

    await messagesRepository.save(message);

    return message;
  }
}

export { MessagesServices };
