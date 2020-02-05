require("dotenv").config();
const request = require("supertest");
const app = require("../app");
const connect = require("../database/test_connect");
let mongoose;

describe("testing blog posts endpoints", () => {
  beforeAll(() => {
    mongoose = connect(process.env.DB_HOST_TEST);
  });

  afterAll(() => {
    mongoose.connection.close();
  });

  test("testing /posts endpoint", () => {
    request(app)
      .get("/posts")
      .expect(200)
      .send();
  });
});
