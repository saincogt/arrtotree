const _ = require('lodash');
const { getTreeFromArr } = require('.');
const { data, expected } = require('./data');

const testData = _.map(_.range(100), () => [_.shuffle(data)]);

test.each(testData)('[%#] should pass', (d) => {
  const result = getTreeFromArr(d);
  expect(result).toEqual(expected);
});
