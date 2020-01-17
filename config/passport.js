const passport = require("passport");
const AdminModel = require("./../database/models/admin_model");
const LocalStrategy = require("passport-local");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");

passport.serializeUser((admin, done) => {
  done(null, admin._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const admin = await AdminModel.findById(id);
    done(null, admin);
  } catch (error) {
    done(error);
  }
});

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      session: false,
    },
    async (email, password, done) => {
      const admin = await AdminModel.findOne({ email }).catch(done);

      if (!admin || !admin.verifyPasswordSync(password)) {
        return done(null, false);
      }

      return done(null, admin);
    },
  ),
);

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
    async (jwt_payload, done) => {
      const admin = await AdminModel.findById(jwt_payload.sub).catch(
        done,
      );

      if (!admin) {
        return done(null, false);
      }

      return done(null, admin);
    },
  ),
);

module.exports = passport;
