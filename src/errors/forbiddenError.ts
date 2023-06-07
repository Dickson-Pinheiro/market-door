import { ErrorResponse, AllowedError } from "../protocols";

export default function forbiddenError(message: string): ErrorResponse {
    return {
        name: AllowedError.forbiddenError,
        message
    }
}