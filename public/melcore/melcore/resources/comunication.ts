/// <reference path="../typings/whatwg-fetch/whatwg-fetch" />

interface StramPosition {
    channel: string | number;
    dispositive: string;
    positionX: number;
    positionY: number;
}

interface RequestConstructor {
    method: string;
    mode?: string;
    headers?: string[] | any;
    cache?: string;
    controller: string;
    values?: any;
    action?: string | {};
}

class Comunication {
    url: string;
    socketurl: string;
    channel: string | number;
    dispositive: string;
    socket: any;

    constructor() {
        this.url = "http://localhost:1337";
        this.socketurl = "http://localhost:1337";
        this.dispositive = "controller";
        this.socket = (<any>window).sails.socket;
    }

    socketOnMessages(call: (message: any) => void): void {
        this.socket.on('message', (message: any) => {
            call(message);
        });
    }

    socketSuscribeToChannel(url: string, room: string): Promise<Response> {
        return new Promise((resolve: any, reject: any) => {
            this.socket.post(url, { room: room },
                (res: any) => {
                    if (!res.err) resolve(res);
                    else reject(res.err);
                });
        });
    }

    fetcher(request: RequestConstructor): Promise<Response> {
        let reqConstructor: any = {};

        // set defaut request props.
        request.controller = (request.controller !== undefined)
            ? "/" + request.controller
            : "";
        request.action = (request.action !== undefined)
            ? "/" + request.action
            : "";

        // check props for send in request body
        if (request.mode) reqConstructor.mode = request.mode; // default - cors  
        if (request.method) reqConstructor.method = request.method; // VERBS POST GET DELETE PUT...
        if (request.headers) reqConstructor.headers = request.headers;
        if (request.cache) reqConstructor.cache = request.cache; // default disabled
        if (request.values !== undefined && typeof request.values === "object")
            reqConstructor.values = JSON.stringify(request.values); // request body in JSON

        return fetch(this.url + request.controller + request.action, reqConstructor);
    }

    createRequest(actionType: string, values?: StramPosition) {
        // prepare the request
        let promise: Promise<string>;

        if (actionType == "updateposition") {
            return this.fetcher({
                mode: "cors",
                method: "PUT",
                controller: "channels",
                action: values.channel,
                values: values
            });
        }

        return promise = new Promise((resolve, reject) => {
            reject("Fetch request error the action type dont exist");
        });
    }

    streamPosition(actionType: string, values: StramPosition) {
        /*
         method for transmit position.
        */

        // return promise.
        return this.createRequest(actionType, values);
    }

    request(actionType: string, values?: {}) {
        /*
         method for transmit default information.
        */
        //return this.createRequest(actionType, values);
    }

}

export default new Comunication();