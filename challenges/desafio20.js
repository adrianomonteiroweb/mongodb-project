db.produtos.updateMany({ nome: "Big Mac" },
  { $unset: { curtidas: { $exists: true } } },
);

db.produtos.find({}, { nome: true, curtidas: true, _id: false });
