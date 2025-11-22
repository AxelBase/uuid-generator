<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    { href: '/blog/posts/post1', title: 'What is a UUID v4 and Why It Matters', description: 'An introduction to UUID version 4, its randomness guarantees, and why it’s the gold standard for unique identifiers.' },
    { href: '/blog/posts/post2', title: 'How This Generator Uses Web Crypto API', description: 'Deep dive into crypto.randomUUID() and crypto.getRandomValues() – the secure, native way we generate true v4 UUIDs.' },
    { href: '/blog/posts/post3', title: 'Privacy-First Design: No Tracking, No Analytics', description: 'Why this tool runs 100% client-side with zero external requests (except Bootstrap CDN) and how that protects you.' },
    { href: '/blog/posts/post4', title: 'Bulk Generate 10,000 UUIDs in Under 500ms', description: 'Performance benchmarks and how native Web Crypto makes mass generation instant and reliable.' },
    { href: '/blog/posts/post5', title: 'All Output Formats Explained', description: 'Lowercase, UPPERCASE, no hyphens, braced, URN – when to use each format and real-world examples.' },
    { href: '/blog/posts/post6', title: 'Deploy Your Own Version in 60 Seconds', description: 'Fork → Enable GitHub Pages → Done. How to host your own private instance with zero maintenance.' },
    { href: '/blog/posts/post7', title: 'UUID v4 vs v7: Should You Switch?', description: 'A comparison of v4 (random) vs v7 (time-ordered) and why v4 remains the safest choice for most use cases.' }
  ];
</script>

<svelte:head>
  <title>Blog • AxelBase UUID v4 Generator</title>
  <meta name="description" content="Learn about UUID v4, privacy-first tools, performance, security, and best practices from the team behind the fastest client-side UUID generator." />
</svelte:head>

<div class="container py-5 blog-index">
  <header class="text-center mb-5 pb-4 border-bottom">
    <h1 class="display-5 fw-bold">
      <i class="bi bi-journal-text text-primary"></i> Blog
    </h1>
    <p class="lead text-muted col-lg-8 mx-auto">
      Insights, deep dives, and updates about UUID v4, privacy-first web tools, and the future of client-side utilities.
    </p>
  </header>

  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    {#each posts as post}
      <div class="col">
        <a href="{base}{post.href}" class="text-decoration-none h-100">
          <div class="card h-100 shadow-sm border-0 hover-lift transition">
            <div class="card-body d-flex flex-column">
              <h3 class="card-title h5 fw-bold text-primary mb-3">
                {post.title}
              </h3>
              <p class="card-text text-muted flex-grow-1 small">
                {post.description}
              </p>
              <div class="mt-3">
                <span class="text-primary fw-semibold small">
                  Read more <i class="bi bi-arrow-right"></i>
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>
    {/each}
  </div>
</div>

<style>
  .hover-lift {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .hover-lift:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
  }
  .transition { transition: all 0.3s ease; }
</style>