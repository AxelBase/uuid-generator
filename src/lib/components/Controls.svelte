<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let currentCount = 1;
  export let selectedFormat = 'lower';

  function generate() {
    const count = Math.min(Math.max(1, parseInt(currentCount) || 1), 10000);
    dispatch('generate', { count, format: selectedFormat });
  }

  function clear() {
    dispatch('clear');
  }
</script>

<div class="container mb-4">
  <div class="glass-card p-4">
    <div class="row g-4 align-items-end">

      <!-- Quantity Input -->
      <div class="col-lg-3 col-md-4">
        <label for="uuid-count" class="form-label fw-bold small text-uppercase text-muted tracking-wider">
          Quantity
        </label>
        <div class="input-group">
          <span class="input-group-text bg-transparent border-end-0 text-muted">
            <i class="bi bi-hash"></i>
          </span>
          <input
            type="number"
            id="uuid-count"
            class="form-control border-start-0 ps-0"
            min="1"
            max="10000"
            bind:value={currentCount}
            placeholder="1"
            aria-describedby="quantity-help"
          />
        </div>
        <div id="quantity-help" class="form-text text-end small mt-1">Max 10,000</div>
      </div>

      <!-- Format Selection – now properly labeled -->
      <div class="col-lg-5 col-md-8">
        <fieldset>
          <legend class="form-label fw-bold small text-uppercase text-muted tracking-wider">
            Format
          </legend>
          <div class="d-flex flex-wrap gap-2 bg-light-subtle p-2 rounded-3 border border-light-subtle">
            {#each [
              {value: 'lower', label: 'abc'},
              {value: 'upper', label: 'ABC'},
              {value: 'nohyphens', label: 'No -'},
              {value: 'braced', label: '{ }'},
              {value: 'urn', label: 'urn:'}
            ] as opt}
              <input
                type="radio"
                class="btn-check"
                name="format"
                id="fmt-{opt.value}"
                value={opt.value}
                bind:group={selectedFormat}
              >
              <label class="btn btn-sm btn-outline-primary border-0 rounded-pill px-3" for="fmt-{opt.value}">
                {opt.label}
              </label>
            {/each}
          </div>
        </fieldset>
      </div>

      <!-- Action Buttons -->
      <div class="col-lg-4 col-12 d-flex gap-2 justify-content-lg-end">
        <button on:click={generate} class="btn btn-primary flex-grow-1 flex-lg-grow-0 px-4 fw-bold shadow-sm">
          <i class="bi bi-lightning-charge-fill me-1"></i> Generate
        </button>
        <button on:click={clear} class="btn btn-outline-danger flex-grow-1 flex-lg-grow-0 px-3" title="Clear Results" aria-label="Clear all generated UUIDs">
          <i class="bi bi-trash3"></i>
        </button>
      </div>

    </div>
  </div>
</div>

<style>
  .tracking-wider { letter-spacing: 1px; }
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>