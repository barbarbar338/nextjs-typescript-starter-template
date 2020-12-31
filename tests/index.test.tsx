import { render, screen } from "@testing-library/react";
import App from "../pages/index";

describe("App", () => {
	it("renders without crashing", (done) => {
		render(<App />);
		expect(
			screen.getByRole("heading", { name: "NextJS Starter Template" }),
		).not.toBeUndefined();
		done();
	});
});
