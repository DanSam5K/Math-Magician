import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../components/Quote';


it('renders quote as intended', () => {
   const UIQuote = renderer
     .create(<Quote />).
	 toJSON();
	 expect(UIQuote).toThrowErrorMatchingInlineSnapshot();
});