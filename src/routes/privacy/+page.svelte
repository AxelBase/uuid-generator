<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy • AxelBase UUID v4 Generator</title>
  <meta name="description" content="We collect zero data. No tracking, no cookies, no analytics — your UUIDs never leave your browser." />
  <meta property="og:title" content="Privacy Policy • AxelBase UUID v4 Generator" />
  <meta property="og:description" content="100% client-side. Zero telemetry. Complete privacy by design." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a> <span>/</span> <p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>
    <p class="post-meta">Effective Date: November 22, 2025</p>

    <p>At <strong>AxelBase UUID v4 Generator</strong>, your privacy is not just respected — it is <strong>guaranteed by design</strong>. This tool was built from the ground up to generate cryptographically secure UUIDs <strong>entirely in your browser</strong>, with <strong>zero data collection</strong>.</p>

    <h2>We Collect Nothing</h2>
    <p>We do <strong>not</strong> collect, store, transmit, or process:</p>
    <ul>
      <li>Personal information (name, email, IP address)</li>
      <li>Usage data or analytics</li>
      <li>Generated UUIDs</li>
      <li>Browser or device fingerprints</li>
      <li>Cookies, localStorage (except optional theme preference)</li>
      <li>Any form of telemetry or tracking pixels</li>
    </ul>

    <h2>100% Client-Side Execution</h2>
    <p>Every UUID is generated using your browser’s native <code>crypto.randomUUID()</code> or <code>crypto.getRandomValues()</code>. All formatting, copying, and exporting happens locally. <strong>No data ever leaves your device</strong>.</p>

    <h2>No Third-Party Tracking</h2>
    <p>The only external request is to the official Bootstrap CDN for styling — and even that can be self-hosted. We do not use Google Analytics, Meta pixels, Cloudflare insights, or any tracking service.</p>

    <h2>Offline-First & Air-Gapped Ready</h2>
    <p>After the first load, this tool works completely offline. You can disable internet access, block all scripts, or run it from a USB drive — it will still generate perfect RFC 4122 v4 UUIDs.</p>

    <h2>Data Security = Your Responsibility</h2>
    <p>Since we never see your data, security is fully in your hands. We recommend using a trusted browser and avoiding public networks when generating sensitive identifiers.</p>

    <h2>Children’s Privacy</h2>
    <p>This tool is safe and appropriate for all ages. No personal data is ever requested or stored.</p>

    <h2>Changes to This Policy</h2>
    <p>We may update this policy only to reflect technical improvements. Any changes will be clearly dated. Continued use constitutes acceptance.</p>

    <h2>Contact</h2>
    <p>This project is open source and community-driven. Questions? Open an issue on our GitHub repository.</p>

    <p class="italic-note">
      <strong>You are 100% safe here.</strong><br>
      No logs. No tracking. Just pure, fast, private UUID generation.
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