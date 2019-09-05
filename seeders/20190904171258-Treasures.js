'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      const treasures_collections = [
        {
          id: 100,
          latitude: 1.33125924,
          longtitude:103.89804864,
          name:'T1'
        },
        {
          id: 101,
          latitude: 1.32255754,
          longtitude:103.89430855,
          name:'T2'
        },
        {
          id: 102,
          latitude: 1.3166356,
          longtitude:103.88912254,
          name:'T3'
        },
        {
          id: 103,
          latitude: 1.31286055,
          longtitude:103.85455645,
          name:'T4'
        },
        {
          id: 104,
          latitude: 1.34439896,
          longtitude:103.87659381,
          name:'T5'
        },
        {
          id: 105,
          latitude: 1.33616189,
          longtitude:103.87708662,
          name:'T6'
        },
        {
          id: 106,
          latitude: 1.32552844,
          longtitude:103.86910143,
          name:'T7'
        },
        {
          id: 107,
          latitude: 1.32303589,
          longtitude:103.87748154,
          name:'T8'
        },
        {
          id: 108,
          latitude: 1.33465304,
          longtitude:103.87044897,
          name:'T9'
        },
        {
          id: 109,
          latitude: 1.32606138,
          longtitude:103.87930069,
          name:'T10'
        },
        {
          id: 110,
          latitude: 1.25886946,
          longtitude:103.89887904,
          name:'T11'
        },
        {
          id: 111,
          latitude: 1.26973345,
          longtitude:103.8810448,
          name:'T12'
        },
        {
          id: 112,
          latitude: 1.32914713,
          longtitude:103.8334781,
          name:'T13'
        },
        {
          id: 113,
          latitude: 1.32960595,
          longtitude:103.88079366,
          name:'T14'
        },
        {
          id: 114,
          latitude: 1.33700251,
          longtitude:103.84922492,
          name:'T15'
        },
        {
          id: 115,
          latitude: 1.27845714,
          longtitude:103.85717615,
          name:'T16'
        },
        {
          id: 116,
          latitude: 1.36019784,
          longtitude:103.85635821,
          name:'T17'
        },
        {
          id: 117,
          latitude: 1.31551921,
          longtitude:103.8632839,
          name:'T18'
        }
        
      ];
      return queryInterface.bulkInsert('Treasures', treasures_collections, {});
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('Treasures', null, {});
  }
};
