
(function() {
    var vertoHandle, vertoCallbacks;

    $.verto.init({}, bootstrap);

    function bootstrap(status) {
        vertoHandle = new jQuery.verto({

            login: '1000@domain',
            passwd: 'pwd',
            sockerUrl: 'wss://<host>:8082',
            ringFile: 'sounds/bell_ring2.wav',
            iceServers: [ {
                url: 'stun:<server>'
            }],
            deviceParms: {
                useMic: 'any',
                useSpeak: 'any'
            },
            tag: "video-container"
        }, vertoCallbacks);
    };

    vertoCallbacks = {
        onWSLogin: onWSLogin,
        onWSClose: onWSClose
    };

    function onWSLogin(verto, success) {
        console.log('onWSLogin', success);
    }

    function onWSClose(verto, success) {
        console.log('onWSClose', success);
    }
})();

