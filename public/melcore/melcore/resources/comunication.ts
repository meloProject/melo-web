/// <reference path="../typings/whatwg-fetch/whatwg-fetch" />
class Comunication {

    toUrl(url: string) {
        switch (url) {
            case "position":
                return url = 'http://localhost:1337/melo/';
        }
    }

    transport(APICONTROLLER: string, state: { x: number, y: number }) {
        /*
         method for transmit information to the API.
        */
        fetch(this.toUrl(APICONTROLLER) + APICONTROLLER, {
            method: 'post',
            mode: 'cors',
            body: JSON.stringify({
                x: state.x,
                y: state.y,
            })
        })
            .then((response: any) => {
                return response;
            })
            .catch((response: any) => {
                return response;
            });
    }

}

export default new Comunication();