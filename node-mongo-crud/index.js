const express = require("express");
const app = express();
var cors = require("cors");
const ObjectId = require("mongodb").ObjectId;
const port = process.env.PORT || 5000;

// Use middleware
app.use(cors());
app.use(express.json());
// user name:dbuser1
// password:ICvwizzgQiXFAjIa

const { MongoClient, ServerApiVersion } = require("mongodb");
const res = require("express/lib/response");
const uri =
  "mongodb+srv://dbuser1:ICvwizzgQiXFAjIa@cluster0.yxjof.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
async function run() {
  try {
    await client.connect();
    const userCollection = client.db("foodExpress").collection("user");

    // get data
    app.get("/users", async (req, res) => {
      const query = {};
      const cursor = userCollection.find(query);
      const users = await cursor.toArray();
      res.send(users);
    });

    app.get("/user/:id", async (res, req) => {
      const id = req.params.id;
      const query = { _id: Object(id) };
      const result = await userCollection.findOne(query);
      res.send(result);
    });

    // post data
    app.post("/user", async (req, res) => {
      const newUser = req.body;
      console.log("adding new user", newUser);
      const result = await userCollection.insertOne(newUser);
      console.log(`a document inserted:${result.insertedId}`);
      res.send(result);
    });

    // DELETE USER
    app.delete("/user/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await userCollection.deleteOne(query);
      res.send(result);
    });
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Running my node crud server");
});

app.listen(port, () => {
  console.log("crud server rumming");
});
