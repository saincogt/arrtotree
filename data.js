const data = [
  {
    value: '#country_picker',
    displayName: null,
    id: '14',
    parentId: '14',
    selectable: false,
  },
  {
    value: 'Africa',
    displayName: null,
    id: '15',
    parentId: '14',
    selectable: false,
  },
  {
    value: 'Northern Africa',
    displayName: null,
    id: '16',
    parentId: '15',
    selectable: false,
  },
  {
    value: 'DZ',
    displayName: 'ALGERIA',
    id: '17',
    parentId: '16',
    selectable: true,
  },
  {
    value: 'EG',
    displayName: 'EGYPT',
    id: '18',
    parentId: '16',
    selectable: true,
  },
  {
    value: 'LY',
    displayName: 'LIBYAN ARAB JAMAHIRIYA',
    id: '19',
    parentId: '16',
    selectable: true,
  },
  {
    value: 'MA',
    displayName: 'MOROCCO',
    id: '20',
    parentId: '16',
    selectable: true,
  },
  {
    value: 'SD',
    displayName: 'SUDAN',
    id: '21',
    parentId: '16',
    selectable: true,
  },
  {
    value: 'TN',
    displayName: 'TUNISIA',
    id: '22',
    parentId: '16',
    selectable: true,
  },
  {
    value: 'EH',
    displayName: 'WESTERN SAHARA',
    id: '23',
    parentId: '16',
    selectable: true,
  },
  {
    value: 'SS',
    displayName: 'SOUTH SUDAN',
    id: '24',
    parentId: '16',
    selectable: true,
  },
  {
    value: 'Middle Africa',
    displayName: null,
    id: '26',
    parentId: '15',
    selectable: false,
  },
  {
    value: 'AO',
    displayName: 'ANGOLA',
    id: '27',
    parentId: '26',
    selectable: true,
  },
  {
    value: 'CM',
    displayName: 'CAMEROON',
    id: '28',
    parentId: '26',
    selectable: true,
  },
  {
    value: 'CF',
    displayName: 'CENTRAL AFRICAN REPUBLIC',
    id: '29',
    parentId: '26',
    selectable: true,
  },
  {
    value: 'TD',
    displayName: 'CHAD',
    id: '30',
    parentId: '26',
    selectable: true,
  },
  {
    value: 'Antarctica',
    displayName: null,
    id: '81',
    parentId: '14',
    selectable: false,
  },
  {
    value: 'AQ',
    displayName: 'ANTARCTICA',
    id: '82',
    parentId: '81',
    selectable: true,
  },
  {
    value: 'BV',
    displayName: 'BOUVET ISLAND',
    id: '83',
    parentId: '81',
    selectable: true,
  },
  {
    value: 'TF',
    displayName: 'FRENCH SOUTHERN TERRITORIES',
    id: '84',
    parentId: '81',
    selectable: true,
  },
  {
    value: 'HM',
    displayName: 'HEARD AND MC DONALD ISLANDS',
    id: '85',
    parentId: '81',
    selectable: true,
  },
  {
    value: 'Asia',
    displayName: null,
    id: '86',
    parentId: '14',
    selectable: false,
  },
  {
    value: 'AF',
    displayName: 'AFGHANISTAN',
    id: '87',
    parentId: '86',
    selectable: true,
  },
  {
    value: 'AM',
    displayName: 'ARMENIA',
    id: '88',
    parentId: '86',
    selectable: true,
  },
  {
    value: 'AZ',
    displayName: 'AZERBAIJAN',
    id: '89',
    parentId: '86',
    selectable: true,
  },
  {
    value: 'BD',
    displayName: 'BANGLADESH',
    id: '90',
    parentId: '86',
    selectable: true,
  },
  {
    value: 'BT',
    displayName: 'BHUTAN',
    id: '91',
    parentId: '86',
    selectable: true,
  },
  {
    value: 'BN',
    displayName: 'BRUNEI DARUSSALAM',
    id: '92',
    parentId: '86',
    selectable: true,
  },
  {
    value: 'KH',
    displayName: 'CAMBODIA',
    id: '93',
    parentId: '86',
    selectable: true,
  },
  {
    value: 'CN',
    displayName: 'CHINA',
    id: '94',
    parentId: '86',
    selectable: true,
  },
  {
    value: 'TL',
    displayName: 'TIMOR-LESTE',
    id: '95',
    parentId: '86',
    selectable: true,
  },
  {
    value: 'GE',
    displayName: 'GEORGIA',
    id: '96',
    parentId: '86',
    selectable: true,
  },
  {
    value: 'HK',
    displayName: 'HONG KONG',
    id: '97',
    parentId: '86',
    selectable: true,
  },
  {
    value: 'IN',
    displayName: 'INDIA',
    id: '98',
    parentId: '86',
    selectable: true,
  },
  {
    value: 'ID',
    displayName: 'INDONESIA',
    id: '99',
    parentId: '86',
    selectable: true,
  },
  {
    value: 'JP',
    displayName: 'JAPAN',
    id: '100',
    parentId: '86',
    selectable: true,
  },
];

