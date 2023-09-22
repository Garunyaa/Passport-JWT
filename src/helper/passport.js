import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { Student } from "../models/student-model";
require("dotenv").config();

const secretKey = process.env.SECRET_KEY;

// Configure passport to use JWT Strategy
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secretKey,
};

passport.use(
  "admin-jwt",
  new JwtStrategy(opts, async (jwtPayload, done) => {
    try {
      const student = await Student.findById(jwtPayload.id);
      if (student) {
        return done(null, student);
      } else {
        return done(null, false);
        // or you could create a new account
      }
    } catch (error) {
      return done(error, false);
    }
  })
);

async function checkStudentAuthentication(req, res, next) {
  passport.authenticate("admin-jwt", { session: false }, (error, student) => {
    if (error) {
      return next(error);
    }
    if (!student) {
      return res.status(401).send("auth failed");
    }

    req.student = student;
    next();
  })(req, res, next);
}

export default checkStudentAuthentication;
