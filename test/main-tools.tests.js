// ====================================================================
// Unit Testing file "main.js" with Mocha and Chai
// ====================================================================

import { expect } from "chai";
import { kilometer } from "../main.js";

describe("main.js", () => {
  describe("#kilometer", () => {
    it("should return a number", () => {
      expect(
        kilometer([
          "marseille",
          "valence",
          "lyon",
          "paris",
          "bordeaux",
          "brest",
        ])
      ).to.be.not.equal(Number.NaN);
    });
    it("should return the distance of the final path", () => {
      expect(kilometer(["marseille", "valence", "lyon"])).to.be.equal(556.4535915685626);
    });
  });
});
