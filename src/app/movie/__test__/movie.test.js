
import React, {Suspense} from "react";
import { render, screen, waitFor, act, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // For additional assertions

import Movie from "@/app/movie/page";

const MOCK_DATA = [
  {
    availability: {
      isPlayable: true,
      availabilityDate: "July 15",
      availabilityStartTime: 1468591200000,
      unplayableCause: null,
    },
    inRemindMeList: false,
    queue: {
      available: true,
      inQueue: false,
    },
    summary: {
      type: "show",
      id: 80057281,
      isOriginal: true,
    },
    episodeCount: 34,
    jawSummary: {
      trackIds: {
        videoId: 80057281,
        trackId_jaw: 14277281,
        trackId_jawEpisode: 14277283,
        trackId_jawTrailer: 14277282,
        trackId: 14277281,
      },
      tags: [
        {
          id: 108911,
          name: "Ominous",
        },
        {
          id: 100053,
          name: "Scary",
        },
      ],
      cast: [
        {
          id: 81117,
          name: "Winona Ryder",
        },
        {
          id: 30074539,
          name: "David Harbour",
        },
        {
          id: 40080328,
          name: "Millie Bobby Brown",
        },
        {
          id: 40080327,
          name: "Finn Wolfhard",
        },
        {
          id: 40080425,
          name: "Gaten Matarazzo",
        },
        {
          id: 40080241,
          name: "Caleb McLaughlin",
        },
        {
          id: 40013337,
          name: "Noah Schnapp",
        },
        {
          id: 40007740,
          name: "Sadie Sink",
        },
        {
          id: 40080329,
          name: "Natalia Dyer",
        },
        {
          id: 40080224,
          name: "Charlie Heaton",
        },
        {
          id: 40084216,
          name: "Joe Keery",
        },
        {
          id: 40197835,
          name: "Maya Hawke",
        },
        {
          id: 30148014,
          name: "Brett Gelman",
        },
        {
          id: 40181927,
          name: "Priah Ferguson",
        },
        {
          id: 40093263,
          name: "Dacre Montgomery",
        },
        {
          id: 12609,
          name: "Cara Buono",
        },
        {
          id: 64636,
          name: "Matthew Modine",
        },
        {
          id: 77279,
          name: "Paul Reiser",
        },
        {
          id: 3553,
          name: "Sean Astin",
        },
        {
          id: 40092538,
          name: "Shannon Purser",
        },
      ],
      creators: [
        {
          id: 40089430,
          name: "The Duffer Brothers",
        },
      ],
      directors: [],
      writers: [],
      genres: [
        {
          id: 3300242,
          name: "Sci-Fi TV",
        },
        {
          id: 60951,
          name: "Teen TV Shows",
        },
        {
          id: 83059,
          name: "TV Horror",
        },
      ],
      availability: {
        isPlayable: true,
        availabilityDate: "July 15",
        availabilityStartTime: 1468591200000,
        unplayableCause: null,
      },
      contextualSynopsis: {
        text: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
        evidenceKey: "web_synopsis|80057281_INFORMATIVE|en|_IFD_",
      },
      currentContextualSynopsis: {
        text: "As the town preps for Halloween, a high-scoring rival shakes things up at the arcade, and a skeptical Hopper inspects a field of rotting pumpkins.",
        evidenceKey: "web_synopsis|80117716_INFORMATIVE|en",
      },
      maturity: {
        rating: {
          value: "TV-14",
          maturityDescription:
            "Parents strongly cautioned. May not be suitable for ages under 14.",
          specificRatingReason:
            "disturbing images, fear, gore, language, smoking",
          maturityLevel: 90,
          board: "US TV",
          boardId: 10,
          ratingId: 137,
          reasons: [
            {
              id: 7432,
              levelDescription: null,
              reasonDescription: "disturbing images",
            },
            {
              id: 7424,
              levelDescription: null,
              reasonDescription: "fear",
            },
            {
              id: 7429,
              levelDescription: null,
              reasonDescription: "gore",
            },
            {
              id: 7426,
              levelDescription: null,
              reasonDescription: "language",
            },
            {
              id: 7430,
              levelDescription: null,
              reasonDescription: "smoking",
            },
          ],
        },
      },
      id: 80057281,
      type: "show",
      isOriginal: true,
      mostLiked: "Most Liked",
      videoId: 80057281,
      requestId: "97a38c92-de9b-4108-b2f7-cdbb7a14cc6d-44147120",
      userRatingRequestId: "97a38c92-de9b-4108-b2f7-cdbb7a14cc6d-44147120",
      title: "Stranger Things",
      copyright: null,
      releaseYear: 2022,
      watched: true,
      hasAudioDescription: true,
      synopsis:
        "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
      synopsisRegular:
        "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
      hasSensitiveMetaData: false,
      delivery: {
        has3D: false,
        hasHD: true,
        hasUltraHD: false,
        hasHDR: false,
        hasDolbyVision: false,
        hasDolbyAtmos: false,
        has51Audio: true,
        quality: "HD",
      },
      titleMaturity: {
        level: 90,
      },
      broadcaster: {
        broadcasterName: null,
      },
      trailerSummary: {
        length: 11,
      },
      supplementalMessage: "2023 Emmy Nominee",
      supplementalMessageIcon: "AWARD",
      videoMerch: {
        videoId: 80057281,
        id: 81617936,
        start: 0,
        computeId: "browse|81617936|en-TR|_UPD_",
      },
      seasonAbbr: "S2",
      seasonCount: 4,
      numSeasonsLabel: "4 Seasons",
      episodeCount: 34,
      episodeTitle: "Stranger Things",
      logoImage: {
        videoId: 80057281,
        url: "https://occ-0-116-448.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSNUzoP8HHEMoUSYEp5GdQ92BwmUzjENlcVRytYB-9zH3CWjN1d3IEkLGjB8njlIALYjHH8NG9eT0k876YHi9_JtUIJCaG9ZXHcEC26sYbfa-GlUN6Xyuvg5dqpkUDPvoUvTLYssGgkv0YErnLL1LEzancT6V39BpxajPFO7uP1Q_SpE-D4E.webp?r=23b",
        type: "LOGO_BRANDED_HORIZONTAL",
        width: 625,
        height: 250,
        extension: "webp",
        size: "_LOGO_BRANDED_HORIZONTAL",
        imageKey:
          "LOGO_BRANDED_HORIZONTAL|687f7fd1-e904-11ec-911c-0eda6da0d99b:6bc1ad90-7e71-11e9-a86a-0ef4f0f37a06|en",
      },
      backgroundImage: {
        videoId: "80057281",
        url: "https://occ-0-116-448.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdzVHLT6MGyc1z6c-EsS24HF6B7IfzkQ4S52k1l0YB9lX5aqabWYBoUK6D9AK23HW2TgJlQr0s9h4f2b6M4m7cWWTKqIn8mSy0rz2jl3yAVOWmPTiKVCIOlkIA.webp?r=9e5",
        width: 853,
        height: 480,
        image_key: "MERCH_STILL|bc6b77d0-b609-11e7-abb3-0e239ab36c92|en",
      },
    },
  },
];

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({titles: MOCK_DATA}),
  })
);

