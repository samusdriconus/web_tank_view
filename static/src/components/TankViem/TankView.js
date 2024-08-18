/** @odoo-module **/

import { registry } from "@web/core/registry";
const { Component, useState } = owl;


export class TankView extends Component {
    setup(){
        this.state = useState({
            value : "test"
        })
            
    }

    
    
}

TankView.template = 'web_tank_view.TankView'
registry.category('actions').add('web_tank_view.web_tank_view_js', TankView);