const expected = [
  {
    value: '#country_picker',
    displayName: null,
    id: '14',
    parentId: '14',
    selectable: false,
    children: [
      {
        value: 'Africa',
        displayName: null,
        id: '15',
        parentId: '14',
        selectable: false,
        children: [
          {
            value: 'Northern Africa',
            displayName: null,
            id: '16',
            parentId: '15',
            selectable: false,
            children: [
              {
                value: 'DZ',
                displayName: 'ALGERIA',
                id: '17',
                parentId: '16',
                selectable: true,
              },
              {
                value: 'EG',
                displayName: 'EGYPT',
                id: '18',
                parentId: '16',
                selectable: true,
              },
              {
                value: 'LY',
                displayName: 'LIBYAN ARAB JAMAHIRIYA',
                id: '19',
                parentId: '16',
                selectable: true,
              },
              {
                value: 'MA',
                displayName: 'MOROCCO',
                id: '20',
                parentId: '16',
                selectable: true,
              },
              {
                value: 'SD',
                displayName: 'SUDAN',
                id: '21',
                parentId: '16',
                selectable: true,
              },
              {
                value: 'TN',
                displayName: 'TUNISIA',
                id: '22',
                parentId: '16',
                selectable: true,
              },
              {
                value: 'EH',
                displayName: 'WESTERN SAHARA',
                id: '23',
                parentId: '16',
                selectable: true,
              },
              {
                value: 'SS',
                displayName: 'SOUTH SUDAN',
                id: '24',
                parentId: '16',
                selectable: true,
              },
            ],
          },
          {
            value: 'Middle Africa',
            displayName: null,
            id: '26',
            parentId: '15',
            selectable: false,
            children: [
              {
                value: 'AO',
                displayName: 'ANGOLA',
                id: '27',
                parentId: '26',
                selectable: true,
              },
              {
                value: 'CM',
                displayName: 'CAMEROON',
                id: '28',
                parentId: '26',
                selectable: true,
              },
              {
                value: 'CF',
                displayName: 'CENTRAL AFRICAN REPUBLIC',
                id: '29',
                parentId: '26',
                selectable: true,
              },
              {
                value: 'TD',
                displayName: 'CHAD',
                id: '30',
                parentId: '26',
                selectable: true,
              },
            ],
          },
        ],
      },
      {
        value: 'Antarctica',
        displayName: null,
        id: '81',
        parentId: '14',
        selectable: false,
        children: [
          {
            value: 'AQ',
            displayName: 'ANTARCTICA',
            id: '82',
            parentId: '81',
            selectable: true,
          },
          {
            value: 'BV',
            displayName: 'BOUVET ISLAND',
            id: '83',
            parentId: '81',
            selectable: true,
          },
          {
            value: 'TF',
            displayName: 'FRENCH SOUTHERN TERRITORIES',
            id: '84',
            parentId: '81',
            selectable: true,
          },
          {
            value: 'HM',
            displayName: 'HEARD AND MC DONALD ISLANDS',
            id: '85',
            parentId: '81',
            selectable: true,
          },
        ],
      },
      {
        value: 'Asia',
        displayName: null,
        id: '86',
        parentId: '14',
        selectable: false,
        children: [
          {
            value: 'AF',
            displayName: 'AFGHANISTAN',
            id: '87',
            parentId: '86',
            selectable: true,
          },
          {
            value: 'AM',
            displayName: 'ARMENIA',
            id: '88',
            parentId: '86',
            selectable: true,
          },
          {
            value: 'AZ',
            displayName: 'AZERBAIJAN',
            id: '89',
            parentId: '86',
            selectable: true,
          },
          {
            value: 'BD',
            displayName: 'BANGLADESH',
            id: '90',
            parentId: '86',
            selectable: true,
          },
          {
            value: 'BT',
            displayName: 'BHUTAN',
            id: '91',
            parentId: '86',
            selectable: true,
          },
          {
            value: 'BN',
            displayName: 'BRUNEI DARUSSALAM',
            id: '92',
            parentId: '86',
            selectable: true,
          },
          {
            value: 'KH',
            displayName: 'CAMBODIA',
            id: '93',
            parentId: '86',
            selectable: true,
          },
          {
            value: 'CN',
            displayName: 'CHINA',
            id: '94',
            parentId: '86',
            selectable: true,
          },
          {
            value: 'TL',
            displayName: 'TIMOR-LESTE',
            id: '95',
            parentId: '86',
            selectable: true,
          },
          {
            value: 'GE',
            displayName: 'GEORGIA',
            id: '96',
            parentId: '86',
            selectable: true,
          },
          {
            value: 'HK',
            displayName: 'HONG KONG',
            id: '97',
            parentId: '86',
            selectable: true,
          },
          {
            value: 'IN',
            displayName: 'INDIA',
            id: '98',
            parentId: '86',
            selectable: true,
          },
          {
            value: 'ID',
            displayName: 'INDONESIA',
            id: '99',
            parentId: '86',
            selectable: true,
          },
          {
            value: 'JP',
            displayName: 'JAPAN',
            id: '100',
            parentId: '86',
            selectable: true,
          },
        ],
      },
    ],
  },
];

module.exports = { data, expected };
