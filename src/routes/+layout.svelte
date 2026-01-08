<script lang="ts">
  import '../app.css';
  import { base } from '$app/paths';
  import { slide } from 'svelte/transition';

  // --- Buy Me A Coffee Logic ---
  const paypalUsername = 'AxelLab427';
  const bmacUsername = 'axelbase';
  const donationAmounts = [3, 5, 10]; // Match File 1: $3, $5, $10
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
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="coffee-icon">
            <path d="M2,21V19H20V21H2M20,8V5H4V8H20M20,10H4V13C4,14.38 4.5,15.63 5.31,16.58L11.64,19H12.36L18.69,16.58C19.5,15.63 20,14.38 20,13V10M16,2H8V4H16V2Z" />
          </svg>
          <span class="d-none d-sm-inline">Buy me a coffee</span>
        </button>

        {#if isDropdownOpen}
          <div class="dropdown-menu-custom glass bmac-dropdown" transition:slide={{ duration: 300 }}>
            <div class="d-flex flex-column gap-1">
              <a
                href="https://buymeacoffee.com/{bmacUsername}?amount=300" 
                target="_blank"
                rel="noopener noreferrer"
                on:click={closeDropdown}
                class="donation-link"
              >
                <span class="amount">$3</span> One Coffee
              </a>
              <a
                href="https://buymeacoffee.com/{bmacUsername}?amount=500"
                target="_blank"
                rel="noopener noreferrer"
                on:click={closeDropdown}
                class="donation-link"
              >
                <span class="amount">$5</span> Two Coffees
              </a>
              <a
                href="https://buymeacoffee.com/{bmacUsername}?amount=1000"
                target="_blank"
                rel="noopener noreferrer"
                on:click={closeDropdown}
                class="donation-link"
              >
                <span class="amount">$10</span> Three Coffees
              </a>
              <a
                href="https://buymeacoffee.com/{bmacUsername}"
                target="_blank"
                rel="noopener noreferrer"
                on:click={closeDropdown}
                class="donation-link custom-amount"
              >
                Custom Amount
              </a>
              <a
                href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee"
                target="_blank"
                rel="noopener noreferrer"
                on:click={closeDropdown}
                class="donation-link custom-amount"
              >
                Buy via Crypto (Bitcoin)
              </a>
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

<footer class="relative glass border-top py-2" style="z-index: 1030;">
  <div class="container d-flex flex-column flex-sm-row justify-content-between align-items-center small text-muted">
    <span>&copy; {new Date().getFullYear()} AxelBase UUID v4 Generator</span>
    <div class="d-flex gap-3 mt-1 mt-sm-0">
      <a href="{base}/privacy" class="footer-link">Privacy</a>
      <a href="{base}/terms" class="footer-link">Terms</a>
    </div>
  </div>
</footer>

<style>
  /* Existing File 2 styles preserved */
  .navbar-brand-logo { 
    height: 32px; 
    width: auto; 
    transition: transform 0.3s ease; 
  }
  .logo-group:hover .navbar-brand-logo { 
    transform: rotate(10deg) scale(1.1); 
  }
  .nav-link-custom { 
    position: relative; 
    padding: 0.5rem 1rem; 
    color: var(--color-text-muted); 
    font-weight: 600; 
    transition: color 0.3s; 
  }
  .nav-link-custom::after { 
    content: ''; 
    position: absolute; 
    width: 0; 
    height: 2px; 
    bottom: 5px; 
    left: 50%; 
    background-color: var(--color-accent); 
    transition: all 0.3s ease-in-out; 
    transform: translateX(-50%); 
    border-radius: 2px; 
  }
  .nav-link-custom:hover { 
    color: var(--color-accent); 
  }
  .nav-link-custom:hover::after { 
    width: 60%; 
  }

  /* File 1 Button Styles - Coffee Theme (Enhanced for Glassmorphism) */
  .btn-coffee { 
    background: linear-gradient(135deg, #ffdd00, #ffd700); 
    color: #3d3d3d; 
    font-weight: 700; 
    border: none; 
    padding: 0.5rem 1.3rem; 
    box-shadow: 0 6px 16px rgba(255,221,0,0.3); 
    font-size: 0.92rem; 
    position: relative;
    overflow: hidden;
  }
  .btn-coffee::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
    transition: left 0.5s;
  }
  .btn-coffee:hover::before {
    left: 100%;
  }
  .btn-coffee:hover { 
    background: linear-gradient(135deg, #ffe54c, #ffed4a); 
    transform: translateY(-2px); 
    box-shadow: 0 8px 20px rgba(255,221,0,0.4) !important; 
  }
  .coffee-icon { 
    width: 20px; 
    height: 20px; 
    animation: steam 2s infinite ease-out; 
  }

  /* File 1 Dropdown Styles - Adapted to Glassmorphism */
  .dropdown-menu-custom { 
    position: absolute; 
    top: 110%; 
    left: 0; 
    min-width: 240px; 
    padding: 0.75rem; 
    border-radius: 20px; 
    z-index: 1050; 
    display: flex; 
    flex-direction: column; 
    margin: 0.25rem 0 0 0;
  }
  .bmac-dropdown {
    box-shadow: 0 16px 40px rgba(0,0,0,0.2);
    border: 1px solid var(--glass-border);
    backdrop-filter: blur(20px);
  }
  .donation-link { 
    display: flex !important;
    align-items: center;
    justify-content: space-between;
    padding: 12px 18px !important; 
    text-decoration: none;
    border-radius: 14px; 
    font-size: 0.98rem;
    font-weight: 600;
    color: var(--color-text-main);
    background: rgba(255,255,255,0.3);
    border: 1px solid transparent;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }
  .donation-link::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.4s;
  }
  .donation-link:hover::before {
    left: 100%;
  }
  .donation-link:hover { 
    background: rgba(255,255,255,0.7) !important; 
    color: var(--color-accent) !important;
    border-color: var(--color-accent);
    transform: translateX(6px) scale(1.02);
    box-shadow: 0 8px 25px rgba(3,169,244,0.2);
  }
  .amount {
    font-weight: 800 !important;
    font-size: 1.12rem !important;
    background: linear-gradient(135deg, var(--color-accent), var(--color-accent-hover));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .custom-amount {
    border-top: 1px solid var(--glass-border) !important;
    margin-top: 4px;
    padding-top: 14px !important;
    justify-content: center !important;
    font-weight: 700 !important;
    color: var(--color-accent) !important;
  }
  .custom-amount:hover {
    color: var(--color-accent-hover) !important;
    background: rgba(3,169,244,0.1) !important;
  }

  /* Footer */
  .footer-link { 
    color: var(--color-text-muted); 
    transition: all 0.25s ease; 
  }
  .footer-link:hover { 
    color: var(--color-accent) !important; 
    text-shadow: 0 0 8px rgba(3,169,244,0.3);
    text-decoration: underline;
  }

  /* Animations */
  @keyframes steam { 
    0% { opacity: 0.8; transform: translateY(0) scale(1); } 
    50% { opacity: 0.4; transform: translateY(-3px) scale(1.05); }
    100% { opacity: 0; transform: translateY(-6px) scale(1.1); } 
  }

</style>