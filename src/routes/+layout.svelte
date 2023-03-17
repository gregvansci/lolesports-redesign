<script>
	import "../app.css";
	import Header from "../routes/Header.svelte";
  </script>

<div class="w-full h-full">
	<Header/>

	<main>
		<slot />
	</main>

	<footer>
	</footer>
</div>