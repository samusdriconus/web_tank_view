odoo.define("web_tank_view.TankView", function (require) {
    "use strict";
  
    // Pulling the MVC parts
    const TankController = require("web_tank_view.TankController");
    const TankModel = require("web_tank_view.TankModel");
    const TankRenderer = require("web_tank_view.TankRenderer");
    const AbstractView = require("web.AbstractView");
    const core = require("web.core");

    const RendererWrapper = require("web.RendererWrapper");
    const view_registry = require("web.view_registry");
  
    const _lt = core._lt;
  
    const TankView = AbstractView.extend({
      accesskey: "m",
      display_name: _lt("TankView"),
      icon: "fa-indent",
      config: _.extend({}, AbstractView.prototype.config, {
        Controller: TankController,
        Model: TankModel,
        Renderer: TankRenderer,
      }),
      viewType: "tank_view",
      searchMenuTypes: ["filter", "favorite"],
  
      /**
       * @override
       */
      init: function () {
        this._super.apply(this, arguments);
      },
  
      getRenderer(parent, state) {
        state = Object.assign(state || {}, this.rendererParams);
        return new RendererWrapper(parent, this.config.Renderer, state);
      },
    });
  
    // Make the view of type "tank_view" actually available and valid
    // if seen in an XML or an action.
    view_registry.add("tank_view", TankView);
  
    return TankView;
  });
  