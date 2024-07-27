<script lang="ts">
	import { getCounter } from '$lib';

	type Task = {
		id: number;
		title: string;
		assigned: string;
		importance: string;
	};

	class ShallowHelper {
		constructor(data: unknown) {
			Object.assign(this, data);
		}
	}

	type ReactivePacket<T> = {
		get value(): T;
		set value(newValue: T[]);
	};

	function clone<T>(data: T): T {
		return new ShallowHelper(data) as T;
	}

	function shallowObservable<T>(data: T[]): ReactivePacket<T[]> {
		let result = $state(data.map(t => new ShallowHelper(t) as T));
		return {
			get value() {
				return result;
			},
			set value(newData: T[]) {
				result = newData;
			}
		};
	}

	const tasksData: Task[] = [
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

	let tasks = shallowObservable(tasksData);
	let numberOfTasks = $derived(tasks.value.length);
</script>

<h1 class="mb-5">Number of tasks {numberOfTasks}</h1>

<div class="flex flex-col gap-3">
	{#each tasks.value as t, idx}
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
				<button
					onclick={() => {
						t.importance += 'X';
						tasks.value[idx] = clone(t);
					}}
					class="border p-2">Update importance</button
				>
			</div>
		</div>
	{/each}
</div>
