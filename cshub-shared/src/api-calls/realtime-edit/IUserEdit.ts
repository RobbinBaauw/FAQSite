// @ts-ignore
import Delta from "quill-delta/dist/Delta";
import {Dayjs} from "dayjs";

export interface IUserEdit {
    postHash: number;
    delta: Delta;
    timestamp: Dayjs;
    lastServerId: number;
}