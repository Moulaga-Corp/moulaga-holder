import Express from "express";
import { getProfile } from "./getProfile";
import { onboard } from "./onboard";
import { register } from "./register";

async function bootstrap() {
	const app = Express();

	app.post("/onboard", onboard);
	app.post("/register", register);

	app.get("/profile/:walletAddress", getProfile);


	app.use((_, res, __) => {
		return res.sendStatus(404);
	});

	app.listen(3000);
}

bootstrap();