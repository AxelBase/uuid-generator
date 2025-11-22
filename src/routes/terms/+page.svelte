<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms & Conditions • AxelBase UUID v4 Generator</title>
  <meta name="description" content="Free, open-source, no-warranty UUID v4 generator. Use at your own risk. No liability for generated identifiers." />
  <meta property="og:title" content="Terms & Conditions • AxelBase UUID v4 Generator" />
  <meta property="og:description" content="Free to use, modify, and redistribute under MIT license. No guarantees provided." />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a> <span>/</span> <p>Terms & Conditions</p>
  </div>

  <article class="prose">
    <h1>Terms & Conditions</h1>
    <p class="post-meta">Effective Date: November 22, 2025</p>

    <p>By using the <strong>AxelBase UUID v4 Generator</strong> ("the tool"), you agree to these Terms & Conditions. This is a free, open-source, client-side web utility provided "as is" with no warranties.</p>

    <h2>1. Nature of Service</h2>
    <p>The tool generates RFC 4122-compliant UUID version 4 identifiers using your browser’s native cryptographic functions. It does not store, transmit, or log any data.</p>

    <h2>2. License & Usage</h2>
    <p>You are free to:</p>
    <ul>
      <li>Use the tool for personal or commercial purposes</li>
      <li>Fork, modify, and self-host the source code</li>
      <li>Embed or link to this tool</li>
      <li>Generate unlimited UUIDs</li>
    </ul>
    <p>The entire project is licensed under the <strong>MIT License</strong> — see GitHub repository for details.</p>

    <h2>3. No Warranty</h2>
    <p>This tool is provided <strong>without warranty of any kind</strong>, express or implied, including but not limited to:</p>
    <ul>
      <li>Fitness for a particular purpose</li>
      <li>Non-infringement</li>
      <li>Correctness or uniqueness of generated UUIDs (though probability of collision is astronomically low)</li>
    </ul>

    <h2>4. Limitation of Liability</h2>
    <p>In no event shall the authors or contributors be liable for any damages arising from the use or inability to use this tool, including but not limited to:</p>
    <ul>
      <li>Data loss</li>
      <li>Security incidents</li>
      <li>ID collisions (theoretical risk: ~1 in 5.3×10³⁶)</li>
      <li>Business interruption</li>
    </ul>

    <h2>5. Accuracy of Generated UUIDs</h2>
    <p>While this tool uses cryptographically secure methods and strictly follows RFC 4122, <strong>you are solely responsible</strong> for validating UUIDs in your environment.</p>

    <h2>6. Modifications</h2>
    <p>We may update these terms at any time. Continued use constitutes acceptance.</p>

    <h2>7. Governing Law</h2>
    <p>These terms are governed by the laws of open-source goodwill and common sense.</p>

    <p class="italic-note">
      <strong>Built for developers, by developers.</strong><br>
      Use freely. Share widely. Improve openly.
    </p>
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
  .prose ul li { margin-bottom: 0.7rem; }
  .prose ul li::marker { color: var(--accent-primary); }
  .italic-note { font-style: italic; color: var(--text-secondary); text-align: center; margin-top: 3rem; font-size: 1.15rem; line-height: 1.6; }
</style>