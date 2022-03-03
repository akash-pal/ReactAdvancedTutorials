// src/mocks/browser.js
import { setupWorker, rest } from "msw";

export const worker = setupWorker(
  rest.get("https://jsonplaceholder.typicode.com/users/1", (req, res, ctx) => {
    const user = { name: "Jack", email: "jack@email.com" };
    return res(ctx.status(200), ctx.json(user));
  })
);
