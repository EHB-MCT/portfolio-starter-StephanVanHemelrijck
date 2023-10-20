/**
 *
 * @route GET /servers/:uid
 *
 * @param { string } uid - The UID of the server
 *
 * @returns { Object } 200 - An object containing the server data
 *
 */
app.get("/servers/:uid", async (req, res) => {
  try {
    const { uid } = req.params;

    const server = await db("servers").where({ uid }).first();

    res.status(200).send({ server });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

/**
 *
 * @route POST /servers
 *
 * @param { Object } body - The request body
 * @param { string } body.title - The title of the server
 * @param { string } body.description - The description of the server
 *
 * @returns { Object } 200 - An object containg the newly created server
 *
 */
app.post("/servers", async (req, res) => {
  try {
    const { title, description } = req.body;

    const server = await db("servers").insert({
      title,
      description,
      uid: faker.datatype.uuid(),
    });

    res.status(200).send({ server });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

/**
 *
 * @route GET /servers
 *
 * @returns { Object } 200 - An object containing all the servers
 *
 */
app.get("/servers", async (req, res) => {
  try {
    const servers = await db("servers").select("*");

    res.status(200).send({ servers });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

/**
 *
 * @route PUT /servers/:uid
 *
 * @param { string } uid - The UID of the server
 * @param { Object } body - The request body
 * @param { string } body.title - The title of the server
 * @param { string } body.description - The description of the server
 *
 * @returns { Object } 200 - An object containing the updated server
 *
 */
app.put("/servers/:uid", async (req, res) => {
  try {
    const { uid } = req.params;
    const { title, description } = req.body;

    const server = await db("servers")
      .where({ uid })
      .update({ title, description });

    res.status(200).send({ server });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

/**
 *
 * @route DELETE /servers/:uid
 *
 * @param { string } uid - The UID of the server
 *
 * @returns { Object } 200 - An object containing a deletion message
 *
 */
app.delete("/servers/:uid", async (req, res) => {
  try {
    const { uid } = req.params;

    const server = await db("servers").where({ uid }).del();

    res.status(200).send({ message: "Server deleted successfully!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
