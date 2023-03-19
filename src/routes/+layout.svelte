<script>
	import "../app.css";
	import Header from "../routes/Header.svelte";
  </script>

<div class="
	w-full h-full min-h-screen 
	bg-white dark:bg-gray-900
	transition ease-in-out duration-300"
>
	<Header/>

	<main>
		<slot />
	</main>
</div>