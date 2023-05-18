"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ts_library_1 = require("./ts-library");
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.json({ message: "hello from the jed lahRim library" });
});
app.listen("3001", () => {
    console.log("Server Running!");
});
(0, ts_library_1.joLix)(3);
//# sourceMappingURL=app.js.map