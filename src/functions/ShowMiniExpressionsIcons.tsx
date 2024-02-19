import Expressions from '../types/Post/Expressions';
import CheckIdentifierName from './CheckIdentifierName';

const ShowMiniExpressionsIcons = (expressions: Expressions) => {
  const sortable = [];

  for (const expressionKey in expressions) {
    if (expressions[expressionKey as keyof Expressions]!.length) {
      sortable.push([
        expressionKey,
        expressions[expressionKey as keyof Expressions],
      ]);
    }
  }

  sortable.sort(function (a, b) {
    return b[1]!.length - a[1]!.length;
  });

  return sortable.map(([key], i) => (
    <figure className='expression' key={i} title={key as keyof Expressions}>
      <img
        src={CheckIdentifierName(key as keyof Expressions)}
        alt={key as keyof Expressions}
      />
    </figure>
  ));
};

export default ShowMiniExpressionsIcons;
