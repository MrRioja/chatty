import { Request, Response } from "express";
import { MessagesServices } from "../services/MessagesServices";

class MessagesController {
  async create(req: Request, res: Response) {
    const { admin_id, text, user_id } = req.body;
    const messagesService = new MessagesServices();

    const message = await messagesService.create({
      admin_id,
      text,
      user_id,
    });

    return res.json(message);
  }
}

export { MessagesController };
