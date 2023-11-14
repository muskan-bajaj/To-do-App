const express = require("express");
const app = express();
const db = require("./db");
const taskModel = require("./taskModel");
const HeapSort = require("./Heap_sort");
const heapSort = new HeapSort();

async function getTask(req, res, next) {
  try {
    var result = await taskModel.find({});
    var uniquePriority = [];
    result.forEach((e) => {
      if (!uniquePriority.includes(e.Priority)) {
        uniquePriority.push(e.Priority);
      }
    });
    uniquePriority.sort();
    heapSort.setArray(result);
    heapSort.sortArray();
    var temp = heapSort.getArray();
    var final = [];
    uniquePriority.forEach((e) => {
      var tempHeapSort = new HeapSort("Index");
      tempHeapSort.setArray(temp.filter((ele) => ele.Priority == e));
      tempHeapSort.sortArray();
      tempHeapSort.getArray().forEach((task) => {
        final.push(task);
      });
    });
    res.json(final.reverse());
  } catch (err) {
    res.sendStatus(400);
    console.log(err);
  }
}

async function insertTask(req, res, next) {
  try {
    const locale = "en-IN";
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    var count = await taskModel.find({}).countDocuments();
    req.body.Completed = false;
    req.body.createdOn = new Date().toLocaleDateString(locale, options);
    req.body.Index = count + 1;
    var result = await taskModel.create(req.body);
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(400);
    console.log(err);
  }
}

async function toggleTask(req, res, next) {
  try {
    const { taskid, completed } = req.query;
    await taskModel.findByIdAndUpdate(taskid, {
      Completed: completed == "true",
    });
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(400);
  }
}

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE,OPTIONS"
  );

  next();
});

app.get("/getTask", getTask);
app.post("/addTask", insertTask);
app.get("/toggleTask", toggleTask);
app.listen(8080, async () => {
  await db.config();
  console.log("server started");
});
