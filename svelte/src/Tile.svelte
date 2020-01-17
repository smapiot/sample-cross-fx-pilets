<script>
  export let columns;
  export let rows;
	export let count = 0;
</script>

<style>
  h1 {
    text-align: center;
  }
</style>

<div class="tile">
  <h3>Svelte: {count}</h3>
  <p>
    {rows} rows and {columns} columns
    <svelte-extension name="smiley"></svelte-extension>
  </p>
  <button on:click='{() => count += 1}'>Increment</button>
  <button on:click='{() => count -= 1}'>Decrement</button>
</div>
