import crypto from "crypto";
import { Settings } from "../settings";

export const hashPassword = (input: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        crypto.pbkdf2(
            input,
            Settings.PASSWORDSALT,
            Settings.PASSWORDITERATIONS,
            64,
            "sha512",
            (err: Error | null, derivedKey: Buffer) => {
                if (err !== null) {
                    reject();
                }
                resolve(derivedKey.toString("hex"));
            },
        );
    });
};
