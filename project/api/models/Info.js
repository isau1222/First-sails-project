/**
 * Info.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  		fullName: {
  			type: 'string',
      	required: true
  		},

  		telephone: {
  			type: 'string',
      	required: true
  		},
  		
  		mail: {
  			type: 'string',
      	required: true
  		}

  }
};

