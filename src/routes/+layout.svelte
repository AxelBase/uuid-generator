<script lang="ts">
  import '../app.css';
  import { base } from '$app/paths';
  import { slide } from 'svelte/transition';

  // --- Buy Me A Coffee Logic ---
  const paypalUsername = 'AxelLab427';
  const donationAmounts = [1, 3, 5, 10];
  let isDropdownOpen = false;

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }

  function closeDropdown() {
    isDropdownOpen = false;
  }

  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    };
  }
</script>

<header class="fixed-top p-3 w-100" style="pointer-events: none; z-index: 1040;">
  <nav class="container glass rounded-pill px-4 py-2 d-flex justify-content-between align-items-center shadow-sm"
       style="pointer-events: auto; max-width: 1200px;">
    
    <div class="d-flex align-items-center gap-3">
      <a href="{base}/" class="d-flex align-items-center gap-2 logo-group text-decoration-none">
        <div class="logo-wrapper">
          <img src="{base}/AxelLab-Logo.ico" alt="AxelBase Logo" class="navbar-brand-logo" />
        </div>
        <span class="fw-bold fs-5 tracking-tight" style="color: var(--color-text-main);">AxelBase</span>
      </a>

      <div class="position-relative ms-2 ms-md-3" use:clickOutside on:click_outside={closeDropdown}>
        <button
          class="btn btn-coffee d-flex align-items-center gap-2"
          on:click={toggleDropdown}
          aria-label="Support this project – Buy me a coffee"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="coffee-icon" aria-hidden="true">
            <path d="M12.35,22.2L12,22A10,10,0,0,1,2,12V10A2,2,0,0,1,4,8H7.2A5.13,5.13,0,0,1,12,3A5.13,5.13,0,0,1,16.8,8H20A2,2,0,0,1,22,10V12A10,10,0,0,1,12.35,22.2M4,10V12A8,8,0,0,0,12,20A8,8,0,0,0,20,12V10H16.8A5.11,5.11,0,0,1,12.5,5.12A5.15,5.15,0,0,1,7.2,10H4Z"/>
          </svg>
          <span class="d-none d-sm-inline">Buy me a coffee</span>
        </button>

        {#if isDropdownOpen}
          <div class="dropdown-menu-custom glass" transition:slide={{ duration: 300 }}>
            <div class="d-flex flex-column gap-1">
              {#each donationAmounts as amount}
                <a
                  href="https://paypal.me/{paypalUsername}/{amount}"
                  target="_blank"
                  rel="noopener noreferrer"
                  on:click={closeDropdown}
                  class="donation-link"
                >
                  ${amount}
                </a>
              {/each}
            </div>
          </div>
        {/if}
      </div>
    </div>

    <ul class="nav d-none d-lg-flex align-items-center gap-1 m-0">
      <li class="nav-item"><a class="nav-link-custom" href="{base}/">Home</a></li>
      <li class="nav-item"><a class="nav-link-custom" href="{base}/#about">About</a></li>
      <li class="nav-item"><a class="nav-link-custom" href="{base}/#how-to">How to use</a></li>
      <li class="nav-item"><a class="nav-link-custom" href="{base}/#faq">FAQ</a></li>
      <li class="nav-item ms-2">
        <a class="btn btn-primary rounded-pill px-4 fw-semibold" href="{base}/blog">Blog</a>
      </li>
    </ul>

    <!-- Fixed: Added proper aria-label -->
    <button
      class="navbar-toggler d-lg-none border-0 bg-transparent"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#mobileNav"
      aria-label="Toggle navigation menu"
      aria-expanded="false"
    >
      <i class="bi bi-grid-fill fs-2 text-primary" aria-hidden="true"></i>
    </button>
  </nav>
</header>

<slot />

<footer class="releative glass border-top py-2" style="z-index: 1030;">
  <div class="container d-flex flex-column flex-sm-row justify-content-between align-items-center small text-muted">
    <span>&copy; {new Date().getFullYear()} AxelBase UUID v4 Generator</span>
    <div class="d-flex gap-3 mt-1 mt-sm-0">
      <a href="{base}/privacy" class="footer-link">Privacy</a>
      <a href="{base}/terms" class="footer-link">Terms</a>
    </div>
  </div>
</footer>

<style>
  /* ... your existing beautiful styles ... */
  .navbar-brand-logo { height: 32px; width: auto; transition: transform 0.3s ease; }
  .logo-group:hover .navbar-brand-logo { transform: rotate(10deg) scale(1.1); }
  .nav-link-custom { position: relative; padding: 0.5rem 1rem; color: var(--color-text-muted); font-weight: 600; transition: color 0.3s; }
  .nav-link-custom::after { content: ''; position: absolute; width: 0; height: 2px; bottom: 5px; left: 50%; background-color: var(--color-accent); transition: all 0.3s ease-in-out; transform: translateX(-50%); border-radius: 2px; }
  .nav-link-custom:hover { color: var(--color-accent); }
  .nav-link-custom:hover::after { width: 60%; }
  .btn-coffee { background: #ffdd00; color: #3d3d3d; font-weight: 700; border: none; padding: 0.4rem 1.2rem; box-shadow: 0 4px 10px rgba(255,221,0,0.3); font-size: 0.9rem; }
  .btn-coffee:hover { background: #ffe54c; transform: translateY(-2px); box-shadow: 0 6px 15px rgba(255,221,0,0.4) !important; }
  .coffee-icon { width: 18px; height: 18px; animation: steam 2s infinite ease-out; }
  .dropdown-menu-custom { position: absolute; top: 110%; left: 0; min-width: 120px; padding: 0.5rem; border-radius: 16px; z-index: 1050; display: flex; flex-direction: column; }
  .donation-link { display: block; padding: 8px; text-align: center; border-radius: 10px; font-weight: bold; color: var(--color-accent); background: rgba(255,255,255,0.5); transition: background 0.2s, transform 0.2s; }
  .donation-link:hover { background: #fff; color: var(--color-accent-hover); transform: scale(1.05); }
  .footer-link { color: var(--color-text-muted); transition: color 0.2s; }
  .footer-link:hover { color: var(--color-accent); text-decoration: underline; }
  @keyframes steam { 0% { opacity: 0.8; transform: translateY(0); } 100% { opacity: 0; transform: translateY(-5px); } }
</style>