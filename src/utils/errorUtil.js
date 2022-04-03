export class ServiceError extends Error {
  constructor(options) {
    super(options.message || 'Something went wrong!');

    this.name = 'ServiceError';
    this.details = options.details || [];
    this.rootError = options.rootError || null;
  }
}

export function errorToObject(error) {
  return {
    message: error.message,
    details: error.details,
  };
}
