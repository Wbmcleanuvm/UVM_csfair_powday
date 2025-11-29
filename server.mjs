import express from "express";
import { jayGetData } from "./fetchWebData.mjs";

const ex = express();
const PORT = 3000;

ex.get("/jayPeak", async (req, res) => {
    const data = await jayGetData("https://jaypeakresort.com/skiing-riding/snow-report-maps/snow-report");
    res.json(data);
});

ex.listen(PORT, () => {
    console.log("Server running on port", PORT);
});
