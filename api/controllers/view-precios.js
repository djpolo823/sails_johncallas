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

    const precio_productos = await Materialesporarticulo.find().populate('articulos');
    console.log(precio_productos);
    return exits.success({precio_productos});

  }


};
