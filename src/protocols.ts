export enum AllowedError {
    "notFoundError" = "notFoundError",
    "forbiddenError" = "forbiddenError",
    "internalServerError" = "internalServerError"
}

export type ErrorResponse = {
    name: AllowedError
    message: string
}