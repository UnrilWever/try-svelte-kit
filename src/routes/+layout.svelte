<script>
  // Loading first polyfills that are shared between for legacy&modern browsers.
  import 'abortcontroller-polyfill';
  import 'intersection-observer';

  import Header from './Header.svelte'
  import './styles.css'
  import {beforeNavigate,goto} from '$app/navigation';
  import { building } from '$app/environment';

  // if(building){
    // beforeNavigate((navigation)=>{
    //   const target = navigation.to.route.id
    //   if(!target.endsWith('html')){
    //     const new
    //   }
      
    // })
  // }
</script>

<div class="app">
  <Header />

  <main>
    <slot />
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
