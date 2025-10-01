export default function imageLoader({ src, width, quality }) {
  // For static exports, we need to return the src as-is
  // The width and quality parameters are ignored for static exports
  return src;
}
