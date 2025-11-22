<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy-First Design: No Tracking, No Analytics • AxelBase</title>
  <meta name="description" content="This UUID generator runs 100% client-side with zero telemetry, cookies, or external requests — here’s why that matters and how we achieved it." />
  <meta property="og:title" content="Privacy-First Design: No Tracking, No Analytics • AxelBase" />
  <meta property="og:description" content="No cookies. No localStorage. No pixels. Just pure functionality." />
  <meta property="og:url" content="{base}/blog/posts/post3" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a> <span>/</span> <p>Privacy-First Design</p>
  </div>

  <article class="prose">
    <h1>Privacy-First Design: No Tracking, No Analytics</h1>
    <p class="post-meta">Published: November 22, 2025</p>

    <p>Most “free” online tools monetize your data. This one doesn’t. From day one, the goal was simple: <strong>build a utility you can trust completely</strong>.</p>

    <h2>What “No Tracking” Really Means</h2>
    <ul>
      <li>No Google Analytics</li>
      <li>No pixels or beacons</li>
      <li>No usage logging</li>
      <li>No cookies or localStorage (optional only for theme)</li>
      <li>No server-side processing</li>
    </ul>

    <h2>How We Did It</h2>
    <p>Built with SvelteKit + adapter-static → 100% static site. Deployed on GitHub Pages. The only external request is Bootstrap CDN (for styling). Everything else — including UUID generation — happens in your browser.</p>

    <h2>You Own Your Data</h2>
    <p>Want absolute privacy? Fork the repo, disable the CDN, host it yourself. It works offline after first load.</p>

    <p>This isn’t marketing — it’s engineering philosophy. Tools should respect users by default.</p>

    <p class="italic-note">Next: Generating 10,000 UUIDs in under half a second — the performance story.</p>
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