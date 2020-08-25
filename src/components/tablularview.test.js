import React from "react";
import { render } from "@testing-library/react";
import TabularView from './tabularview';
import Data from '../mock_data.json';

/*
  Component : TabularView
  Number of cases : 2
*/
describe('Test Tabular view', () => {
  test('with No data', () => {
    const { container } = render(<TabularView data2Map={[]} />)
    expect(container).toMatchSnapshot()
  })

  test('with 5 records', () => {
    const testData = Data.slice(0,5)
    const { container } = render(<TabularView data2Map={testData} />)
    expect(container).toMatchSnapshot()
  })
});
