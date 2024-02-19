import Expressions from '../types/Post/Expressions';

export default (expressions: Expressions): number => {
  const values = Object.values(expressions);
  let dataLength = 0;
  values.forEach((v) => (dataLength += v.length));
  return dataLength;
};
