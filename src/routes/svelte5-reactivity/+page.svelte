<script lang="ts">
	import { getCounter } from '$lib';

	let tasks = $state([
		{ id: 1, title: 'Task A', assigned: 'Adam', importance: 'Low' },
		{ id: 2, title: 'Task B', assigned: 'Adam', importance: 'Medium' },
		{ id: 3, title: 'Task C', assigned: 'Adam', importance: 'High' },
		{ id: 4, title: 'Task D', assigned: 'Mike', importance: 'Medium' },
		{ id: 5, title: 'Task E', assigned: 'Adam', importance: 'High' },
		{ id: 6, title: 'Task F', assigned: 'Adam', importance: 'High' },
		{ id: 7, title: 'Task G', assigned: 'Steve', importance: 'Low' },
		{ id: 8, title: 'Task H', assigned: 'Adam', importance: 'High' },
		{ id: 9, title: 'Task I', assigned: 'Adam', importance: 'Low' },
		{ id: 10, title: 'Task J', assigned: 'Mark', importance: 'High' },
		{ id: 11, title: 'Task K', assigned: 'Adam', importance: 'Medium' },
		{ id: 12, title: 'Task L', assigned: 'Adam', importance: 'High' }
	]);

	let numberOfTasks = $derived(tasks.length);
</script>

<h1 class="mb-5">Number of tasks {numberOfTasks}</h1>

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
