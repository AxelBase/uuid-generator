// FR07 – All output format options
const formats = {
  lower: (uuid) => uuid.toLowerCase(),
  upper: (uuid) => uuid.toUpperCase(),
  nohyphens: (uuid) => uuid.replace(/-/g, ''),
  braced: (uuid) => `{${uuid.toLowerCase()}}`,
  urn: (uuid) => `urn:uuid:${uuid.toLowerCase()}`
};

export function formatUUID(uuid, format = 'lower') {
  const base = uuid.includes('-') ? uuid : 
    `${uuid.slice(0,8)}-${uuid.slice(8,12)}-${uuid.slice(12,16)}-${uuid.slice(16,20)}-${uuid.slice(20)}`;

  switch (format) {
    case 'lower':      return formats.lower(base);
    case 'upper':      return formats.upper(base);
    case 'nohyphens':  return formats.nohyphens(base.toLowerCase());
    case 'braced':     return formats.braced(base);
    case 'urn':        return formats.urn(base);
    default:           return formats.lower(base);
  }
}

export function formatList(uuids, format) {
  return uuids.map(u => formatUUID(u, format));
}