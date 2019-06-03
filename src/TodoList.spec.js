import 'regenerator-runtime/runtime';
import {tick} from 'svelte';
import {cleanup, fireEvent, render, wait} from '@testing-library/svelte';

import TodoList from './TodoList.svelte';

describe('TodoList', () => {
  beforeEach(cleanup);

  test('should render', () => {
    const {getByText} = render(TodoList);
    expect(getByText('To Do List'));
    expect(getByText('1 of 2 remaining'));
  });

  test('should add a todo', async () => {
    const {container, getByTestId, getByText} = render(TodoList);
    let lis = container.querySelectorAll('li');
    expect(lis.length).toBe(2); // predefined todos

    const input = getByTestId('todo-input');
    console.log('TodoList.spec.js x: input =', input);
    const text = 'buy milk';
    //input.value;
    //fireEvent.change(input);
    fireEvent.input(input, {target: {value: text}});
    console.log('TodoList.spec.js x: input.value =', input.value);
    //TODO: The input value is being changed correctly, but the Svelte bind:value is not updating the todoText variable!
    //TODO: A new li is being added, but it doesn't contain this text!

    const addBtn = getByText('Add');
    expect(addBtn);
    fireEvent.click(addBtn);

    // Wait for Add button click to be processed.
    await tick();

    //expect(getByText(text));
    lis = container.querySelectorAll('li');
    expect(lis.length).toBe(3);

    /*
    await wait(() => {
      expect(getByText(text)).toBeInTheDocument();
    });
    */
  });
});
