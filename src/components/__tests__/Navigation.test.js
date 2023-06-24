import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Nav from '../Navigation/Navigation';

describe('Navigation bar', () => {
  test('Should Render nav bar', () => {
    const container = render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
