export default function (option, value) {
    let mimeTypes = self?.navigator?.mimeTypes;
    for (let mt in mimeTypes) {
        if (mimeTypes[mt][option]&&mimeTypes[mt][option] == value) {
            return mimeTypes[mt];
        }
    }
    return null;
};
