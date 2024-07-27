<script lang="ts">
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

<h1>Number of tasks {numberOfTasks}</h1>

{#each tasks as t}{/each}
