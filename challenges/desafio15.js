db.produtos.countDocuments({ 
  nome: { $regex: /Mc/i },
},
{ 
  nome: true,
  _id: false,
});
