odoo.define("web_tank_view.TankRenderer", function (require) {
    "use strict";
  
    const AbstractRendererOwl = require("web.AbstractRendererOwl");
    const patchMixin = require("web.patchMixin");
    const QWeb = require("web.QWeb");
    const session = require("web.session");
  
    const { useState } = owl.hooks;
  
    class TankRenderer extends AbstractRendererOwl {
      constructor(parent, props) {
        super(...arguments);
        this.qweb = new QWeb(this.env.isDebug(), { _s: session.origin });
        this.state = useState({
          localItems: props.items || [],
        });
      }
  
      willUpdateProps(nextProps) {
        Object.assign(this.state, {
          localItems: nextProps.items,
        });
      }
    }
  
    const components = {
      TreeItem: require("web_tank_view/static/src/components/tree_item/Tank.js"),
    };
    Object.assign(OWLTreeRenderer, {
      components,
      defaultProps: {
        items: [],
      },
      props: {
        arch: {
          type: Object,
          optional: true,
        },
        items: {
          type: Array,
        },
        isEmbedded: {
          type: Boolean,
          optional: true,
        },
        noContentHelp: {
          type: String,
          optional: true,
        },
      },
      template: "web_tank_view.TankRenderer",
    });
  
    return patchMixin(TankRenderer);
  });
  