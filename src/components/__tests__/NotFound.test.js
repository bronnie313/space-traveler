import { render } from "@testing-library/react";
import NotFound from "../NotFound/NotFound";

describe('404 component', () => {
  test('Should render 404 component', () => {
    const container = render(<NotFound />);
    expect(container).toMatchSnapshot();
  });
});
