import { NextFunction, Request, Response } from "express";

async function onboard(req: Request, res: Response, next: NextFunction) {
	return res.sendStatus(201);
}

export { onboard };