<script lang="ts">
	import { getCounter } from '$lib';

	type Task = {
		id: number;
		title: string;
		assigned: string;
		importance: string;
	};

	class NonReactiveObjectGenerator {
		constructor(data: unknown) {
			Object.assign(this, data);
		}
	}

	function shallowObservable<T>(data: T[]): T[] {
		let result = $state(data.map(t => new NonReactiveObjectGenerator(t) as T));
		return result;
	}

	function cloneNonReactive<T>(data: T): T {
		return new NonReactiveObjectGenerator(data) as T;
	}

	const getTasks = () => [
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
	];

	let nextId = $state(13);
	let tasks = shallowObservable(getTasks());
	let numberOfTasks = $derived(tasks.length);

	function clear() {
		tasks.length = 0;
	}

	function reFill() {
		tasks.push(...getTasks());
	}
</script>

<h1 class="mb-5">Number of tasks {numberOfTasks}</h1>

<div class="flex flex-col gap-3">
	<button onclick={clear} class="self-start border p-3">Clear all </button>
	<button onclick={reFill} class="self-start border p-3">Re-fill </button>
	<button
		onclick={() =>
			tasks.push(
				new NonReactiveObjectGenerator({
					id: nextId++,
					title: 'New task',
					assigned: 'Adam',
					importance: 'Low'
				}) as Task
			)}
		class="self-start border p-3"
	>
		Add new task
	</button>
	{#each tasks as t, idx}
		<div class="flex flex-row items-center gap-9">
			<button onclick={() => tasks.splice(idx, 1)} class="border border-red-500 p-3">
				Delete
			</button>
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
				<button
					onclick={() => {
						const taskClone = cloneNonReactive(t);
						taskClone.importance += 'X';
						tasks[idx] = cloneNonReactive(taskClone);
					}}
					class="border p-2">Update importance</button
				>
			</div>
		</div>
	{/each}
</div>
