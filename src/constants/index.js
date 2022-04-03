const ENV = {
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL,
};

const LoadingStatus = {
  idle: 'idle',
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
};

const StorageKey = {
  authUser: '@auth:user',
};

export {
  ENV,
  LoadingStatus,
  StorageKey,
};
