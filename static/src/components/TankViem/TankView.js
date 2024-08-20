/** @odoo-module **/

import { registry } from "@web/core/registry";
const { Component, useState,onWillStart} = owl;
import { useService } from "@web/core/utils/hooks";



export class TankView extends Component {
    setup(){
        this.state = useState({
            tanks : [],
        });
        this.orm = useService('orm');
        this.model = "stock.location"
        onWillStart(async ()=>{
            await this.getAllTasks()
        })
    }

    async getAllTasks(){
        this.state.tanks = await this.orm.searchRead(this.model, [['is_tank','=',true]],['name','fill_percentage'])
    }
    
}

TankView.template = 'web_tank_view.TankView'
registry.category('actions').add('web_tank_view.web_tank_view_js', TankView);