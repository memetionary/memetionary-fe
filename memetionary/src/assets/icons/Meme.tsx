import type { SVGProps } from 'react';
const SvgMeme = ({ width = 24, height = 24, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 512 512" {...props}>
    <path d="M355.9 1.6c-4 2.6-5.2 5.3-5.7 13.1l-.5 7.3h-5.6c-15.2.1-24.6 3.3-32.3 11.2-6.5 6.7-8.9 13.5-9.6 27l-.5 10.8h-6.8c-8 0-11 1.1-13.2 5-2.2 3.7-2.1 7.8.3 11.7 2.2 3.7 6.7 5.3 14.8 5.3h5.2v47h-7c-8.1 0-11 1.1-13.3 5-3 5.1-1.6 11.5 3.2 14.6 1.5 1.1 5.4 1.9 9.8 2.2l7.3.5v7.6c.1 26.4 13.9 40.1 40.4 40.1h7.3l.5 7.3c.5 7.9 2.3 11.7 6.4 13.5 4.9 2.3 10.2 1.1 13.6-3.2 1.3-1.6 1.8-4 1.8-9.9V210h46.7l.5 7.3c.7 10.1 4.2 14.7 11.3 14.7 7.2 0 10.5-4.6 10.5-15v-7h7.8c16 0 26.4-4.2 33.4-13.5 5.1-6.8 6.8-12.2 7.5-24.1l.6-10.2 7.1-.4c7.8-.5 10.5-1.8 13-5.9 2.7-4.5 2.1-8.6-1.8-12.5-3.3-3.3-3.7-3.4-11-3.4H490V93.3l7.3-.5c7.9-.5 10.6-1.7 13.1-5.9 2.7-4.5 2.1-8.6-1.8-12.5-3.3-3.3-3.7-3.4-10.9-3.4h-7.4l-.6-10.8c-.3-5.9-1.3-12.6-2.1-15-3.4-9.6-11.3-17.4-20.8-20.8-2.4-.8-9.1-1.8-15-2.1l-10.8-.6v-7.3c0-6.3-.3-7.6-2.6-10.3-3.3-3.9-8.5-5-12.8-2.7-4.6 2.4-5.9 5.2-6.4 13.3l-.5 7.3H372v-7.5c0-6.7-.3-7.8-2.7-10.5-3.5-3.9-9.5-4.9-13.4-2.4m105.7 44.6c6 3.3 5.9 2.3 5.9 70.8 0 58-.1 62.7-1.8 65.1-3.7 5.6-1.8 5.4-70.3 5.4-62.6 0-63.3 0-66.1-2.1-1.5-1.1-3.3-3.6-4-5.5-1.3-3.7-1.9-119.7-.7-125.8.8-4 5.5-8.8 9.2-9.4 1.5-.2 30.2-.4 63.7-.3 55.4.1 61.3.3 64.1 1.8M180.9 126.9c-10.8 3.5-18.1 10-23.3 21.1-2.6 5.7-3 7.6-3 15 0 6.4.6 9.9 2.3 14.3 3.1 7.9 11.3 16.6 19.1 20.3l6.1 2.9-.3 5.5-.3 5.5-42 .5c-40 .5-42.3.7-47.8 2.7-11.2 4.3-18.1 8.6-26.3 16.8-13.2 13.2-19.3 28.3-19.4 48.1v9.1l-11.2.5C20.5 289.9 15 292 8 299.7.9 307.5-.3 312.2.2 330.8c.3 13.6.5 15.1 3 19.8 3.4 6.4 10.5 12.8 16.5 14.8 3.1 1.1 8.2 1.6 15.4 1.6h10.7l.4 12.2c.6 14.3 2.9 22.7 8.8 32.9 10.8 18.3 29.2 30.2 50.7 32.7l6.1.7-4.4 5.8c-8.7 11.5-13 23.8-14.1 40-.7 11.4.5 16 5.1 18.8 3 1.8 6.1 1.9 93.9 1.9 100.7 0 95.4.4 98.3-6.5 2.9-7.1 1.1-24.9-3.8-37.7-1.6-4.3-5.3-11.1-8.2-15.2l-5.3-7.3 6.7-.7c14.7-1.3 28.2-7.9 39.5-19.1 13.2-13.3 18.4-25.6 19.2-45.8l.6-12.7H350c7.1 0 12.2-.5 15.3-1.6 6-2 13.1-8.4 16.5-14.8 2.6-5 2.7-5.6 2.7-22.1 0-15.7-.2-17.4-2.3-21.6-3.1-6.4-8.6-11.7-15-14.7-4.5-2-7.5-2.6-16.8-3l-11.4-.5v-9.1c-.1-19.8-6-34.7-19.4-48.2-6.8-6.8-9.6-8.9-17.6-12.7-5.2-2.5-11.9-5-14.8-5.6-3.3-.7-20.2-1.1-44.2-1.1h-39v-11.9l5.4-2.6c7.2-3.4 15.7-12.6 18.7-20.2 1.7-4.3 2.3-8 2.3-14.3.1-7.5-.3-9.3-3-15-3.7-7.9-7.9-12.8-14.2-16.8-9.6-6.1-21.6-7.7-32.3-4.3m18.7 21.7c10 4.7 12.3 17.8 4.5 25.5-7 7.1-16.2 7.1-23.2 0-12.5-12.5 2.7-33.1 18.7-25.5m91.6 89.1c11.6 5.5 20.1 15.2 23.9 27.4 1.8 5.7 1.9 9.9 1.9 62.8 0 61.7-.1 63.3-5.7 72.9-5.9 10.2-17.7 18.8-29 21.2-3.1.7-35 1-92.8.8l-88-.3-7.7-3.7C83.6 414 77 407.4 72.2 397.2l-3.7-7.7-.3-58.3c-.2-50.5-.1-59.2 1.3-64.5 3.7-14.6 15.2-26.6 30-31.3 3.1-1 23.3-1.2 94.5-1.1l90.5.2zM46 328v17h-9.5c-8.8 0-9.8-.2-12-2.5-2.4-2.3-2.5-3-2.5-13.7 0-16.2 1.3-17.6 15.8-17.7l8.2-.1zm314.6-13.7c2.2 2.6 2.4 3.6 2.4 14.3 0 10.9-.1 11.6-2.5 13.9-2.2 2.3-3.2 2.5-12 2.5H339v-34.2l9.6.4c9.1.3 9.7.5 12 3.1M237.1 447.7c17.4 6.5 29.4 20.8 32.2 38.6l.6 3.7H115.3l.9-5.3c2.1-12.1 11-25.4 21.4-31.9 4-2.6 13.9-6.4 18.4-7.2 1.4-.2 18.9-.3 39-.2 34.4.2 36.8.3 42.1 2.3" />
    <path d="M101.5 257.7c-1.1.2-3.1.9-4.3 1.6-5.3 2.6-5.2 1.8-5.2 69.8v63.1l3.4 3.4 3.4 3.4h187.4l3.4-3.4 3.4-3.4v-63.3c0-61-.1-63.5-2-66.6-1.3-2.1-3.1-3.5-5.7-4.2-3.7-1.1-179.2-1.4-183.8-.4M271 328v49H114v-98h157z" />
    <path d="M146.5 299.7c-3.2.8-7.4 5.4-8.1 8.9-.4 2 0 4.3 1 6.2 2.7 5.3 5 6.2 15.4 6.2 9 0 9.5-.1 12.3-2.9 2.3-2.4 2.9-3.8 2.9-7.3 0-5.2-2.1-8.5-6.6-10.4-3.2-1.3-12.6-1.7-16.9-.7M221.4 300.4c-4.4 1.9-6.4 5.3-6.4 10.4 0 3.5.6 4.9 2.9 7.3 2.8 2.8 3.3 2.9 12.3 2.9 10.4 0 12.7-.9 15.4-6.2 2.1-4.1 1.1-8.7-2.6-12.3-2.6-2.5-3.8-2.9-10.7-3.2-5.3-.2-8.8.1-10.9 1.1M164.5 335.9c-2.6 1.2-6.1 5-7 7.9-.9 3.2 1.2 8.8 4.2 11.2 2.4 1.9 4 2 30.7 2 30.9 0 31 0 34.2-6.2 2.1-4.1 1.1-8.7-2.7-12.4l-3-2.9-27.2-.2c-15-.1-28.1.2-29.2.6" />
  </svg>
);
export default SvgMeme;
