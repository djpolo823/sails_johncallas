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

    
    const producto = await Articulo.find().populate('material');
    const detalle = await Materialesporarticulo.find().populate('detmaterial');
    console.log(producto);
    console.log(detalle);
    return exits.success({producto});
  }


};
