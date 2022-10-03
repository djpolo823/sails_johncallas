module.exports = {


  friendlyName: 'View materiales',


  description: 'Display "Materiales" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/materiales'
    }

  },


  fn: async function (input, exits) {

    // Respond with view.

    const material = await Materiales.find({
      sort: [{categoria: 'ASC'},{nombreMaterial: 'ASC'}]
    })

    /*const material = await Materiales.find({
      where: { categoria: 'Material'},
      sort: [{categoria: 'ASC'},{nombreMaterial: 'ASC'}]
    })*/
    
    return exits.success({material});

  }


};
