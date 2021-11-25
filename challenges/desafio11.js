db.produtos.updateMany({},
{
  $push: {
    tags: { $each: ["tasty", "combo"], $sort: true },
  },
},
{});

db.produtos.find({}, { nome: true, tags: true, _id: false });
