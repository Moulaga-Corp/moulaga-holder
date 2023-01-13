import { NextFunction, Request, Response } from "express";

async function register(req: Request, res: Response, next: NextFunction) {
	return res.sendStatus(201);
}

export { register };