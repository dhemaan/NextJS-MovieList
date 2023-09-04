import { render, screen } from "@testing-library/react";
import About from "@/app/about/page";

describe("Test cases for About Page", () => {
  it("Generate Snaphot for About page", () => {
    const { container } = render(<About />);
    expect(container).toMatchSnapshot();
  });

  it("Check About page title", () => {
    const container = render(<About />);
    const title = container.getByTestId("title");

    expect(title.textContent).toBe("OUR STORY");
  });

  it("Check Button to have Movie page Link", () => {
    const container = render(<About />);
    const link = container.getByTestId("movieLink");
    const path = link.href.split("/")[3];

    expect(path).toEqual("movie");
  });
});
