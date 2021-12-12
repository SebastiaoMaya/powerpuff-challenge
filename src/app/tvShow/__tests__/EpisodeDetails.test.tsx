import React from "react";
import axios from "network";
import { render, waitFor } from "@testing-library/react";
import { EpisodeDetails } from "../episodeDetails";
import {
  MOCK_EPISODES_LIST_RESPONSE,
  MOCK_TV_SHOW_RESPONSE,
} from "../../../__mocks__/mocks";
import { BrowserRouter } from "react-router-dom";
import { RootStoreProvider } from "rootStore";
jest.mock("axios");
function mockAxiosGet(): jest.Mock {
  return (axios.get as jest.Mock).mockImplementation((url: string) => {
    if (url === "/singlesearch/shows?q=powerpuff") {
      return Promise.resolve({ data: MOCK_TV_SHOW_RESPONSE });
    } else if (url === "/shows/6771/episodes") {
      return Promise.resolve({ data: MOCK_EPISODES_LIST_RESPONSE });
    }
  });
}
const renderEpisodeDetails = () =>
  render(
    <RootStoreProvider>
      <BrowserRouter>
        <EpisodeDetails id={"657308"} />
      </BrowserRouter>
    </RootStoreProvider>
  );
describe("EpisodeDetails", () => {
  it("renders EpisodeDetails", async () => {
    const mockAxios = mockAxiosGet();
    const { container } = await waitFor(() => renderEpisodeDetails());
    expect(container).toMatchSnapshot();
    mockAxios.mockReset();
  });
});
