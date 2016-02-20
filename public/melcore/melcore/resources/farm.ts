/// <reference path="../typings/underscore/underscore.d.ts" />
import * as _ from "underscore";

export class Farm {
    watch(watchers: Array<{ watch: string, action: Function }>) {

        (<any>Object).observe(this, (changes: any) => {
            _.each(changes, (mutated: { name: string, object: any, type: string, oldValue: string }, key: number) => {
                if (Object.keys(watchers).length) {
                    _.each(watchers, (watchObj: any, key: any) => {
                        if (mutated.name === watchObj.watch) {
                            if (typeof watchObj.action === "function") {
                                // se ejecuta la funcion asignada al observador
                                watchObj.action(mutated.object[mutated.name]);
                            }
                        }
                    });
                }
            });
        });
    }
}

