<script lang="ts">
	import { getCounter } from '$lib';

	var tasks = [
		{ id: 1, title: 'Task 1', assigned: 'Adam', importance: 'Low' },
		{ id: 2, title: 'Task 2', assigned: 'Adam', importance: 'Medium' },
		{ id: 3, title: 'Task 3', assigned: 'Adam', importance: 'High' },
		{ id: 4, title: 'Task 4', assigned: 'Mike', importance: 'Medium' },
		{ id: 5, title: 'Task 5', assigned: 'Adam', importance: 'High' },
		{ id: 6, title: 'Task 6', assigned: 'Adam', importance: 'High' },
		{ id: 7, title: 'Task 7', assigned: 'Steve', importance: 'Low' },
		{ id: 8, title: 'Task 8', assigned: 'Adam', importance: 'High' },
		{ id: 9, title: 'Task 9', assigned: 'Adam', importance: 'Low' },
		{ id: 10, title: 'Task 10', assigned: 'Mark', importance: 'High' },
		{ id: 11, title: 'Task 11', assigned: 'Adam', importance: 'Medium' },
		{ id: 12, title: 'Task 12', assigned: 'Adam', importance: 'High' }
	];

	$: numberOfTasks = tasks.length;
</script>

<h1 class="mb-5">Number of tasks {numberOfTasks}</h1>

<div class="flex flex-col gap-3">
	{#each tasks as t}
		<div class="flex flex-row items-center gap-9">
			<span>{t.id + getCounter()}</span>
			<div class="flex flex-row items-center gap-2">
				<span>{t.title + getCounter()}</span>
				<button on:click={() => (t.title += 'X')} class="border p-2">Update title</button>
			</div>
			<div class="flex flex-row items-center gap-2">
				<span>{t.assigned + getCounter()}</span>
				<button on:click={() => (t.assigned += 'X')} class="border p-2">Update assigned</button>
			</div>
			<div class="flex flex-row items-center gap-2">
				<span>{t.importance + getCounter()}</span>
				<button on:click={() => (t.importance += 'X')} class="border p-2">Update importance</button>
			</div>
		</div>
	{/each}
</div>
