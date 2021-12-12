import React from "react";
import networkMock from "__mocks__/network";
import { render, waitFor } from "@testing-library/react";
import { EpisodeDetails } from "../episodeDetails";
import {
  MOCK_EPISODES_LIST_RESPONSE,
  MOCK_TV_SHOW_RESPONSE,
} from "../../../__mocks__/mocks";
import { BrowserRouter } from "react-router-dom";
import { RootStoreProvider } from "rootStore";

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
    networkMock.get({
      "/singlesearch/shows?q=powerpuff": MOCK_TV_SHOW_RESPONSE,
      "/shows/6771/episodes": MOCK_EPISODES_LIST_RESPONSE,
    });
  });

  afterEach(() => {
    networkMock.getReset();
  });

  it("renders EpisodeDetails", async () => {
    const { container } = await waitFor(() => renderEpisodeDetails());
    expect(container).toMatchSnapshot();
  });
});
