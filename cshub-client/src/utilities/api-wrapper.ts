import axios, {AxiosResponse} from "axios";

import {IApiRequest} from "../../../cshub-shared/models/IApiRequest";

export class ApiWrapper {

    public static sendPostRequest(request: IApiRequest, callback?: (...args: any) => void) {
        this.axiosApi
            .post(request.URL, request, {
                withCredentials: true
            })
            .then((response: AxiosResponse<any>) => {
                if (callback) {
                    callback(response.data);
                }
            });
    }

    public static sendGetRequest(request: IApiRequest, callback?: (...args: any) => void) {
        this.axiosApi
            .get(request.URL)
            .then((response: AxiosResponse<any>) => {
                if (callback) {
                    callback(response.data);
                }
            });
    }

    private static axiosApi = axios.create({
        baseURL: process.env.VUE_APP_API_URL,
        withCredentials: true,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        }
    });
}