import MockAdapter from "axios-mock-adapter";
import mainReducer, { getCharacters } from "./main/slice";
import characterDetailsReducer, {
  editLocalCharacterDetails,
} from "./characterDetails/slice";
import axiosInstance from "config/axios";
import peoples from "./__mocks__/peoples.json";
import character from "./__mocks__/character.json";
import { configureStore } from "@reduxjs/toolkit";
import { ICharacterDetailsState } from "./characterDetails/interfaces";
import { MainPageState } from "./main/interfaces";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { getCharacterDetails } from "./characterDetails/thunks";

const mockNetworkResponse = (endpoint: string, response: any, status = 200) => {
  const mock = new MockAdapter(axiosInstance);

  mock.onGet(endpoint).reply(status, response);
};

describe("Main redux state tests", () => {
  let store: ToolkitStore<{
    main: MainPageState;
    characterDetails: ICharacterDetailsState;
  }>;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        main: mainReducer,
        characterDetails: characterDetailsReducer,
      },
    });
  });

  test("Should be able to fetch peoples list", async () => {
    mockNetworkResponse("people", peoples);

    const result = await store.dispatch<any>(getCharacters());

    expect(result.type).toBe("GET_CHARACTERS/fulfilled");
    expect(result.payload.results.length).toBe(1);

    const paginationStateCount = store.getState().main.paginationMeta?.count;

    expect(paginationStateCount).toBe(1);
  });

  test("Catch 404 error from server", async () => {
    mockNetworkResponse("people", {}, 404);

    const result = await store.dispatch<any>(getCharacters());

    expect(result.type).toBe("GET_CHARACTERS/rejected");

    const state = store.getState().main;

    expect(state.isLoading).toBe(false);
    expect(state.characters).toBe(undefined);
  });
});

describe("character details redux state tests", () => {
  let store: ToolkitStore<{
    main: MainPageState;
    characterDetails: ICharacterDetailsState;
  }>;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        main: mainReducer,
        characterDetails: characterDetailsReducer,
      },
    });
  });

  test("Loading character details", async () => {
    mockNetworkResponse("people/1", character);

    const result = await store.dispatch<any>(getCharacterDetails("1"));
    const state = store.getState().characterDetails;

    expect(result.type).toBe("GET_CHARACTER_DETAILS/fulfilled");
    expect(state.character?.name).toBe("Luke Skywalker");
  });

  test("Throw error in getting character details", async () => {
    mockNetworkResponse(
      "people/1",
      { error: { message: "Unable to load character details" } },
      404
    );

    const result = await store.dispatch<any>(getCharacterDetails("1"));
    const { error } = store.getState().characterDetails;

    expect(result.type).toBe("GET_CHARACTER_DETAILS/rejected");
    expect(error).toBe("Unable to load character details");
  });

  test("lock editing character data", async () => {
    mockNetworkResponse("people/1", character);

    await store.dispatch<any>(getCharacterDetails("1"));
    const state = store.getState().characterDetails;
    expect(state.character?.name).toBe("Luke Skywalker");

    const mockName = "Mock Skywalker";

    store.dispatch(
      editLocalCharacterDetails({
        ...character,
        name: mockName,
      } as any)
    );

    const updatedState = store.getState().characterDetails;

    expect(updatedState.character?.name).toBe(mockName);
  });
});
