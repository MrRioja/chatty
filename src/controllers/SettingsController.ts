import { Request, Response } from "express";

class SettingsController {
  async create(req: Request, res: Response) {
    const { chat, username } = req.body;

    const settingsService = new SettingsService();

    const settings = await settingsService.create({ chat, username });

    return res.json(settings);
  }
}

export { SettingsController };
