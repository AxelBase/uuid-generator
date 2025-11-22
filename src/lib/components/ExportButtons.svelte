<script>
  import { downloadText, downloadJSON, downloadCSV } from '$lib/exporter';
  import { formatUUID } from '$lib/formatter';

  export let uuids = [];
  export let format = 'lower';

  function exportText() {
    if (!uuids.length) return;
    const text = uuids.map(u => formatUUID(u, format)).join('\n');
    downloadText(text, 'uuids.txt');
  }

  function exportJSON() {
    if (!uuids.length) return;
    const formatted = uuids.map(u => formatUUID(u, format));
    downloadJSON(formatted, 'uuids.json');
  }

  function exportCSV() {
    if (!uuids.length) return;
    const formatted = uuids.map(u => formatUUID(u, format));
    downloadCSV(formatted, 'uuids.csv');
  }
</script>

<div class="container mt-3">
  <div class="row g-2">
    <div class="col-4">
      <button
        on:click={exportText}
        disabled={!uuids.length}
        class="btn btn-outline-secondary w-100"
      >
        <i class="bi bi-file-text"></i> .txt
      </button>
    </div>
    <div class="col-4">
      <button
        on:click={exportJSON}
        disabled={!uuids.length}
        class="btn btn-outline-secondary w-100"
      >
        <i class="bi bi-file-code"></i> .json
      </button>
    </div>
    <div class="col-4">
      <button
        on:click={exportCSV}
        disabled={!uuids.length}
        class="btn btn-outline-secondary w-100"
      >
        <i class="bi bi-file-earmark-spreadsheet"></i> .csv
      </button>
    </div>
  </div>
</div>