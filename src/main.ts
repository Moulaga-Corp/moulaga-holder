import Express from "express";
import { getProfile } from "./getProfile";

async function bootstrap() {
	const app = Express();

	app.get("/profile/:walletAddress", getProfile);
	app.use((_, res, __) => res.sendStatus(404));

	app.listen(3000);
}

bootstrap();