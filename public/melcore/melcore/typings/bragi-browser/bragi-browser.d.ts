
declare module "bragi-browser" {
    export = Bragi;
}

declare module Bragi {
    export interface BragiIN {
        log(group: string, message: string): void;
    }
    export function log(group: string, message: string):void 
    export function addGroup(group: string):void
    export function removeGroup(group: string): void
    export let options :{
        groupsEnabled: string[];
    }
}