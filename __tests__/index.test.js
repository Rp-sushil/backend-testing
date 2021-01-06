const expect = require("chai").expect;
const mongoose = require("mongoose");

const mongoURI = "mongodb://mongoService:27017/" + "softHardTesting";

before(done, () => {
  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  mongoose.connection
    .once("open", () => {
      console.log("connected to database");
      done();
    })
    .on("connectionError", (err) => {
      console.log(err);
    });
  done();
});

describe("Test-1", () => {
  it("Hello testing-1", () => {
    expect(true).to.be.false;
  });
});
