<script>
  function toggleTheme() {
    // This toggles the data attribute on the body
    const current = document.body.dataset.bsTheme;
    document.body.dataset.bsTheme = current === 'dark' ? 'light' : 'dark';
  }
</script>

<div class="container py-3 mb-3">
  <div class="d-flex justify-content-between align-items-center p-3 rounded-4 glass-card border-0">
    
    <div class="d-flex flex-column">
      <h1 class="h4 mb-0 d-flex align-items-center gap-2 fw-bold">
        <i class="bi bi-fingerprint text-primary"></i>
        <span class="d-none d-sm-inline">UUID v4 Generator</span>
        <span class="d-inline d-sm-none">UUID Gen</span>
      </h1>
      <small class="text-muted ps-1" style="font-size: 0.8rem;">
        Privacy-first • No tracking • Client-side
      </small>
    </div>

    <div>
      <button
        type="button"
        class="btn btn-outline-secondary d-flex align-items-center justify-content-center"
        style="width: 40px; height: 40px; padding: 0;"
        on:click={toggleTheme}
        aria-label="Toggle dark mode"
      >
        <i class="bi bi-moon-stars-fill fs-5" id="theme-icon"></i>
      </button>
    </div>

  </div>
</div>

<style>
  /* Icon rotation animation */
  :global([data-bs-theme="dark"]) #theme-icon {
    transform: rotate(360deg); 
    /* You can substitute with the specific moon/sun icon swap logic if preferred, 
       but rotation works well for a single icon */
  }
  
  #theme-icon {
    transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
</style>