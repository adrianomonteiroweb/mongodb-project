db.produtos.updateMany({ 
  $and: [
    { ingredientes: { $nin: ["ketchup"] } },
    { nome: { $ne: "McChicken" } },
  ],
},
{ 
  $push: {
    ingredientes: "ketchup",
  },
},
{ upsert: true });

db.produtos.find({}, { nome: true, ingredientes: true, _id: false });
