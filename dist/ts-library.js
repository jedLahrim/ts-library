"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.joLix = void 0;
function joLix(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const charactersLength = characters.length;
    let shortId = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        shortId += characters[randomIndex];
    }
    return shortId;
}
exports.joLix = joLix;
//# sourceMappingURL=ts-library.js.map