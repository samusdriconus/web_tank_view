from odoo import fields, models,api


class View(models.Model):
    _inherit = "stock.location"

    is_tank = fields.Boolean("Is a tank",default=False)
    capacity = fields.Float("Capacity of the tank")
    current_quantity = fields.Float(string="Current Quantity")
    product_id = fields.Many2one("product.product","Product contained")


    def compute_current_quantiy(self):
        for rec in self:
            if rec.product_id:
                rec.current_quantity = self.env['stock.quant']._get_available_quantity(rec.product_id,rec)
            else:
                rec.current_quantity = 0

    @api.depends("capacity","current_quantity")
    def _compute_percentage(self):
        for record in self:
            if record.capacity > 0:
                record.fill_percentage = int(record.current_quantity / record.capacity * 100)
            else:
                record.fill_percentage = 0

    fill_percentage = fields.Float(string="Fill (%)", compute="_compute_percentage")

