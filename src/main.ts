import Express, { NextFunction, Request, Response } from "express";
import { getProfile } from "./getProfile";

async function bootstrap() {
	const app = Express();

	app.get("/profile/:walletAddress", getProfile);
	app.use((_, res, __) => res.sendStatus(404));
	app.use((err: Error, _: Request, res: Response, __: NextFunction) => {
		res.status(400).json({ message: err.message });
	})

	app.listen(3000);
}

bootstrap();