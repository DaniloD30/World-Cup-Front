import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import movieAction from "./movieAction";
export const mockStore = configureMockStore([thunk]);
const store = mockStore();

describe("actions should working to store", () => {
  beforeEach(() => {
    // Runs before each test in the suite
    store.clearActions();
  });

  describe("movieAction", () => {
    test("Dispatches the getMovies action and payload", () => {
      store.dispatch(movieAction.getMovies("identificatorTest"));
      expect(store.getActions()).toMatchSnapshot();
    });
  });
});
