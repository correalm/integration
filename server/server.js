import setupApp from "./src/app.js";
const port = 8080;

const app = setupApp(1);

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
