// This schema is copied from the example and might not be the schema for 277 

const defaultSchema = {
    'start': 'ISA', // What segment starts the group
    'end': 'IEA', // What segment ends the group
    'name': 'Envelope', // What is the name of the group
    'groups': [ // Nested groups
        {
            'start': 'BPR',
            'terminators': ['N1'],
            'name': 'headers'
        },
        {
            'start': 'N1',
            'terminators': ['LX'],
            'name': '1000'
        },
        {
            'start': 'LX',
            'name': '2000',
            'terminators': ['SE'],
            'groups': [
                {
                    'start': 'CLP',
                    'name': '2100',
                    'groups': [
                        {
                            'start': 'SVC',
                            'name': '2110',
                        }
                    ]
                }
            ]
        }
    ]

};

module.exports = { defaultSchema };