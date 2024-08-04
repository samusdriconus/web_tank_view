odoo.define(
    "owl_tutorial_views/static/src/components/tree_item/TankItem.js",
    function (require) {
      "use strict";
      const { Component } = owl;
      const patchMixin = require("web.patchMixin");
  
      const { useState } = owl.hooks;
  
      class TankItem extends Component {
        /**
         * @override
         */
        constructor(...args) {
          super(...args);
          this.state = useState({});
        }
      }
  
      Object.assign(TankItem, {
        components: { TankItem },
        props: {
          item: {},
        },
        template: "web_tank_view.TankItem",
      });
  
      return patchMixin(TankItem);
    }
  );
  