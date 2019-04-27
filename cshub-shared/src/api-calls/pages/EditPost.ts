import {IApiRequest} from "../../models";

import {Requests} from "../Requests";

export enum EditPostReturnTypes {
    SUCCESS,
    NOTHINGTOUPDATE
}

export class EditPostCallback {
    constructor(public result: EditPostReturnTypes) {}
}

export class EditPost implements IApiRequest {

    public static getURL: string = Requests.EDITPOST;
    public URL: string = EditPost.getURL;

    constructor(
        public postHash: number,
        public postTitle: string,
        public postTopicHash: number,
        public deleteEdit: boolean
    ) {}
}
