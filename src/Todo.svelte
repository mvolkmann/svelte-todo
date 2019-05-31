<script>
  export let onDeleteTodo;
  export let onToggleDone;
  export let todo;
</script>

<style>
.done-true {
  color: gray;
  text-decoration: line-through;
}
</style>

<li>
  <input type="checkbox" checked={todo.done} on:change={onToggleDone} />
  <span class={'done-' + todo.done}>{todo.text}</span>
  <button on:click={onDeleteTodo}>Delete</button>
</li>
