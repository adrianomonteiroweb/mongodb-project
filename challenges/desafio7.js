db.produtos.updateMany({},
  {
    $pull: {
      ingredientes: { $in: ["cebola"] },
    },
  },
  { multi: true });

db.produtos.find({}, { nome: true, ingredientes: true, _id: false });
