import { NextFunction, Request, Response } from "express";

async function getProfile(req: Request, res: Response, next: NextFunction) {
	return res.json({ message: "OK" });
}

export { getProfile };