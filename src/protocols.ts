export enum AllowedError {
    "notFoundError" = "notFoundError",
    "forbiddenError" = "forbiddenError",
    "internalServerError" = "internalServerError",
    "unauthorizedError" = "unauthorizedError",
    "badRequestError" = "badRequestError"
}

export type ErrorResponse = {
    name: AllowedError
    message: string[]
}