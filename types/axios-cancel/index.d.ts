// Type definitions for axios-cancel 0.2
// Project: https://github.com/thaerlabs/axios-cancel, https://www.npmjs.com/package/axios-cancel
// Definitions by: TheDSCPL <https://github.com/TheDSCPL>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

import axios from "axios";

declare module 'axios' {
    export interface AxiosRequestConfig {
        requestId?: string
    };
}

export =function (a: typeof axios): void;
