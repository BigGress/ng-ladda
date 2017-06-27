import { LaddaPage } from "./app.po";

describe("ladda App", () => {
  let page: LaddaPage;

  beforeEach(() => {
    page = new LaddaPage();
  });

  it("should display welcome message", () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual("Welcome to app!!");
  });
});
