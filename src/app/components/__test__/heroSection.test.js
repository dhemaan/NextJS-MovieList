
import React from "react";
import { render} from "@testing-library/react";

import Herosection from "@/app/components/Herosection";


describe("Hero Section Component", () => {
  
    it("renders the component correctly to match snapshot", async() => {
       const {container} = render(<Herosection title="Hero Section" imageUrl="/logo1.png" />);      
      expect(container).toMatchSnapshot();     
    });

    it("verify Hero Section Title", async() => {
        const container = render(<Herosection title="Hero Section" imageUrl="/logo1.png"/>);
        const title = container.getByTestId("title");
        expect(title.innerHTML).toEqual("Hero Section");
    })

    it("verify Image URL", async() => {
        const container = render(<Herosection title="Hero Section" imageUrl="/logo1.png"/>);
        const movieLink = container.getByTestId("movieLink");
        expect(movieLink.childNodes[0].innerHTML).toEqual("Explore Movies")
        expect(movieLink.getAttribute("href")).toEqual("/movie")
    })

  })
