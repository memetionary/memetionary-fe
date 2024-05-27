export const getLastUpdateTime = (time: object) => {
  if (time instanceof Date) {
    return `${time.toISOString().slice(0, 10)} ${time.toTimeString().slice(0, 8)}`;
  }
};
