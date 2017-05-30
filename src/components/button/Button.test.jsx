import React from "react";
import jest, { expect } from "jest";
import { shallow } from "enzyme";
import Button from "./Button";

// mock function to use for prop
const testClick = jest.fn();

// component instance to test
const wrapper = shallow( <Button label="Test Label" click={ testClick } /> );

describe( "Button", () => {
  it( "should render without errors", () => {
    expect( wrapper.find( "label" ).text() ).toEqual( "Test Label" );
  } );

  it( "should handle click events", () => {
    wrapper.find( "button" ).simulate( "click" );
    expect( testClick.mock.calls.length ).toEqual( 1 );
  } );
} );
