db.produtos.updateMany({ nome: { $in: ["Big Mac", "Quarteirão com Queijo"] } },
  {
    $push: {
      ingredientes: {
        $each: ["bacon"],
      },
    },
  });

db.produtos.find({}, { nome: true, ingredientes: true, _id: false });
