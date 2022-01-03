import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ToDoApp from '../Component/toDoApp';

describe('<ToDoApp />', () => {
  let getByTestId;

  describe('clicking the send button', () => {
    beforeEach(async () => {
      ({ getByTestId } = render(<ToDoApp />));

      await userEvent.type(
        getByTestId('messageText'),
        'New message',
      );

      userEvent.click(getByTestId('sendButton'));

    });

    it('clears the text field', () => {
        expect(getByTestId('messageText').value).toEqual('New message');
    });

  });
});