import { RenderContext } from '@fmfe/genesis-core';
import Vue from 'vue';
import { createServerApp } from '@fmfe/genesis-app';
import App from './app.vue';
import { createRouter } from './routes';

export default async (context: RenderContext): Promise<Vue> => {
    return createServerApp({
        App,
        context,
        vueOptions: {
            router: createRouter()
        }
    });
};
