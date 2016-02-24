
declare module "sails" {
    export = sails;
}

declare module sails {
    export interface sailsio {
        (socket: string): any;
    }
    export function log(group: string, message: string): any
}