<script>
  import { spring } from 'svelte/motion'

  let count = 0

  const displayed_count = spring()
  $: displayed_count.set(count)
  $: offset = modulo($displayed_count, 1)

  /**
   * @param {number} n
   * @param {number} m
   */
  function modulo(n, m) {
    // handle negative numbers
    return ((n % m) + m) % m
  }
</script>

<svelte:head>
  <title>About</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
  <h1>About this app</h1>

  <p>
    This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the following into your command line and following the prompts:
  </p>

  <pre>npm create svelte@latest</pre>

  <p>The page you're looking at is purely static HTML, with no client-side interactivity needed. Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening the devtools network panel and reloading.</p>

  <p>
    The <a href="/sverdle">Sverdle</a> page illustrates SvelteKit's data loading and form handling. Try using it with JavaScript disabled!
  </p>
</div>
<div class="counter">
  <button on:click={() => (count -= 1)} aria-label="Decrease the counter by one">
    <svg aria-hidden="true" viewBox="0 0 1 1">
      <path d="M0,0.5 L1,0.5" />
    </svg>
  </button>

  <div class="counter-viewport">
    <div class="counter-digits" style="transform: translate(0, {100 * offset}%)">
      <strong class="hidden" aria-hidden="true">{Math.floor($displayed_count + 1)}</strong>
      <strong>{Math.floor($displayed_count)}</strong>
    </div>
  </div>

  <button on:click={() => (count += 1)} aria-label="Increase the counter by one">
    <svg aria-hidden="true" viewBox="0 0 1 1">
      <path d="M0,0.5 L1,0.5 M0.5,0 L0.5,1" />
    </svg>
  </button>
</div>
