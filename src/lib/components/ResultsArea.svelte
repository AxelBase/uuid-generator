<script>
  import { formatUUID } from '$lib/formatter';

  export let uuids = [];
  export let format = 'lower';

  async function copySingle(uuid) {
    try {
      await navigator.clipboard.writeText(formatUUID(uuid, format));
    } catch (e) {
      console.error('Copy failed:', e);
    }
  }
</script>

<div class="container">
  <div class="glass-card p-0 overflow-hidden">
    
    <div class="p-3 border-bottom border-light-subtle d-flex justify-content-between align-items-center bg-opacity-10 bg-secondary">
      <div class="d-flex align-items-center gap-2">
          <i class="bi bi-terminal text-muted"></i>
          <h6 class="mb-0 fw-bold">Output Console</h6>
      </div>
      <span class="badge bg-primary bg-opacity-10 text-primary rounded-pill border border-primary border-opacity-25 px-3">
        {uuids.length} Generated
      </span>
    </div>

    <div class="results-area p-0">
      {#if uuids.length}
        <div class="list-group list-group-flush">
          {#each uuids as uuid, i}
            <div class="list-group-item bg-transparent border-light-subtle d-flex justify-content-between align-items-center py-2 px-3">
              <div class="d-flex align-items-center gap-3 overflow-hidden">
                  <span class="text-muted small font-monospace opacity-50" style="width: 25px;">{i + 1}</span>
                  <code class="text-break fs-6" style="color: var(--color-text-main);">{formatUUID(uuid, format)}</code>
              </div>
              <button
                on:click={() => copySingle(uuid)}
                class="btn btn-sm btn-ghost text-muted"
                title="Copy to clipboard"
              >
                <i class="bi bi-clipboard-plus"></i>
              </button>
            </div>
          {/each}
        </div>
      {:else}
        <div class="text-center py-5 text-muted">
            <i class="bi bi-inbox fs-1 opacity-25"></i>
            <p class="mt-2 small">Ready to generate...</p>
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  .results-area {
    max-height: 60vh;
    overflow-y: auto;
    scrollbar-width: thin;
    background: rgba(0, 0, 0, 0.02); /* Very subtle contrast for list area */
  }
  .btn-ghost:hover {
    background-color: rgba(33, 150, 243, 0.1);
    color: var(--color-accent) !important;
  }
</style>