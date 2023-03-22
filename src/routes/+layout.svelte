<script>
	import "../app.css";
	import Header from "./Header.svelte";
	
	// get the current page
	import { page } from "$app/stores";

	let screenHeight = true;
	// $page.url.pathname === "/" || $page.url.pathname === "/live"
	// 	? (screenHeight = true)
	// 	: (screenHeight = false);
  </script>

<div class="
	w-full h-screen relative
	bg-white dark:bg-gray-900
	text-blue-gray-500 dark:text-blue-50
	transition ease-in-out duration-300"
>
	<Header/>

	<main class="h-screen flex w-full relative
	">
		<slot />
	</main>
</div>