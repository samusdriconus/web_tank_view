from odoo import fields, models


class View(models.Model):
    _inherit = "stock.location"

    is_tank = fields.Boolean("Is a tank",default=False)
    
