import React from 'react';
import { create, act, ReactTestRenderer } from 'react-test-renderer';
import GlobalContext from '../../../contexts';
import OptionsCard from '..';

let wrapper: ReactTestRenderer;

describe('OptionsCard screen test suite', () => {
  beforeEach(() => {
    act(() => {
      wrapper = create(
        <GlobalContext>
          <OptionsCard />
        </GlobalContext>,
      );
    });
  });

  it('Should render', () => {
    expect(wrapper).toBeTruthy();
  });
});
