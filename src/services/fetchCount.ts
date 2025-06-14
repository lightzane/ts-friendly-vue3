interface FetchCountCallback {
  (count: number): void;
}

// Typing callback functions
export default function fetchCount(cb: FetchCountCallback) {
  cb(0);
}
