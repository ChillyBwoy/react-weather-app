import React from 'react';
import renderer from 'react-test-renderer';
import { fromJS } from 'immutable';

import { App } from '../App';
import Plot from '../Plot.js';

describe('components', () => {
  describe('<App />', () => {
    it('renders correctly', () => {
      const tree = renderer.create(<App redux={fromJS({})}/>).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('<Plot />', () => {
    global.document = {
      getElementById() {
        return {
          on() {}
        }
      }
    };

    it('renders correctly', () => {
      const tree = renderer.create(
        <Plot xData={fromJS({})} yData={fromJS({})} />
      ).toJSON();
      expect(tree).toMatchSnapshot();
   });
  });
});
