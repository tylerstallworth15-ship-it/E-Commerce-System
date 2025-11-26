export class AppError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "AppError";
    }
}

export function handleError(error: any): void {
    if (error instanceof AppError) {
        console.log("Application error:" + error.message);
    } else if (error instanceof Error) {
        console.log("Unexpected error: " + error.message);
    } else {
        console.log("Unknow error");
    }
}