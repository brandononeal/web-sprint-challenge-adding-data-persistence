const db = require("../../data/dbConfig");

module.exports = {
  add(project) {
    return db("projects")
      .insert(project)
      .then(([id]) => {
        return db("projects").where("id", id).first();
      });
  },
  getProjects() {
    return db("projects");
  },
};
