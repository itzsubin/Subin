export const sanitizeInput = (data) => {
  const sanitized = {};
  for (const key in data) {
    sanitized[key] = data[key]
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .trim();
  }
  return sanitized;
};