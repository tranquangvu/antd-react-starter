import { LoadingStatus } from '@/constants';

export function isIdle(loadingStatus) {
  return loadingStatus === LoadingStatus.idle;
}

export function isPending(loadingStatus) {
  return loadingStatus === LoadingStatus.pending;
}

export function isFulfilled(loadingStatus) {
  return loadingStatus === LoadingStatus.fulfilled;
}

export function isRejected(loadingStatus) {
  return loadingStatus === LoadingStatus.rejected;
}
