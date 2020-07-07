export function convertMS(ms) {
  let seconds = Math.floor(ms / 1000);
  let minute = Math.floor(seconds / 60);
  seconds = seconds % 60;
  let hour = Math.floor(minute / 60);
  minute = minute % 60;
  const day = Math.floor(hour / 24);
  hour = hour % 24;
  return { day, minute, hour, seconds };
}

export function joinPathParams(paramsArray) {
  return paramsArray.join('/');
}

export function joinQueryParams(paramsObject) {
  return Object.entries(paramsObject)
    .map(([param, value]) => `${param}=${value}`)
    .join('&');
}