async function resolvedComponent(Component, props) {
  const ComponentResolved = await Component(props);
  return () => ComponentResolved
}

describe("Movie Component", () => {
  
    it("renders the component correctly to match snapshot", async() => {
      const MovieResolved = await resolvedComponent(Movie)
      const {container} = render(<MovieResolved />);
      
      expect(container).toMatchSnapshot();     
    });
  
    it("Verify heading have correct text", async () => {
      const MovieResolved = await resolvedComponent(Movie)
      const container = render(<MovieResolved />);

      const heading = container.getByTestId("heading");
      expect(heading.textContent).toBe("Series & Movie");

    });
  
    it("verify card container should be in document",async () => {
      const MovieResolved = await resolvedComponent(Movie)
      const container = render(<MovieResolved />);
      const cardContainer = container.getByTestId("cardContainer");
      expect(cardContainer).toBeInTheDocument()
    })

    it("verify first image title and Anchor link",async () => {
      const MovieResolved = await resolvedComponent(Movie)
      const {container} = render(<MovieResolved />);
     // const cardContainer = container.getByTestId("cardContainer");
      expect(container.querySelector('img').getAttribute('alt')).toEqual(MOCK_DATA[0].jawSummary.title)
      expect(container.querySelector('a').getAttribute('href')).toEqual(`/movie/${MOCK_DATA[0].jawSummary.id}`);
    })
    
    it("Verify Read more button value", async() =>{
      const MovieResolved = await resolvedComponent(Movie)
      const {container} = render(<MovieResolved />);
      expect(container.querySelector('button').innerHTML).toEqual('Read More');
    })
  })
