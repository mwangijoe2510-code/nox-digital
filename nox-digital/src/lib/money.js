export const kes = (n) => 'KES ' + Math.round(n).toLocaleString('en-KE')
export const waLink = (number, text) => `https://wa.me/${number}?text=${encodeURIComponent(text)}`
