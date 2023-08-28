// Require the necessary modules
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const formattedDate = currentDate.toLocaleDateString(undefined, {
  weekday: 'long',
  month: 'long',
  day: 'numeric'
});

app.use(bodyParser.urlencoded({ extended: true }));

// generate static files
app.use(express.static("public"));


// Connect Database
mongoose.connect("mongodb://localhost:27017/todolistDB", { useNewUrlParser: true })

// Schema of a database
const itemSchema = {
  name: String,
}
// Model
const Item = mongoose.model("item", itemSchema)

// Mongoose Document
const item1 = new Item({
  name: "Want to get up early in the morning"
})
const item2 = new Item({
  name: "Reading atleast 2 pages per day"
})
const item3 = new Item({
  name: "Keep learning new things"
})

const defaultItems = [item1, item2, item3]

// New schema
const listSchema = {
  name: String,
  items: [itemSchema],
}

const List = mongoose.model("List", listSchema)

app.get("/", (req, res) => {
  Item.find()
    .then((items) => {
      const foundItems = items.map((foundItem) => foundItem);
      if (foundItems.length === 0) {
        // Inserted Following Items
        Item.insertMany(defaultItems)
          .then(() => {
            console.log("Successfully added fruits to the database.");
          })
          .catch((error) => {
            console.error("Error adding fruits:", error);
          });
        res.redirect("/")
      } else {
        res.render("index.ejs", {
          route: "home",
          dateMonth: formattedDate,
          year: currentYear,
          items: foundItems,
          listTitle: "home",
        });
      }
    })
    .catch((error) => {
      console.error(error);
    });
});

// Creating Custom Lists using Express Route Parameters
app.get("/:customListName", (req, res) => {
  const customList = _.capitalize(req.params.customListName);

  List.findOne({ name: customList })
    .then((foundList) => {
      if (!foundList) {
        console.log("Doesn't exist");
        // Create a new list and save it
        const newList = new List({
          name: customList,
          items: defaultItems,
        });
        newList.save();
        res.redirect('/' + customList)
      } else {
        res.render("index.ejs", {
          route: customList,
          listTitle: foundList.name,
          items: foundList.items,
          year: currentYear,
        });
        console.log("Exists");
      }
    })
    .catch((err) => {
      console.log("error", err);
    });
});


app.post("/", (req, res) => {
  const itemName = req.body.newItem;
  const listName = req.body.list;

  const item = new Item({
    name: itemName,
  })

  if(listName === "home"){
    item.save();
    res.redirect('/');
  }else{
    List.findOne({name: listName})
    .then ((foundList)=>{
      foundList.items.push(item);
      foundList.save();
      res.redirect("/"+ listName);
    })
  }
})

// Deleting items via checkbox
app.post("/delete", (req, res) => {
  const checkedItemId = req.body.checkbox;
  const listName = req.body.listName;

  if(listName === "home"){
    Item.findByIdAndRemove(checkedItemId)
      .then(() => {
        console.log("Successfully deleted the checked item.");
        res.redirect('/')
      })
      .catch((err) => {
        console.log('error', err)
      })
  }else{
    List.findOneAndUpdate({name: listName},{$pull: {items: {_id: checkedItemId}}})
    .then((foundList) => {
      res.redirect('/' + listName)
    })
    .catch((err) => {
      console.log('error', err)
    })
  }
})

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
})