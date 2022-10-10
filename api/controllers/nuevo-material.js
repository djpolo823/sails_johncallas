module.exports = {


  friendlyName: 'Nuevo material',


  description: '',


  inputs: {

  },


  exits: {
    success: {
      responseType: 'redirect'
    }
  },


  fn: async function (inputs, exits) {

    const nuevo_material = await Articulo.create({
      nombreMaterial: "Nuevo producto",
      categoria:      "Nueva categoria",
      unidadMedida:   "Nueva medida",
      precioUnidad:   1000
    })
    // All done.


    return exits.success("/materiales");

  }


};
