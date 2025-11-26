"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
exports.handleError = handleError;
class AppError extends Error {
    constructor(message) {
        super(message);
        this.name = "AppError";
    }
}
exports.AppError = AppError;
function handleError(error) {
    if (error instanceof AppError) {
        console.log("Application error:" + error.message);
    }
    else if (error instanceof Error) {
        console.log("Unexpected error: " + error.message);
    }
    else {
        console.log("Unknow error");
    }
}
//# sourceMappingURL=errorHandler.js.map