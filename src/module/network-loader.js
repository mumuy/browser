import _globalThis from './runtime/globalThis.js';

export default function(_){
    _.network = (function () {
        let network = 'unknown';
        let connection = _globalThis?.navigator?.connection;
        if(connection){
            network = connection.type || connection.effectiveType;
            if(network == '2' || network == 'unknown'){
                network = 'wifi';
            }
        }
        return network;
    })();
};