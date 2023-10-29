import _ from 'lodash';

export default function diff(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const uniqKeys = _.sortBy(_.union(keys1, keys2));

  const diffArr = uniqKeys.map((key) => {
    if (Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)) {
      if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
        return { key, value: diff(obj1[key], obj2[key]), status: 'nested' };
      } if (!_.isObject(obj1[key]) || !_.isObject(obj2[key])) {
        if (obj1[key] !== obj2[key]) {
          return {
            key, oldValue: obj1[key], newValue: obj2[key], status: 'changed',
          };
        }
        return { key, value: obj1[key], status: 'unchanged' };
      }
    } else if (Object.hasOwn(obj1, key) && !Object.hasOwn(obj2, key)) {
      return { key, value: obj1[key], status: 'removed' };
    }
    return { key, value: obj2[key], status: 'added' };
  });

  return diffArr;
}
