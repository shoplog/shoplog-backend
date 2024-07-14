import { CodedError } from 'src/common/errors';

export abstract class HttpError extends CodedError {
	constructor(code: string, message: string, data?: Record<string, unknown>, innerError?: unknown) {
		super(code, message, data, innerError);
	}
}
