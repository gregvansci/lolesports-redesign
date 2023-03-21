<script>
	import "../app.css";
	import Header from "./Header.svelte";
	
	// get the current page
	import { page } from "$app/stores";

	let screenHeight = false;
	if ($page.url.pathname === "/" || $page.url.pathname === "/live") {
		screenHeight = true;
	}
  </script>

<div class="
	w-full h-full min-h-screen {screenHeight ? 'h-screen' : ''} relative
	bg-white dark:bg-gray-900
	transition ease-in-out duration-300"
>
	<Header/>

	<main class="h-full">
		<slot />
	</main>
</div>