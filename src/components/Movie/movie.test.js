import React from "react";
import { shallow, mount, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import Index from "./Movie";

const mockStore = configureMockStore([thunk]);
const store = mockStore();

const handleListSelectMovies = () => {
  // const movieL = movieList.find((obj) => obj.id === movie.id);
  // if (movieL === undefined) {
  //   if (movieList.length < 8) {
  //     setMoviesList(movieList.concat(movie));
  //   }
  // }
};

const handleDelete = () => {
  // setMoviesList(
  //   movieList.filter((appointment) => appointment.id !== movie.id)
  // );
};
describe("Movie ", () => {
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
        movies: [],
      },
    });

    const wrapper = shallow(
      <BrowserRouter>
        <Provider store={store} debug>
          <Index
            title="{item.titulo}"
            year="{item.ano}"
            handleList={handleListSelectMovies}
            handleDel={handleDelete}
            movie="{item}"
          />
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
          <Index
            title="{item.titulo}"
            year="{item.ano}"
            handleList={handleListSelectMovies}
            handleDel={handleDelete}
            movie="{item}"
          />
        </Provider>
      </BrowserRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
