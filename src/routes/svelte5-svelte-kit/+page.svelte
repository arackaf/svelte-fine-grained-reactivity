<script lang="ts">
	import { getCounter } from '$lib';

	type Task = {
		id: number;
		title: string;
		assigned: string;
		importance: string;
	};

	let { data } = $props();
	let { tasks } = $derived(data);
</script>

Raw arrays sent from a load are non-reactive by default
<h1 class="mb-5">Number of tasks {tasks.length}</h1>

<div class="flex flex-col gap-3">
	{#each tasks as t}
		<div class="flex flex-row items-center gap-9">
			<div class="flex flex-row items-center gap-2">
				<span>{t.id + getCounter()}</span>
				<button onclick={() => (t.id += 10)} class="border p-2">Update id</button>
			</div>
			<div class="flex flex-row items-center gap-2">
				<span>{t.title + getCounter()}</span>
				<button onclick={() => (t.title += 'X')} class="border p-2">Update title</button>
			</div>
			<div class="flex flex-row items-center gap-2">
				<span>{t.assigned + getCounter()}</span>
				<button onclick={() => (t.assigned += 'X')} class="border p-2">Update assigned</button>
			</div>
			<div class="flex flex-row items-center gap-2">
				<span>{t.importance + getCounter()}</span>
				<button onclick={() => (t.importance += 'X')} class="border p-2">Update importance</button>
			</div>
		</div>
	{/each}
</div>
