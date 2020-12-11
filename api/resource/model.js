const db = require("../../data/dbConfig");

module.exports = {
  add(resource) {
    return db("resources")
      .insert(resource)
      .then(([id]) => {
        return db("resources").where("id", id).first();
      });
  },
  getResources() {
    return db("resources");
  },
};
