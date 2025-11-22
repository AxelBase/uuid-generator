<script>
  import { formatUUID } from '$lib/formatter';

  export let uuids = [];
  export let format = 'lower';

  async function copyAll() {
    if (!uuids.length) return;
    try {
      const text = uuids.map(u => formatUUID(u, format)).join('\n');
      await navigator.clipboard.writeText(text);
    } catch (e) {
      console.error('Copy all failed:', e);
    }
  }
</script>

<div class="container mt-3">
  <button
    on:click={copyAll}
    disabled={!uuids.length}
    class="btn btn-outline-primary w-100"
  >
    <i class="bi bi-clipboard-check"></i> Copy All UUIDs
  </button>
</div>