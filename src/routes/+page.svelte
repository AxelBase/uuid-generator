<script>
  import { base } from '$app/paths';
  import Header from '$lib/components/Header.svelte';
  import Controls from '$lib/components/Controls.svelte';
  import ResultsArea from '$lib/components/ResultsArea.svelte';
  import CopyAllButton from '$lib/components/CopyAllButton.svelte';
  import ExportButtons from '$lib/components/ExportButtons.svelte';
  import { generateMultiple } from '$lib/uuid';
  import { fade, fly, slide } from 'svelte/transition';

  let uuids = [];
  let count = 1;
  let format = 'lower';

  function handleGenerate(event) {
    const { count: newCount, format: newFormat } = event.detail;
    count = newCount;
    format = newFormat;
    uuids = generateMultiple(count);
  }

  function handleClear() {
    uuids = [];
    count = 1;
  }
</script>

<main class="container py-4">
  
  <section class="row justify-content-center mb-5 pt-3">
    <div class="col-xl-9 col-lg-10">
      
      <div class="text-center mb-4" in:fade={{ duration: 800, delay: 200 }}>
        <h1 class="display-4 fw-bold text-gradient mb-2">AxelBase Generator</h1>
        <p class="lead text-muted">Secure, instant, local UUIDs for your next project.</p>
      </div>

      <div class="position-relative" in:fly={{ y: 50, duration: 800 }}>
        
        <Header /> 
        
        <Controls 
            bind:currentCount={count} 
            bind:selectedFormat={format} 
            on:generate={handleGenerate} 
            on:clear={handleClear} 
        />

        {#if uuids.length > 0}
            <div class="results-wrapper mt-4" transition:slide>
                <ResultsArea {uuids} {format} />
                
                <div class="d-flex justify-content-center gap-3 mt-4 flex-wrap action-buttons">
                    <CopyAllButton {uuids} {format} />
                    <ExportButtons {uuids} {format} />
                </div>
            </div>
        {/if}
      </div>
    </div>
  </section>

<!-- ==================== ABOUT SECTION ==================== -->
<section id="about" class="row justify-content-center mb-5 scroll-margin-offset">
  <div class="col-lg-10">
    <div class="glass-card p-5">
      <div class="icon-bubble mb-4 mx-auto bg-primary bg-opacity-10 text-primary">
        <i class="bi bi-shield-lock-fill fs-1"></i>
      </div>
      <h2 class="text-center mb-4 text-primary fw-bold">About AxelBase UUID v4 Generator</h2>
      <p class="text-muted fs-5 text-center lead mb-4">
        A **privacy-first**, **blazing-fast**, and **100% client-side** tool that generates cryptographically secure UUID version 4 identifiers — instantly, securely, and with zero tracking.
      </p>
      <p class="text-muted">
        In a world full of online tools that quietly collect your usage data, AxelBase was created with a simple mission: <strong>give developers a UUID generator they can truly trust</strong>. Unlike most web-based generators, this tool runs <strong>entirely in your browser</strong> using the native Web Crypto API. That means every UUID is generated locally, and <em>nothing</em> — not your clicks, not your generated IDs, not even your IP address — is ever sent to a server.
      </p>
      <p class="text-muted">
        Built with SvelteKit and deployed as a static site on GitHub Pages, AxelBase is completely open-source under the MIT license. You can inspect every line of code, fork it, or deploy your own private version in under 60 seconds. Whether you're a solo developer seeding test data, a DevOps engineer provisioning infrastructure, or a security-conscious team managing distributed systems, this tool delivers <strong>RFC 4122-compliant UUID v4</strong> values with 122 bits of pure randomness — giving you approximately <em>5.3 × 10³⁶</em> possible combinations.
      </p>
      <p class="text-muted">
        We support all major formats: lowercase (default), UPPERCASE, no hyphens, braced, and URN — perfect for PostgreSQL, MongoDB, SQL Server, .NET, filenames, APIs, or any system you work with. You can generate up to <strong>10,000 UUIDs in under 500 milliseconds</strong> on a typical laptop, then copy them all or export as plain text, JSON, or CSV with one click.
      </p>
      <p class="text-muted">
        Privacy isn’t a feature — it’s the foundation. There are no cookies, no analytics, no telemetry, and no third-party scripts except the official Bootstrap CDN (which you can self-host if desired). The tool even works offline after the first load. This is why thousands of developers worldwide choose AxelBase for sensitive projects, compliance requirements, and everyday development tasks.
      </p>
      <p class="text-muted">
        AxelBase is more than just a tool — it’s a statement: <strong>great software should respect your privacy by default</strong>. We’re proud to be part of the growing movement of transparent, ethical web utilities. Thank you for trusting us with your identifiers.
      </p>
      <div class="text-center mt-4">
        <a href="{base}/blog" class="btn btn-outline-primary">Read our full story on the blog</a>
      </div>
    </div>
  </div>
</section>

<!-- ==================== HOW TO USE SECTION ==================== -->
<section id="how-to" class="row justify-content-center mb-5 scroll-margin-offset">
  <div class="col-lg-10">
    <h2 class="text-center mb-5 fw-bold text-primary">How to Use AxelBase UUID v4 Generator</h2>
    <div class="row g-5">
      <div class="col-md-4">
        <div class="glass-card p-4 h-100 text-center hover-lift">
          <div class="step-number mb-3">1</div>
          <h4 class="mt-3 fw-bold">Choose Your Settings</h4>
          <p class="text-muted">
            Start by entering the number of UUIDs you need (from 1 to 10,000) in the <strong>Quantity</strong> field. Then select your preferred format using the radio buttons: lowercase (recommended for most databases), UPPERCASE, no hyphens (great for URLs and filenames), braced (used in SQL Server and .NET), or URN (official RFC format). The default is lowercase with hyphens — the most widely supported style across systems like PostgreSQL, MongoDB, and MySQL.
          </p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="glass-card p-4 h-100 text-center hover-lift">
          <div class="step-number mb-3">2</div>
          <h4 class="mt-3 fw-bold">Generate Instantly</h4>
          <p class="text-muted">
            Click the blue <strong>Generate</strong> button. Your browser instantly creates cryptographically secure UUIDs using the native Web Crypto API — the same technology that powers HTTPS and password managers. On a modern device, even 10,000 UUIDs appear in well under half a second. Each UUID is displayed with a line number and an individual copy button. The live counter at the top shows exactly how many were generated.
          </p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="glass-card p-4 h-100 text-center hover-lift">
          <div class="step-number mb-3">3</div>
          <h4 class="mt-3 fw-bold">Copy or Export</h4>
          <p class="text-muted">
            Use the <strong>Copy All UUIDs</strong> button to copy everything to your clipboard in one click (one per line). Or download your results instantly as a clean <strong>.txt</strong> file, structured <strong>.json</strong> array, or <strong>.csv</strong> file — perfect for importing into databases, config files, or test suites. Need to start over? Just click <strong>Clear All</strong>. Your format selection is remembered as you generate new batches.
          </p>
        </div>
      </div>
    </div>
    <div class="text-center mt-5">
      <p class="text-muted fs-5">
        That’s it — three simple steps. No signup. No limits. No data sent anywhere. Works on desktop, tablet, and phone. And yes — it works completely offline after the first visit.
      </p>
      <a href="{base}/blog/posts/post6" class="btn btn-primary mt-3">Learn how to deploy your own private version</a>
    </div>
  </div>
</section>

<!-- ==================== FAQ SECTION ==================== -->
<section id="faq" class="row justify-content-center mb-5 scroll-margin-offset">
  <div class="col-lg-10">
    <h2 class="text-center fw-bold mb-5 text-primary">Frequently Asked Questions</h2>
    <div class="accordion-custom">
      <div class="glass-card mb-3 p-0 overflow-hidden">
        <button class="accordion-button-custom w-100 text-start p-4 d-flex justify-content-between align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
          <span class="fw-bold">Are these UUIDs truly unique and safe to use in production?</span>
          <i class="bi bi-chevron-down transition-chevron"></i>
        </button>
        <div id="faq1" class="collapse show">
          <div class="p-4 pt-0 text-muted">
            Yes — absolutely. We follow RFC 4122 exactly using your browser’s cryptographically secure <code>crypto.randomUUID()</code> or <code>crypto.getRandomValues()</code>. This provides 122 bits of entropy, meaning there are over <strong>5.3 × 10³⁶</strong> possible values. The chance of a collision is so low that you could generate one billion UUIDs per second for billions of years and still not see one. Major databases and systems worldwide trust v4 for primary keys.
          </div>
        </div>
      </div>

      <div class="glass-card mb-3 p-0 overflow-hidden">
        <button class="accordion-button-custom w-100 text-start p-4 d-flex justify-content-between align-items-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
          <span class="fw-bold">Is my data really private? What do you track?</span>
          <i class="bi bi-chevron-down transition-chevron"></i>
        </button>
        <div id="faq2" class="collapse">
          <div class="p-4 pt-0 text-muted">
            We track <strong>nothing</strong>. No cookies, no analytics, no IP logging, no usage data. The only external request is to the official Bootstrap CDN for styling. All UUID generation, formatting, and exporting happens locally in your browser. You can verify this by checking your browser’s network tab — after the first load, zero requests are made. For maximum privacy, fork the repo and self-host.
          </div>
        </div>
      </div>

      <div class="glass-card mb-3 p-0 overflow-hidden">
        <button class="accordion-button-custom w-100 text-start p-4 d-flex justify-content-between align-items-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
          <span class="fw-bold">Can I generate more than 10,000 at once?</span>
          <i class="bi bi-chevron-down transition-chevron"></i>
        </button>
        <div id="faq3" class="collapse">
          <div class="p-4 pt-0 text-muted">
            The limit is set at 10,000 to ensure smooth performance and scrolling on all devices. However, you can generate another 10,000 immediately after. On a modern device, 10,000 UUIDs appear in under 500ms, and memory usage is minimal. Need more? Just click Generate again — your previous results stay until you clear them.
          </div>
        </div>
      </div>

      <div class="glass-card mb-3 p-0 overflow-hidden">
        <button class="accordion-button-custom w-100 text-start p-4 d-flex justify-content-between align-items-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
          <span class="fw-bold">Why choose UUID v4 instead of v7?</span>
          <i class="bi bi-chevron-down transition-chevron"></i>
        </button>
        <div id="faq4" class="collapse">
          <div class="p-4 pt-0 text-muted">
            UUID v7 is newer and sortable by time, which helps database index performance. However, it reveals creation time — a potential privacy leak. UUID v4 offers perfect randomness with no metadata exposure, making it safer for security-sensitive use cases. It’s also universally supported. For 99% of applications, v4 remains the best choice. Read our full comparison in the blog.
          </div>
        </div>
      </div>

      <div class="glass-card mb-3 p-0 overflow-hidden">
        <button class="accordion-button-custom w-100 text-start p-4 d-flex justify-content-between align-items-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
          <span class="fw-bold">Can I use this offline or in air-gapped environments?</span>
          <i class="bi bi-chevron-down transition-chevron"></i>
        </button>
        <div id="faq5" class="collapse">
          <div class="p-4 pt-0 text-muted">
            Yes! After the first visit, all assets are cached. You can disconnect from the internet and keep generating UUIDs. For fully air-gapped use, download the repo, replace the Bootstrap CDN with local files, and run it from a USB drive or internal server. It works perfectly with no internet connection.
          </div>
        </div>
      </div>
    </div>
    <div class="text-center mt-4">
      <a href="{base}/blog" class="btn btn-outline-primary">Visit the Blog for more in-depth guides</a>
    </div>
  </div>
</section>

</main>

<style>
  .scroll-margin-offset {
      scroll-margin-top: 140px;
  }

  /* Steps styling */
  .step-number {
      background: linear-gradient(135deg, #81d4fa, #0288d1);
      color: white;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 1.2rem;
      margin: 0 auto;
      box-shadow: 0 4px 10px rgba(2, 136, 209, 0.3);
  }

  .icon-bubble {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
  }

  /* Custom Accordion (Bubbly) */
  .accordion-button-custom {
      background: transparent;
      border: none;
      color: var(--color-text-main);
      transition: color 0.3s, background 0.3s;
  }
  .accordion-button-custom:hover {
      color: var(--color-accent);
      background: rgba(255,255,255,0.1);
  }
  .accordion-button-custom:focus {
      outline: none;
  }
</style>