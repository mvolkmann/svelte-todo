<script>
  import {createEventDispatcher} from 'svelte';
  const dispatch = createEventDispatcher();
  export let todo;
</script>

<style>
  .done-true {
    color: gray;
    text-decoration: line-through;
  }
</style>

<li>
  <input type="checkbox" checked={todo.done} on:change={() => dispatch('toggleDone')} />
  <span class={'done-' + todo.done}>{todo.text}</span>
  <button on:click={() => dispatch('delete')}>Delete</button>
</li>
