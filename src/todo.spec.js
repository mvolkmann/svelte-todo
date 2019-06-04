import {cleanup, fireEvent, render, tick, wait} from '@testing-library/svelte';

import Todo from './Todo.svelte';

describe('Todo', () => {
  beforeEach(cleanup);

  test('should render', () => {
    const text = 'buy milk';
    const todo = {text};
    const {getByText} = render(Todo, {props: {todo}});
    expect(getByText(text));
  });

  // test('should fire delete event', async () => {
  //   const text = 'buy milk';
  //   const todo = {text};
  //   const result = render(Todo, {props: {todo}});
  //   const {container, getByText} = result;

  //   let fired = false;
  //   container.addEventListener('delete', () => {
  //     console.log('Todo.spec.js got delete event');
  //     fired = true;
  //   });
  //   fireEvent.click(getByText('Delete'));
  //   await tick();
  //   expect(fired).toBe(true);
  //   // await wait(() => {
  //   //   expect(fired).toBe(true);
  //   // }, 500);
  // });

  test('should fire todoToggle event', async () => {
    const text = 'buy milk';
    const todo = {text};
    const {getByText} = render(Todo, {props: {todo}});

    //TODO: Find checkbox, not Delete button.
    //fireEvent.click(getByText('Delete'));
    //TODO: Verify that a "todoToggle" event was fired!
  });
});
