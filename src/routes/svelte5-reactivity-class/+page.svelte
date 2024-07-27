<script lang="ts">
	import { getCounter } from '$lib';

	class Task {
		id: number = 0;
		title = $state('');
		assigned = $state('');
		importance = $state('');

		constructor(data: Task) {
			Object.assign(this, data);
		}
	}

	let tasks = $state([
		new Task({ id: 1, title: 'Task A', assigned: 'Adam', importance: 'Low' }),
		new Task({ id: 2, title: 'Task B', assigned: 'Adam', importance: 'Medium' }),
		new Task({ id: 3, title: 'Task C', assigned: 'Adam', importance: 'High' }),
		new Task({ id: 4, title: 'Task D', assigned: 'Mike', importance: 'Medium' }),
		new Task({ id: 5, title: 'Task E', assigned: 'Adam', importance: 'High' }),
		new Task({ id: 6, title: 'Task F', assigned: 'Adam', importance: 'High' }),
		new Task({ id: 7, title: 'Task G', assigned: 'Steve', importance: 'Low' }),
		new Task({ id: 8, title: 'Task H', assigned: 'Adam', importance: 'High' }),
		new Task({ id: 9, title: 'Task I', assigned: 'Adam', importance: 'Low' }),
		new Task({ id: 10, title: 'Task J', assigned: 'Mark', importance: 'High' }),
		new Task({ id: 11, title: 'Task K', assigned: 'Adam', importance: 'Medium' }),
		new Task({ id: 12, title: 'Task L', assigned: 'Adam', importance: 'High' })
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
