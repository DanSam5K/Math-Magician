import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/Home';
import Quote from '../components/Quote';



describe('Components Snapshots test', () => {

	it('renders home as intended', () => {
	   const UIHome= renderer
		 .create(<Home />)
		 .toJSON();
		 expect(UIHome).toMatchSnapshot();
	});

	it('renders quote as intended', () => {
	   const UIQuote = renderer
		 .create(<Quote />)
		 .toJSON();
		 expect(UIQuote).toMatchSnapshot();
	});

})
