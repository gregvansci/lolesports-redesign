<script>
	import "../app.css";
	import Header from "../routes/Header.svelte";
  </script>

<div class="w-full h-full">
	<Header />

	<main class="border-t-[1px] border-header-tertiary-light">
		<slot />
	</main>

	<footer>
	</footer>
</div>