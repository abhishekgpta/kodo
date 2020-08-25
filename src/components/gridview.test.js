import React from "react";
import { render } from "@testing-library/react";
import GridView from './gridView';
import Data from '../mock_data.json';

/*
  Component : GridView
  Number of cases : 2
*/
describe('Test Grid view', () => {
  test('with No data', () => {
    const { container, getByText } = render(<GridView data2Map={[]} />)
    expect(container).toMatchSnapshot()
    expect(getByText('NO DATA')).toBeInTheDocument();
  })

  test('with 5 records', () => {
    const testData = Data.slice(0,5)
    const { container } = render(<GridView data2Map={testData} />)
    expect(container).toMatchSnapshot()
  })
});
