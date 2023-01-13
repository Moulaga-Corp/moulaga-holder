import Express from "express";

async function bootstrap() {
	const app = Express();

	app.get("/", (_, res) => res.send("Hello World !"));

	app.listen(3000);
}

bootstrap();