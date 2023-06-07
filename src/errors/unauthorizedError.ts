import { ErrorResponse, AllowedError } from "../protocols";

export default function unauthorizedError(message: string[]): ErrorResponse{
    return {
        name: AllowedError.unauthorizedError,
        message
    }
}