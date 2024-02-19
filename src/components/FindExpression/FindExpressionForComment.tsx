import GetUser from '../../constants/GetUser';
import Expressions from '../../types/Post/Expressions';

type Props = {
  expressions: Expressions;
};

//* show the expression name and imageB when the user subscribe
const FindExpressionForComments = (props: Props) => {
  const user = GetUser;
  const { expressions } = props;

  let name: string = '';

  Object.keys(expressions).forEach((key: string) => {
    for (const subscriber of expressions[key as keyof Expressions]!) {
      if (subscriber === user._id) {
        name = key;
      }
    }
  });

  return { html: <div className='identifier'>{name || 'like'}</div>, name };
};

export default FindExpressionForComments;
