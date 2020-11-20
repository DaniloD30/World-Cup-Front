import React from "react";
import { shallow, mount, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import Index from "./App";

const mockStore = configureMockStore([thunk]);
const store = mockStore();

describe("Movie List ", () => {
  beforeEach(() => {
    // Runs before each test in the suite
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
    store.clearActions();
  });

  it('it should render correctly with store in "debug" mode', () => {
    const store = mockStore({
      movie: {
        movieArr: [],
        winners: [],
        movies: [],
      },
      app: {
        loading: {
          getMoviesLoading: false,
          generateChampionship: false,
        },
      },
    });

    const wrapper = shallow(
      <BrowserRouter>
        <Provider store={store} debug>
          <Index />
        </Provider>
      </BrowserRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("it should render correctly without store", () => {
    const store = mockStore({});

    const wrapper = mount(
      <BrowserRouter>
        <Provider store={store}>
          <Index />
        </Provider>
      </BrowserRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
