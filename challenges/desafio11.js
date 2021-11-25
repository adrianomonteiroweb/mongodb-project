db.produtos.updateMany({},
{
  $push: {
    tags: { $each: ["tasty", "combo"], $sort: false },
  },
},
{});

db.produtos.find({}, { nome: true, tags: true, _id: false });
