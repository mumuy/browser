import _globalThis from '../runtime/globalThis.js';

export default function (option, value) {
    let mimeTypes = _globalThis?.navigator?.mimeTypes;
    for (let mt in mimeTypes) {
        if (mimeTypes[mt][option]&&mimeTypes[mt][option] == value) {
            return mimeTypes[mt];
        }
    }
    return null;
};
