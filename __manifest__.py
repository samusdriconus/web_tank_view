{
    'name': 'Web Tank View',
    'version': '17.0',
    'category': 'Warehouse',
    'summary': 'Add a tank view for stock locations',
    'description': """
        This module adds a custom view for stock locations to display them in a tank format.
    """,
    'author': 'Saidi Oussama',
    'depends': ['stock', 'web'],
    'data': [
       'views/stock_view.xml',
    ],
    'assets': {
    'web.assets_backend': [
        'web_tank_view/static/src/xml/tank_view.xml',
        'web_tank_view/static/src/tank_view/tank_view_conroller.js',
        'web_tank_view/static/src/tank_view/tank_view_model.js',
        'web_tank_view/static/src/tank_view/tank_view_renderer.js',
        'web_tank_view/static/src/tank_view/tank_view.js',
        'web_tank_view/static/src/components/TankItem.js',
        'web_tank_view/static/src/components/TankItem.xml',
    ],
   
   
},
    'installable': True,
    'application': False,
    'auto_install': False,
}