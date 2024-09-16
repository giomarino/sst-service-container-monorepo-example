import express from "express";
import * as Todo from '@sample-container/core/todo'
const app = express();

app.get("/", (req, res) => {
  res.send(Todo.say());
});

app.listen(3000);

app.listen(3000, () => {
  console.log('Waiting on 3000');
});