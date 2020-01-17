const express = require("express");
const expressSession = require("express-session");
const MongoStore = require("connect-mongo")(expressSession);
const mongoose = require("mongoose");
const passport = require("./config/passport");
const cookieParser = require("cookie-parser");
const { errors } = require("celebrate");
const app = express();

app.use(
  expressSession({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 6000000,
    },
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
    }),
  }),
);

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(require("./routes"));
app.use(errors());

module.exports = app;
