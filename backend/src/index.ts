import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as GitHubStrategy } from 'passport-github';

dotenv.config();

const app = express();

mongoose.connect(
  `${process.env.MONGDDB_ENDPOINT}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log('Connected Mongoose Success');
  }
);

// MiddleWare
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(
  session({
    secret: 'secretcode',
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  return done(null, user);
});

passport.deserializeUser((user, done) => {
  return done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: `${process.env.GOOGLE_CLIENT_ID}`,
      clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
      callbackURL: '/auth/google/callback',
    },
    function (accessToken: any, refreshToken: any, profile: any, cb: any) {
      // Called On Successful Auth

      /* Insert Into Dtatbase
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return cb(err, user);
      });
      */
      cb(null, profile); // Move On
    }
  )
);

passport.use(
  new GitHubStrategy(
    {
      clientID: `${process.env.GITHUB_CLIENT_ID}`,
      clientSecret: `${process.env.GITHUB_CLIENT_SECRET}`,
      callbackURL: '/auth/github/callback',
    },
    function (accessToken: any, refreshToken: any, profile: any, cb: any) {
      // Called On Successful Auth

      /* Insert Into Dtatbase
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return cb(err, user);
      });
      */
      cb(null, profile); // Move On
    }
  )
);

app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile'] })
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000');
  }
);

app.get('/auth/github', passport.authenticate('github'));

app.get(
  '/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000');
  }
);

app.get('/getuser', (req, res) => {
  res.send(req.user);
});

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(4000, () => {
  console.log('Server Start');
});
