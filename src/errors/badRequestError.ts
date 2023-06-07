import { ErrorResponse,  AllowedError } from "../protocols";

export default function badRequestError(message: string[]): ErrorResponse{
    return {
        name: AllowedError.badRequestError,
        message
    }
}