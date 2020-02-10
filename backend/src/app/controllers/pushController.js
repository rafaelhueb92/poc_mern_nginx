class pushController {
  async push(req, res) {
    const { body } = req;
    req.io.emit("notification", body);
    return res.json(body);
  }

  async healt(_, res) {
    return res.json({ msg: "API funcionando!" });
  }
}

module.exports = new pushController();
