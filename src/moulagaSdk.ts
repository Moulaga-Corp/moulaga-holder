import { MoulagaSdk } from "moulaga-sdk";
import CONFIG from "./config";

const MoulagaClient = MoulagaSdk.fromPrivateKey(CONFIG.WALLET_PRIVATE_KEY);

export default MoulagaClient;