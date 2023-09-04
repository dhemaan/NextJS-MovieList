
import React from "react";
import { render} from "@testing-library/react";

import Header from "@/app/components/Header";


describe("Header Component", () => {
  
    it("renders the component correctly to match snapshot", async() => {
       const {container} = render(<Header />);      
      expect(container).toMatchSnapshot();     
    });

    it("Verify logo redirection link", async() => {
        const container = render(<Header />);      
       const link = container.getByTestId("link")
       expect(link.getAttribute("href")).toEqual("/")     
     });

     it("verify logo image path", async() => {
        const container = render(<Header />);      
       const link = container.getByTestId("link")
       expect(link.childNodes[0].getAttribute("src")).toContain("logo1.png")
     });

  })
