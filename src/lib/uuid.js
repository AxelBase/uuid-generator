// src/lib/uuid.js
// Fully compatible with Vite/Rollup build – no syntax errors

export function generateUUID() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID(); // Native, best option (2025+ browsers)
  }

  // Fallback using crypto.getRandomValues() – RFC 4122 compliant v4
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);

  // Set version (4) and variant (10xx)
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;

  // Convert to hex string with proper hyphen placement
  const hex = Array.from(bytes)
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');

  return [
    hex.slice(0, 8),
    hex.slice(8, 12),
    hex.slice(12, 16),
    hex.slice(16, 20),
    hex.slice(20)
  ].join('-');
}

export function generateMultiple(count) {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(generateUUID());
  }
  return result;
}