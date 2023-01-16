import { NextFunction, Request, Response } from "express";
import MoulagaClient from "./moulagaSdk";
import Crypto from "crypto";

async function getProfile(req: Request, res: Response, next: NextFunction) {
	const publicKey = req.query.publicKey as string;
	const consumer = req.query.consumer as string;
	const feeder = req.query.feeder as string;
	const scheme = req.query.scheme as string;

	try {
		const isAuthorized = await MoulagaClient.isAuthorized(feeder, consumer, scheme);
		if (!isAuthorized) {
			return res.sendStatus(401);
		}
	
		const data = await MoulagaClient.prepareDataForStorage(
			JSON.stringify({profile: Crypto.randomBytes(16).toString("hex")}), 
			feeder
		);
		
		const payload = await MoulagaClient.prepareDataForConsumer(feeder, data, publicKey);
	
		return res.json(payload);

	} catch(err) {
		return next(err);
	}
}

export { getProfile };