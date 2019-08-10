import {Request, Response} from "express";

import {app} from "../../";

import {
    VerifyToken,
    VerifyUserTokenCallback
} from "../../../../cshub-shared/src/api-calls";

import {checkTokenValidityFromRequest} from "../../auth/AuthMiddleware";

app.get(VerifyToken.getURL, (req: Request, res: Response) => {

    const tokenVailidity = checkTokenValidityFromRequest(req);

    if (tokenVailidity.valid) {
        res.json(new VerifyUserTokenCallback(tokenVailidity.tokenObj.user));
    } else {
        res.json(new VerifyUserTokenCallback(false));
    }
});