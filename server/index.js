/**
 * Requires
 */
require("./config/config");
const express = require("express");

/**
 * Init var
 */
const app = express();

/**
 * Global router configuration
 *
 */
app.use(require("./routes/index"));


app.listen(process.env.PORT, () => {
    console.log("Escuchando Puerto: ", process.env.PORT);
});