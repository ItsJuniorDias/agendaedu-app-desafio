import React from 'react';
import * as redux from 'react-redux';
import { create, act, ReactTestRenderer } from 'react-test-renderer';
import GlobalContext from '../../../contexts';
import EventCard from '..';

let wrapper: ReactTestRenderer;

describe('EventCard screen test suite', () => {
  beforeEach(() => {
    const useSelector = jest.spyOn(redux, 'useSelector');
    useSelector.mockReturnValue('light');

    act(() => {
      wrapper = create(
        <GlobalContext>
          <EventCard />
        </GlobalContext>,
      );
    });
  });

  it('Should render', () => {
    expect(wrapper).toBeTruthy();
  });
});
