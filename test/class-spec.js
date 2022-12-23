const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");
let word;
word = new Word("duhdoink");

describe("Word", function () {
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      expect(word).to.have.property("word");
    });

    it('should set the "word" property when a new word is created', function () {
      expect(word.word).to.eql("duhdoink");
    });
  });


  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      expect(word.removeVowels()).to.eql("dhdnk");

    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      expect(word.removeConsonants()).to.eql("uoi");
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      expect(word.pigLatin()).to.eql("uhdoinkday");
    });
  });
});
