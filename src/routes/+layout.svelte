<script lang="ts">
	import "../app.css";
	import Header from "./Header.svelte";
	import { showHeader } from "../store";

	let showHeaderValue = true;
	showHeader.subscribe((value) => {
		showHeaderValue = value;
	});

  </script>

<div class="
	w-full h-screen relative
	bg-white dark:bg-gray-900
	text-blue-gray-500 dark:text-blue-50
	transition ease-in-out duration-300"
>
  	{#if showHeaderValue == true}
  		<Header />
  	{/if}
	<main class="h-screen flex w-full relative">
		<slot />
	</main>
</div>

