import { get } from "env-var";

const CONFIG = {
	WALLET_PRIVATE_KEY: get("WALET_PRIVATE_KEY").required().asString(),
	PORT: get("PORT").default(3000).asPortNumber(),
} as const;

export default CONFIG;