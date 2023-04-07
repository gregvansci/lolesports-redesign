<script lang="ts">
	import "../app.css";
	import Header from "./Header.svelte";
	import { showHeader } from "../store";
	import { page } from '$app/stores';

	let showHeaderValue = true;
	showHeader.subscribe((value) => {
		showHeaderValue = value;
	});

	let pageValue;
	let specialHeader = false;
	page.subscribe(value => {
		pageValue = value.route.id;
		pageValue == "/msi" ? specialHeader = true : specialHeader = false;
	})

</script>

<div class="
	w-full h-screen relative 
	transition ease-in-out duration-300
	{specialHeader 
	? "selection:bg-msi-text selection:text-white bg-msi-bg text-msi-text" 
	: "selection:bg-highlight selection:text-blue-50 bg-white dark:bg-steel-900 text-blue-gray-500 dark:text-blue-50" }"
>
	{#if showHeaderValue == true}
		<Header {specialHeader} />
	{/if}
		<main class="h-screen flex w-full relative">
			<slot />
		</main>
</div>
