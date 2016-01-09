var AppDispatcher = require('../dispatcher/AppDispatcher'),
    EventEmitter = require('events').EventEmitter,
    CocktailConstants = require('../constants/CocktailConstants');
    _ = require('lodash');

var _cocktails = [];

function loadProductData(data) {
    _cocktails = data;
}

function createNotification(data) {
    //Create notification
}

// Extend ProductStore with EventEmitter to add eventing capabilities
var ProductStore = _.extend({}, EventEmitter.prototype, {

    // Return Product data
    getCocktails: function() {
        return _cocktails;
    },

    // Emit Change event
    emitChange: function() {
        this.emit('change');
    },

    // Add change listener
    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    // Remove change listener
    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }

});

// Register callback with AppDispatcher
AppDispatcher.register(function(payload) {
    var action = payload.action;
    var text;

    switch(action.actionType) {
        case CocktailConstants.RECEIVE_DATA:
            loadProductData(action.data);
            break;
        default:
            return true;
    }

    // If action was responded to, emit change event
    ProductStore.emitChange();

    return true;

});

module.exports = ProductStore;
