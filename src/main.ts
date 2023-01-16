import Express from "express";
import { getProfile } from "./getProfile";
import { onboard } from "./onboard";

async function bootstrap() {
	const app = Express();

	app.post("/onboard", onboard);

	app.get("/profile/:walletAddress", getProfile);

	app.use((_, res, __) => res.sendStatus(404));

	app.listen(3000);
}

bootstrap();