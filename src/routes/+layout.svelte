<script>
	import '../app.css';
</script>

<div class="flex flex-col gap-4 p-4">
	<div class="flex flex-row gap-3">
		<a href="/svelte4-reactivity">Svelte 4 Reactivity</a>
		<a href="/svelte5-reactivity">Svelte 5 Reactivity</a>
		<a href="/svelte5-reactivity-class">Svelte 5 Reactivity + class</a>
		<a href="/svelte5-reactivity-shallow">Svelte 5 Shallow Reactivity</a>
		<a href="/svelte5-svelte-kit">Svelte 5 with SvelteKit loader</a>
		<a href="/svelte5-svelte-kit-reactive">Svelte 5 with SvelteKit loader - reactive</a>
	</div>
	<slot></slot>
</div>
