<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Deploy Your Own Version in 60 Seconds • AxelBase</title>
  <meta name="description" content="Fork, click, done — how to host your own fully private UUID v4 generator with zero maintenance using GitHub Pages." />
  <meta property="og:title" content="Deploy Your Own Version in 60 Seconds • AxelBase" />
  <meta property="og:description" content="No server. No cost. Full control. Your own privacy-first UUID generator in one click." />
  <meta property="og:url" content="{base}/blog/posts/post6" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a> <span>/</span> <p>Self-Hosting</p>
  </div>

  <article class="prose">
    <h1>Deploy Your Own Version in 60 Seconds</h1>
    <p class="post-meta">Published: November 22, 2025</p>

    <p>Want absolute privacy? Don’t want to rely on anyone else’s domain? You can have your own fully functional copy running in under a minute.</p>

    <h2>One-Click Deployment</h2>
    <ol>
      <li>Fork the repository on GitHub</li>
      <li>Go to Settings → Pages</li>
      <li>Select <strong>Deploy from a branch</strong> → <code>main</code> → <code>/docs</code></li>
      <li>Wait 30 seconds</li>
      <li>Done — your private generator is live</li>
    </ol>

    <h2>Zero Maintenance</h2>
    <p>No server. No database. No updates required. GitHub Pages serves static files forever.</p>

    <h2>Go Fully Offline (Optional)</h2>
    <p>Replace the Bootstrap CDN with local files → works with no internet after first load. Perfect for air-gapped environments.</p>

    <p>Thousands of developers already run their own instances for internal tools, compliance, or just peace of mind.</p>

    <p class="italic-note">Final post: Should you switch from UUID v4 to the new v7?</p>
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
  .italic-note { font-style: italic; color: var(--text-secondary); text-align: center; margin-top: 3rem; font-size: 1.1rem; }
</style>