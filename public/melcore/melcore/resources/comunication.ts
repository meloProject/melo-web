/// <reference path="../typings/whatwg-fetch/whatwg-fetch" />
class Comunication {

    fetching(controller: string, action: string, method: string, values: {}) {
        controller = "/" + controller,
            action = "/" + action;

        fetch(controller + action, {
            mode: 'cors',
            method: method,
            body: JSON.stringify(values)
        })
            .then((response: any) => {
                return response;
            })
            .catch((response: any) => {
                return response;
            });
    }

    createRequest(actionType: string, values: {}) {
        let urlSet: string = 'http://localhost:1337';
        switch (actionType) {
            case "setposition":
                this.fetching("melo", "position", "POST", values);
            break;
            case "updateposition":
                this.fetching("melo", "position", "PUT", values);
            break;
            default:
                try {
                    throw Error("Communication error the action dont exist");    
                } catch (err) {
                    console.log(err);
                }
        }
    }

    transport(actionType: string, values: {}) {
        /*
         method for transmit information to the API.
        */
        this.createRequest(actionType, values);    
    }

}

export default new Comunication();