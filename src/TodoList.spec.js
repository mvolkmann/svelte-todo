import 'regenerator-runtime/runtime';
import {tick} from 'svelte';
import {
  cleanup,
  fireEvent,
  render,
  queryByText,
  wait,
  waitForElementToBeRemoved
} from '@testing-library/svelte';

import TodoList from './TodoList.svelte';

describe('TodoList', () => {
  const PREDEFINED_TODOS = 2;

  beforeEach(cleanup);

  test('should render', () => {
    const {container, getByText} = render(TodoList);
    expect(getByText('To Do List'));
    expect(getByText('1 of 2 remaining'));
    let lis = container.querySelectorAll('li');
    expect(lis.length).toBe(PREDEFINED_TODOS);
  });

  test('should add a todo', async () => {
    const {container, getByTestId, getByText} = render(TodoList);
    let lis = container.querySelectorAll('li');
    expect(lis.length).toBe(PREDEFINED_TODOS);

    const input = getByTestId('todo-input');
    const value = 'buy milk';
    fireEvent.input(input, {target: {value}});

    fireEvent.click(getByText('Add'));

    // Wait for Add button click to be processed.
    await tick();

    lis = container.querySelectorAll('li');
    expect(lis.length).toBe(PREDEFINED_TODOS + 1);
    expect(getByText(value));
  });

  test('should archive completed', async () => {
    const {getByText} = render(TodoList);
    fireEvent.click(getByText('Archive Completed'));
    await tick();
    expect(getByText('1 of 1 remaining'));
  });

  test('should delete a todo', async () => {
    const {container, getAllByText, getByText} = render(TodoList);
    let lis = container.querySelectorAll('li');
    expect(lis.length).toBe(PREDEFINED_TODOS);
    const text = 'learn Svelte';
    expect(getByText(text));

    const deleteBtns = getAllByText('Delete');
    fireEvent.click(deleteBtns[0]);

    //await waitForElementToBeRemoved(() => queryByText(text));
    await wait(async () => {
      const lis = document.querySelectorAll('li');
      expect(lis.length).toBe(PREDEFINED_TODOS - 1);
    });
  });

  test('should toggle a todo', async () => {
    const {container, getByText} = render(TodoList);

    const checkboxes = container.querySelectorAll('input[type="checkbox"]');

    fireEvent.click(checkboxes[1]);
    await tick();
    expect(getByText('0 of 2 remaining'));

    fireEvent.click(checkboxes[0]);
    await tick();
    expect(getByText('1 of 2 remaining'));
  });
});
