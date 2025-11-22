<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>All Output Formats Explained • AxelBase</title>
  <meta name="description" content="Lowercase, UPPERCASE, no hyphens, braced, URN — complete guide to every UUID format this generator supports and real-world use cases." />
  <meta property="og:title" content="All Output Formats Explained • AxelBase" />
  <meta property="og:description" content="Choose the perfect UUID format for PostgreSQL, MongoDB, JSON APIs, filenames, and more." />
  <meta property="og:url" content="{base}/blog/posts/post5" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a> <span>/</span> <p>Output Formats</p>
  </div>

  <article class="prose">
    <h1>All Output Formats Explained</h1>
    <p class="post-meta">Published: November 22, 2025</p>

    <p>Not all UUIDs are created equal — different systems expect different string representations. This generator gives you all five standard formats instantly.</p>

    <h2>The Five Formats &amp; When to Use Them</h2>
    <ul>
      <li>
        <strong>lowercase (default)</strong><br>
        {@html `<code>550e8400-e29b-41d4-a716-446655440000</code>`}<br>
        Used by PostgreSQL, MySQL, most APIs
      </li>
      <li>
        <strong>UPPERCASE</strong><br>
        {@html `<code>550E8400-E29B-41D4-A716-446655440000</code>`}<br>
        Rare, but some legacy systems require it
      </li>
      <li>
        <strong>no hyphens</strong><br>
        {@html `<code>550e8400e29b41d4a716446655440000</code>`}<br>
        Perfect for filenames, URLs, compact storage
      </li>
      <li>
        <strong>braced</strong><br>
        {@html `<code>{550e8400-e29b-41d4-a716-446655440000}</code>`}<br>
        Microsoft SQL Server, .NET, Windows Registry
      </li>
      <li>
        <strong>urn:uuid:</strong><br>
        {@html `<code>urn:uuid:550e8400-e29b-41d4-a716-446655440000</code>`}<br>
        RFC 4122 canonical form, used in ontologies and specs
      </li>
    </ul>

    <h2>Real-World Recommendations</h2>
    <p>Use <strong>no hyphens</strong> for file uploads, <strong>braced</strong> for SQL Server, and <strong>default lowercase</strong> for everything else — it’s the most widely supported.</p>

    <p>All formats are generated client-side and updated live as you switch — no regeneration needed.</p>

    <p class="italic-note">Next: How to deploy your own private instance in under 60 seconds.</p>
  </article>
</div>

<style>
  .post-layout { max-width: 800px; padding: 2rem 1rem 4rem; margin: 0 auto; }
  .breadcrumbs { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem; font-size: 0.9rem; color: var(--text-secondary); }
  .breadcrumbs a { color: var(--accent-secondary); text-decoration: none; }
  .breadcrumbs a:hover { text-decoration: underline; }
  .prose { line-height: 1.8; }
  .prose h1 { font-size: 2.5rem; margin-bottom: 0.5rem; color: var(--accent-secondary); }
  .prose h2 { margin-top: 2.5rem; color: var(--accent-primary); border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; }
  .prose .post-meta { color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 2rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem; }
  .prose ul { padding-left: 1.5rem; }
  .prose ul li { margin-bottom: 1rem; }
  .prose ul li::marker { color: var(--accent-primary); }
  .italic-note { font-style: italic; color: var(--text-secondary); text-align: center; margin-top: 3rem; font-size: 1.1rem; }
</style>