// FR08 – Download as .txt, .json, .csv

export function downloadText(content, filename = 'uuids.txt') {
  const blob = new Blob([content], { type: 'text/plain' });
  downloadBlob(blob, filename);
}

export function downloadJSON(uuids, filename = 'uuids.json') {
  const content = JSON.stringify(uuids, null, 2);
  const blob = new Blob([content], { type: 'application/json' });
  downloadBlob(blob, filename);
}

export function downloadCSV(uuids, filename = 'uuids.csv') {
  const content = uuids.join('\n');
  const blob = new Blob([content], { type: 'text/csv' });
  downloadBlob(blob, filename);
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}