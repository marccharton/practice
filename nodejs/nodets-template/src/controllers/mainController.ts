import express from "express";

const mainController = {
    home: function (req:express.Request, res:express.Response) {
        return res.render("index");
    }
}

export default mainController;