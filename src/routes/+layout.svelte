<script>
  import Header from './Header.svelte'
  import Home from './+page.svelte'
  import About from './about/+page.svelte'
  import Sverdle from './sverdle/+page.svelte'
  import { page } from "$app/stores";
  import './styles.css'
</script>

<div class="app">
  <Header />

  <main>
    {#if $page.url.hash === "/"}
    {:else if $page.url.hash === "#/"}
    <Home/>
    {:else if $page.url.hash === "#/about"}
    <About/>
    {:else if $page.url.hash === "#/sverdle"}
    <Sverdle/>
    {/if}
  </main>

  <footer>
    <p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
  </footer>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
    box-sizing: border-box;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
  }

  footer a {
    font-weight: bold;
  }

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }
</style>
