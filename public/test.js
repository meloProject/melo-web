System.import("sockets").then((sockets) => {
    System.import("sails").then((sails) => {

        var io = sails(sockets);
        io.sails.autoConnect = true;
        io.sails.transports = ['websocket'];
        io.sails.url = 'http://localhost:1337';
        console.log(io)
        io.socket.on('connect', function (res) {
            console.log("connected");
            //io.socket.get('/messages');
            //io.socket.get('/notifications/subscribe/statusUpdates');
        });


        io.socket.on('message', function (res) {
            console.log(res);
            //io.socket.get('/messages');
            //io.socket.get('/notifications/subscribe/statusUpdates');
        });

        io.socket.on('screen', function (res) {
            console.log(res);
            //io.socket.get('/messages');
            //io.socket.get('/notifications/subscribe/statusUpdates');
        });

        io.socket.post('/channels/sus', { room: "screen" }, function serverResponded(body, JWR) {
            console.log(body.message)
        });

        // io.socket.get('/channels/brod', function serverResponded(body, JWR) {
        //     console.log(body)
        // });


    });
});
