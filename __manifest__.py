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
    'qweb': [

    ],
    'installable': True,
    'application': False,
    'auto_install': False,
}