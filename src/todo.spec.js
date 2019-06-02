// NOT WORKING YET!
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import {cleanup, fireEvent, render, wait} from '@testing-library/svelte';

import Todo from './Todo.svelte';

describe('Todo', () => {
  beforeEach(cleanup);

  test('should render', () => {
    const text = 'buy milk';
    const todo = {text};
    const {getByText} = render(Todo, {props: {todo}});
    expect(getByText(text));
  });

  test('should fire delete event', async () => {
    const text = 'buy milk';
    const todo = {text};
    const result = render(Todo, {props: {todo}});
    //console.log('Todo.spec.js x: result =', result);
    const {container, getByText} = result;
    //console.log('Todo.spec.js x: container =', container);
    //console.log('Todo.spec.js x: container.children =', container.children);

    let fired = false;
    container.addEventListener('delete', () => {
      console.log('Todo.spec.js got delete event');
      fired = true;
    });
    fireEvent.click(getByText('Delete'));
    //TODO: Verify that a "delete" event was fired!
    // await wait(() => {
    //   expect(fired).toBe(true);
    // }, 500);
  });

  test('should fire todoToggle event', async () => {
    const text = 'buy milk';
    const todo = {text};
    const {getByText} = render(Todo, {props: {todo}});

    //TODO: Find checkbox, not Delete button.
    //fireEvent.click(getByText('Delete'));
    //TODO: Verify that a "todoToggle" event was fired!
  });

  /*
  it('is empty by default', () => {
    const target = document.createElement('div');
    const todo = new Todo({target});

    setTimeout(() => {
      const {firstElementChild: element} = target;

      expect(element.textContent).toBe('');
      expect(element.getAttribute('data-length')).toBe(0);

      expect(sample.test).toBe('');
      expect(sample.length).toBe(0);

      sample.text = 'A foo walks into a bar';

      setTimeout(() => {
        expect(element.textContent).toBe('A foo walks into a bar');
        expect(element.getAttribute('data-length')).toBe(22);
      });
    }, 10);
  });
  */

  /*
  it.each`
    text         | length
    ${'foo'}     | ${3}
    ${'bar-baz'} | ${7}
    ${'sample'}  | ${5}
  `('$text renders and has length $length', ({text, length}) => {
    //  create a new element
    const target = document.createElement('div');
    //  render the component in the new element
    const sample = new Sample({target, data: {text}});

    setTimeout(() => {
      const {firstElementChild: element} = target;

      //  test rendered element
      expect(element.textContent).toBe(text);
      expect(element.getAttribute('data-length')).toBe(length);

      //  test component
      expect(sample.test).toBe(text);
      expect(sample.length).toBe(length);
    }, 10);
  });
  */
});
