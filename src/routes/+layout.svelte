<script>
	import "../app.css";
	import Header from "../routes/Header.svelte";
  </script>

<div class="w-full h-full">
	<Header />

	<main class="border-t-2">
		<slot />
	</main>

	<footer>
	</footer>
</div>