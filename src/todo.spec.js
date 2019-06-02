// NOT WORKING YET!
import {render, cleanup} from '@testing-library/svelte';
import Todo from './Todo.svelte';

beforeEach(cleanup);

describe('Todo', () => {
  test('should render', () => {
    const text = 'buy milk';
    const todo = {text};
    const {getByText} = render(Todo, {props: {todo}});
    expect(getByText(text));
  });

  test('should dispatch delete', async () => {
    const text = 'buy milk';
    const todo = {text};
    const {getByText} = render(Todo, {props: {todo}});

    fireEvent.click(getByText('Delete'));
  });
});
