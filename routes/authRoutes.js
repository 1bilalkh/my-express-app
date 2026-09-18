const jwt = require("jsonwebtoken");
const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// ==========================================
// GOOGLE STRATEGY
// ==========================================

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value;
        const name = profile.displayName;

        if (!email) {
          return done(
            new Error("Google account email not available"),
            null
          );
        }

        let user = await User.findOne({ email });

        // Create user if it doesn't exist
        if (!user) {
          user = await User.create({
            name,
            email,
            googleId: profile.id,
          });
        }

        // Add Google ID to an existing account
        if (user && !user.googleId) {
          user.googleId = profile.id;
          await user.save();
        }

        done(null, user);
      } catch (error) {
        done(error, null);
      }
    }
  )
);

// ==========================================
// AUTH TEST
// ==========================================

router.get("/", (req, res) => {
  res.json({
    message: "Auth route working!",
  });
});

// ==========================================
// REGISTER
// ==========================================

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User registered successfully!",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Registration failed",
      error: error.message,
    });
  }
});

// ==========================================
// LOGIN
// ==========================================

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    // Google-only account
    if (!user.password) {
      return res.status(400).json({
        message:
          "This account uses Google login. Please login with Google.",
      });
    }

    // Compare password
    const passwordMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!passwordMatch) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    // Create JWT
    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.json({
      message: "Login successful!",
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Login failed",
      error: error.message,
    });
  }
});

// ==========================================
// PROFILE
// ==========================================

router.get(
  "/profile",
  authMiddleware,
  async (req, res) => {
    try {
      const user = await User.findById(
        req.user.userId
      ).select("-password");

      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      res.json({
        message: "Protected profile accessed!",
        user,
      });
    } catch (error) {
      res.status(500).json({
        message: "Failed to get profile",
        error: error.message,
      });
    }
  }
);

// ==========================================
// GOOGLE LOGIN
// ==========================================

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

// ==========================================
// GOOGLE CALLBACK
// ==========================================

router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
  }),
  (req, res) => {
    const token = jwt.sign(
      {
        userId: req.user._id,
        email: req.user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    const frontendUrl =
      process.env.FRONTEND_URL ||
      "http://localhost:5173";

    res.redirect(
      `${frontendUrl}/google-success?token=${token}`
    );
  }
);

module.exports = router;