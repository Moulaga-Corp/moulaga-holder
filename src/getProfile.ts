import { NextFunction, Request, Response } from "express";
import MoulagaClient from "./moulagaSdk";

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
	
		const [data, keyCipher] = await Promise.all([
			MoulagaClient.prepareDataForStorage(JSON.stringify({profile: "hello"}), "feeder"),
			// replace by call to contract to retrieve cipher
			Promise.resolve("")
		]);
		
		const payload = await MoulagaClient.prepareDataForConsumer(keyCipher, data, publicKey);
	
		return res.json(payload);

	} catch(err) {
		return next(err);
	}
}

export { getProfile };