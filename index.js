const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 3500;

const guest_list = [
  {
    id: 1,
    name: "Oscar Ivan Anillo",
  },
];

//Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Oscar Anillo</h1></p>Fullstack Developer</p>");
});
app.get("/api/guests", (req, res) => {
  res.json(guest_list);
});

const generateId = () => {
  const maxId =
    notes.length > 0 ? Math.max(...notes.map((item) => item.id)) : 0;
  return maxId + 1;
};
app.post("/api/guests", (req, res) => {
  const userInput = req.body;
  if (!userInput) {
    return res.status(400).json({
      error: "Escribe tu nombre!",
    });
  }

  const newGuest = {
    id: generateId(),
    content: userInput.content,
    date: new Date().toISOString(),
  };
  guest_list = guest_list.concat(newGuest);
  res.json(newGuest);
});

app.delete("/api/guests", (req, res) => {
  const id = Number(req.params.id);
  guest_list = guest_list.filter((guest) => guest.id !== id);

  res.status(204).end();
});

app.listen(PORT, () => console.log(`Listening on server ${PORT}`));
