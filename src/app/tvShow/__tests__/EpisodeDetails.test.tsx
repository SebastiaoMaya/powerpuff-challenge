import React from "react";
import { render } from "@testing-library/react";
import { EpisodeDetails } from "../episodeDetails";
import {
  MOCK_EPISODES_LIST_RESPONSE,
  MOCK_TV_SHOW_RESPONSE,
} from "../../../__mocks__/mocks";
import { BrowserRouter } from "react-router-dom";
import { RootStoreProvider } from "rootStore";
import mockAxios from "__mocks__/axios";

const renderEpisodeDetails = () =>
  render(
    <RootStoreProvider>
      <BrowserRouter>
        <EpisodeDetails id={"657308"} />
      </BrowserRouter>
    </RootStoreProvider>
  );

describe("EpisodeDetails", () => {
  beforeEach(() => {
    mockAxios.mockResponseFor(
      {
        url: "https://api.tvmaze.com/singlesearch/shows?q=powerpuff",
        method: "get",
      },
      { data: MOCK_TV_SHOW_RESPONSE }
    );
    mockAxios.mockResponseFor(
      {
        url: "https://api.tvmaze.com/shows/6771/episodes",
        method: "get",
      },
      { data: MOCK_EPISODES_LIST_RESPONSE }
    );
  });

  afterEach(() => {
    mockAxios.reset();
  });

  it("renders EpisodeDetails", () => {
    const { container } = renderEpisodeDetails();

    expect(container).toMatchSnapshot();
  });
});
