var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

// Dummy data
const u1 = {
    name: "U1",
    split: "U/L",
    cycle: 2,
    day: 1,
    exercises: [{
        name: "pushup",
        sets: 3,
        reps: 10,
        rest: 60
      },
      {
        name: "squat",
        sets: 3,
        reps: 20,
        rest: 60
      }
    ]
  },
  u2 = {
    name: "U2",
    split: "U/L",
    cycle: 2,
    day: 2,
    exercises: [{
        name: "pullup",
        sets: 3,
        reps: 10,
        rest: 60
      },
      {
        name: "deadlift",
        sets: 3,
        reps: 10,
        rest: 60
      }
    ]
  };

const r1 = {
    name: "U1|D1",
    status: "completed",
    split: "U/L",
    cycle: 2,
    exercises: [{
        name: "pushup",
        sets: 3,
        reps: 10,
        rest: 60
      },
      {
        name: "squat",
        sets: 3,
        reps: 20,
        rest: 60
      }
    ]
  },
  r2 = {
    name: "U2|D2",
    status: "upcoming",
    split: "U/L",
    cycle: 2,
    exercises: [{
        name: "pullup",
        sets: 3,
        reps: 10,
        rest: 60
      },
      {
        name: "deadlift",
        sets: 3,
        reps: 10,
        rest: 60
      }
    ]
  };

const userData = {
  user: {
    name: "Ayush Gupta",
    age: 20,
    height: 5.9,
    weight: 75
  },
  split: "U/L",
  cycle: [u1, u2],
  goals: {
    "1-3-2020": ["15 pushups", "50 squats"],
    "5-5-2020": ["60sec L-sit", "10 pullups"]
  },
  log: {
    "20-02-2020": r1,
    "21-02-2020": r2
  }
}

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
});

app.get("/user", (req, res) => {
  res.json({ userData: userData })
});

app.listen(port, () => console.log("Listening on http://localhost:" + port + "/"));