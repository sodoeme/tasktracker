const Task = require("../models/task");

exports.getAllTasks = async (req, res) => {
  const name = req.session.name;
  const author = req.session.user;
  const tasks = await Task.find({ author: author });

  res.render("task", { tasks, name });
};

exports.editTask = async (req, res) => {
  const id = req.params.id;
  const des = req.body.des;
  console.log(id);
  const task = await Task.findById(id);
  if (!task) {
    return;
  }
  const success = await task.updateOne({ des: des });
  if (success) {
    //reload page
    res.redirect("/tasks");
  } else {
  }
};

exports.changeEdit = async (req, res) => {
  const name = req.session.name;
  const edit = 2;
  const id = req.params.id;
  const author = req.session.user;
  const tasks = await Task.find({ author: author });

  res.render("task", { edit, id, tasks, name });
};

exports.createTask = async (req, res) => {
  const task = new Task(req.body);
  task.author = req.session.user;
  console.log(task);
  if (!task.des) {
    res.send('<script>alert("Task must have description")</script>' + 
    '<script>window.location.href = "/tasks"</script>')

    return;
  }
  const success = await Task.create(task);
  if (success) {
    res.redirect("/tasks");
  } else {
  }
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  console.log(req.params);
  if (!id) {
    return;
  }
  const exist = await Task.findById(id);
  if (!exist) {
    res.redirect("/tasks");
    console.log("not found");
    return;
  }

  const status = exist.deleteOne();

  if (status) {
    //reload page
    res.redirect("/tasks");
  } else {
  }
};
