import {Vue} from "vue/types/vue";

declare var process: {
    env: {
        NODE_ENV: string,
        VUE_APP_SOCKETURL: string,
        VUE_APP_DEBUG: string
    }
};

declare module "vue/types/vue" {
    export interface Vue   {
        errors?: any;
    }
}
