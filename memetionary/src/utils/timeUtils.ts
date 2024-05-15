export const getLastUpdateTime = (time: Date) => {
  return `${time.toISOString().slice(0, 10)} ${time.toTimeString().slice(0, 8)}`;
};
