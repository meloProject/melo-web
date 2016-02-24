import { Comunication } from "./comunication";

interface SocketOi {
    on(message: string, callback: Function): void;
    post(url: string, obj: {}, callback: (res: any, JWR: Object) => void): void;
}

class Sockets extends Comunication {
    /*
    * CLASE PARA ADMINISTRACION DE LA API WEBSCOKETS.
    */
    socket: SocketOi;
    socketurl: string;
    urls: {
        updateposition: string,
        suscribe: string
    };

    constructor() {
        super();
        this.socket = (<any>window).sails.socket;
        this.socketurl = "http://localhost:1337";

        this.urls = {
            updateposition: "/controllers/position",
            suscribe: "/channels/sus"
        };
    }

    comuPosition(params: { positionX: number, positionY: number, brodcastChannel: string }, url?: string): Promise<Response> {
        /*
        * METODO PARA COMUNICAR AL SCREEN, LA POSICION DEL ELEMENTO.
        nota: en el request deberia ir el id del screen - hacodeado con por ahora con "screen"
        */
        url = url || this.urls.updateposition;
         
        return new Promise((resolve: any, reject: any) => {
            this.socket.post(url, params,
                (res: any, JWR: { body: Object, headers: Object, statusCode: number, error: Object }) => {
                    // deberia controlar el error en esta parte.
                    if (!JWR.error) resolve(res);
                    else reject(JWR);
                });
        });
    }

    socketOnMessages(call: (message: any) => void): void {
        /*
        * METODO SETEAR LAS ACCIONES QUE SE EMITIRAN CUANDO SE RECIBA UN MENSAJE.
        */
        this.socket.on('message', (message: any) => {
            call(message);
        });
    }

    socketSuscribeToChannel(room: string | number, url?: string): Promise<Response> {
        /*
        * METODO PARA SUSCRIBIR EL CLIENTE AL CHANNEL DE WEBSCOKETS.
        */
        url = url || this.urls.suscribe;

        return new Promise((resolve: any, reject: any) => {
            this.socket.post(url, { room: room },
                (res: any, JWR: { body: Object, headers: Object, statusCode: number, error: Object }) => {
                    // deberia controlar el error en esta parte.
                    if (!JWR.error) resolve(res);
                    else reject(JWR.error);
                });
        });
    }
}

export default new Sockets();