const base64ToBytes = (base64: string): Uint8Array => {
  const binString = atob(base64);
  const bytes = new Uint8Array(binString.length);
  for (let i = 0; i < binString.length; i++) {
    bytes[i] = binString.charCodeAt(i);
  }
  return bytes;
};

const bytesToBase64 = (bytes: Uint8Array): string => {
  const binString = Array.from(bytes, (x) => String.fromCodePoint(x)).join('');
  return btoa(binString);
};

export const encoding = (string: string) => {
  return bytesToBase64(new TextEncoder().encode(string));
};

export const decoding = (string: string) => {
  return new TextDecoder().decode(base64ToBytes(string));
};
