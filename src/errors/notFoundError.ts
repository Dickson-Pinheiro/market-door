import { ErrorResponse, AllowedError } from "protocols";

export default function notFoundError(message: string): ErrorResponse {
    return {
        name: AllowedError.notFoundError,
        message
    }
}