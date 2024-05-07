export const generateId = (prefix) => {
  return `${prefix}-${Date.now()}`.replace(/\D+/gis, '-');
}