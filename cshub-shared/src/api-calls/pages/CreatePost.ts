import {IApiRequest} from "../../models/IApiRequest";

import {AuthRequests} from "../AuthRequests";
import Delta from "quill-delta/dist/Delta";

export enum SubmitPostResponse {
    SUCCESS,
    TITLEALREADYINUSE,
    INVALIDINPUT
}

export class CreatePostCallback {

    constructor(
        public response: SubmitPostResponse,
        public postHash?: number
    ) {}
}

export class CreatePost implements IApiRequest {

    public static getURL: string = AuthRequests.SUBMITPOST;
    public URL: string = CreatePost.getURL;

    constructor(
        public postTitle: string,
        public postBody: Delta,
        public postHTML: string,
        public postTopicHash: number
    ) {}
}