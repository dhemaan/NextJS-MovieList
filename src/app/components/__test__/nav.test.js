
import React from "react";
import { render} from "@testing-library/react";

import Nav from "@/app/components/Nav";


describe("Header Component", () => {
  
    it("renders the component correctly to match snapshot", async() => {
       const {container} = render(<Nav />);      
      expect(container).toMatchSnapshot();     
    });

    it("Verify No of links", async() => {
        const container = render(<Nav />);      
       const navLink = container.getByTestId("navLink")
       expect(navLink.childNodes.length).toEqual(4)     
     });

     it("Verify links name with their link", async() => {
        const container = render(<Nav />);      
       const navLink = container.getByTestId("navLink");
       
       expect(navLink.childNodes[0].childNodes[0].getAttribute("href")).toEqual("#")
       expect(navLink.childNodes[0].childNodes[0].text).toEqual("Home") 
       
       expect(navLink.childNodes[1].childNodes[0].getAttribute("href")).toEqual("/about")
       expect(navLink.childNodes[1].childNodes[0].text).toEqual("About") 
       
       expect(navLink.childNodes[2].childNodes[0].getAttribute("href")).toEqual("/movie")
       expect(navLink.childNodes[2].childNodes[0].text).toEqual("Movie") 
       
       expect(navLink.childNodes[3].childNodes[0].getAttribute("href")).toEqual("/contact")
       expect(navLink.childNodes[3].childNodes[0].text).toEqual("Contact") 
       
     });

  })
