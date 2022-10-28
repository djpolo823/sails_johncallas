module.exports = {
friendlyName: 'View precios',


  description: 'Display "Precios" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/precios'
    }

  },


  fn: async function (inputs, exits) {

    // Respond with view.

    const producto = await Articulo.find();
    const detalle = await Materialesporarticulo.find().populate('detmaterial');
    
    producto.forEach(element => {
      element.materiales= detalle.filter(item=> item.matxart==element.id);
    });
    producto.forEach(x=> console.log(x.materiales))
    return exits.success({producto, detalle});
  }
};