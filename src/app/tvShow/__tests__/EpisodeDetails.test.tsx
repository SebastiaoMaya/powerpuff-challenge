import React from "react";
import { render } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import axios from "network";
import { EpisodeDetails } from "../episodeDetails";
import {
  MOCK_EPISODES_LIST_RESPONSE,
  MOCK_TV_SHOW_RESPONSE,
} from "../../../__mocks__/mocks";
import { RootStoreContext } from "rootStore/context";
import { TvShowStore } from "../store";
import { BrowserRouter } from "react-router-dom";

const renderEpisodeDetails = () =>
  render(
    <RootStoreContext.Provider value={{ tvShowStore: new TvShowStore() }}>
      <BrowserRouter>
        <EpisodeDetails id={"657308"} />
      </BrowserRouter>
    </RootStoreContext.Provider>
  );

describe("EpisodeDetails", () => {
  let mockAxios: MockAdapter;

  beforeEach(() => {
    // mockAxios = new MockAdapter(axios);
    // mockAxios
    //   .onGet("https://api.tvmaze.com/singlesearch/shows?q=powerpuff")
    //   .reply(200, MOCK_TV_SHOW_RESPONSE);
    // mockAxios
    //   .onGet("https://api.tvmaze.com/shows/6771/episodes")
    //   .reply(200, MOCK_EPISODES_LIST_RESPONSE);
  });

  afterEach(() => {
    //mockAxios.reset();
  });

  it("renders EpisodeDetails", () => {
    const { container } = renderEpisodeDetails();

    expect(container).toMatchSnapshot();
  });

  //   it('renders titles', () => {
  //     const { getByText } = renderConsents(legalScenarioExplicitText);
  //     expect(getByText(legalScenarioExplicitText.documentList[0].document.documentText1)).toBeTruthy();
  //   });

  //   it('is required when acceptanceRequired=true', () => {
  //     const { container } = renderConsents(legalScenarioExplicitText);
  //     const requiredItems = container.querySelectorAll('.gl-form-item--required');
  //     const requiredText = getNodesText(requiredItems);
  //     expect(requiredText).toMatchObject([legalScenarioExplicitText.documentList[1].document.documentText1]);
  //   });

  //   it('is pre-checked when acceptancePreSelected=true', () => {
  //     const onChange = jest.fn();
  //     renderConsents(legalScenarioExplicitPreChecked, onChange);

  //     expect(onChange).toHaveBeenCalledTimes(1);
  //     expect(onChange.mock.calls[0][0].acceptances[0].accepted).toBe(true);
  //   });

  //   it('shows errors for mandatory checkboxes', () => {
  //     const { getByText } = renderConsentsTouched(legalScenarioExplicitText);

  //     const errorText = getByText(errorrequired);
  //     expect(errorText).toBeTruthy();
  //   });
});
