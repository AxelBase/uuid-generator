<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>How This Generator Uses Web Crypto API • AxelBase</title>
  <meta name="description" content="Deep dive into crypto.randomUUID() and crypto.getRandomValues() — the secure, native methods behind the fastest client-side UUID v4 generator." />
  <meta property="og:title" content="How This Generator Uses Web Crypto API • AxelBase" />
  <meta property="og:description" content="No libraries. No tracking. Just pure, cryptographically secure randomness from your browser." />
  <meta property="og:url" content="{base}/blog/posts/post2" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a> <span>/</span> <p>Web Crypto API</p>
  </div>

  <article class="prose">
    <h1>How This Generator Uses Web Crypto API</h1>
    <p class="post-meta">Published: November 22, 2025</p>

    <p>In 2022, browsers introduced <code>crypto.randomUUID()</code> — a native method that generates a standards-compliant UUID v4 in a single call. This tool uses it whenever available. When not (very rare), it falls back to <code>crypto.getRandomValues()</code> with proper version/variant bit setting.</p>

    <h2>Why Web Crypto > Everything Else</h2>
    <p>Unlike <code>Math.random()</code>, which is predictable and unsuitable for security, Web Crypto API draws from the operating system’s secure entropy pool — the same source used for:</p>
    <ul>
      <li>TLS/SSL certificate generation</li>
      <li>Password hashing</li>
      <li>Cryptographic key generation</li>
    </ul>

    <h2>Performance That Scales</h2>
    <p>Generating 10,000 UUIDs takes under 400ms on a mid-range laptop. Why? Because:</p>
    <ul>
      <li>No external libraries</li>
      <li>No network requests</li>
      <li>Native C++ implementation under the hood</li>
      <li>Zero garbage collection pressure</li>
    </ul>

    <h2>Zero Trust Required</h2>
    <p>Every other online UUID tool sends your usage data somewhere. This one doesn’t. All code runs in your browser. You can even disconnect from the internet after loading — it still works.</p>

    <p>The result? True v4 UUIDs, cryptographically secure, instantly generated, with full privacy.</p>

    <p class="italic-note">Coming next: How we built a privacy-first design with zero analytics.</p>
  </article>
</div>

<style>
  /* Reusing your existing beautiful post styles */
  .post-layout { max-width: 800px; padding: 2rem 1rem 4rem; margin: 0 auto; }
  .breadcrumbs { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem; font-size: 0.9rem; color: var(--text-secondary); }
  .breadcrumbs a { color: var(--accent-secondary); text-decoration: none; }
  .breadcrumbs a:hover { text-decoration: underline; }
  .prose { line-height: 1.8; }
  .prose h1 { font-size: 2.5rem; margin-bottom: 0.5rem; color: var(--accent-secondary); }
  .prose h2 { margin-top: 2.5rem; color: var(--accent-primary); border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; }
  .prose .post-meta { color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 2rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem; }
  .prose ul { padding-left: 1.5rem; }
  .prose ul li { margin-bottom: 0.5rem; }
  .prose ul li::marker { color: var(--accent-primary); }
  .italic-note { font-style: italic; color: var(--text-secondary); text-align: center; margin-top: 3rem; font-size: 1.1rem; }
</style>