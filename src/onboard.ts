import { hash, publicKey, recoverPublicKey } from "eth-crypto";
import { NextFunction, Request, Response } from "express";
import MoulagaClient from "./moulagaSdk";

async function onboard(req: Request, res: Response, next: NextFunction) {
	const signature = req.body.signature as string;
	const hashMessage = hash.keccak256(req.body.message as string);

	const feederPublicKey = recoverPublicKey(signature, hashMessage);
	const feeder = publicKey.toAddress(feederPublicKey);

	try {
		await MoulagaClient.onboardFeeder(feeder, feederPublicKey);
		return res.sendStatus(201);
	} catch(err) {
		return next(err);
	}
}

export { onboard };