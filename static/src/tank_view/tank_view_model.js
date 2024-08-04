odoo.define("web_tank_view.TankModel", function (require) {
    "use strict";
  
    var AbstractModel = require("web.AbstractModel");
  
    const TankModel = AbstractModel.extend({
  
      __get: function () {
        return this.data;
      },
  
      __load: function (params) {
        this.modelName = params.modelName;
        this.domain = [["is_tank", "=", true]];
        // this.domain = params.domain; 
        // It is the better to get domains from params 
        // but we will evolve our module later.
        this.data = {};
        return this._fetchData();
      },
  
      __reload: function (handle, params) {
        if ("domain" in params) {
          this.domain = params.domain;
        }
        return this._fetchData();
      },
  
      _fetchData: function () {
        var self = this;
        return this._rpc({
          model: this.modelName,
          method: "search_read",
          kwargs: {
            domain: this.domain,
          },
        }).then(function (result) {
          self.data.items = result;
        });
      },
    });
  
    return TankModel;
  });
  