const db = require("../../data/dbConfig");

module.exports = {
  add(task) {
    return db("tasks")
      .insert(task)
      .then(([id]) => {
        return db("tasks").where("id", id).first();
      });
  },
  getTasks() {
    return db("tasks as t")
      .join("projects as p", "t.project_id", "p.id")
      .select(
        "p.name as project_name",
        "p.description as project_description",
        "t.description",
        "t.notes",
        "t.completed"
      );
  },
};
