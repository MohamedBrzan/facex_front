import like from '../../assets/expressions/thumbsUp.png';
import happy from '../../assets/expressions/happy.png';
import angry from '../../assets/expressions/angry.png';
import surprise from '../../assets/expressions/exciting.png';
import support from '../../assets/expressions/laugh.png';
import love from '../../assets/expressions/love.png';
import sad from '../../assets/expressions/sad.png';
import disgust from '../../assets/expressions/disgust.png';
import fear from '../../assets/expressions/shock.png';
import Expressions from '../../types/Post/Expressions';

type Props = {
  expressions: Expressions;
};

//* show the expression name and imageB when the user subscribe
const FindExpression = (props: Props) => {
  const { expressions } = props;

  const user = JSON.parse(localStorage.getItem('user') ?? '{}');
  let founded: boolean = false;
  let name: string = '';
  Object.keys(expressions).forEach((key: string) => {
    for (const subscriber of expressions[key as keyof Expressions]!) {
      if (subscriber._id === user._id) {
        founded = true;
        name = key;
      }
    }
  });

  const condition =
    name === 'like'
      ? like
      : name === 'love'
      ? love
      : name === 'happy'
      ? happy
      : name === 'support'
      ? support
      : name === 'angry'
      ? angry
      : name === 'disgust'
      ? disgust
      : name === 'sad'
      ? sad
      : name === 'surprise'
      ? surprise
      : fear;
  return founded ? (
    <>
      <figure className='show_interact'>
        <img src={condition} alt={name} />
      </figure>
      <div className='identifier'>{name}</div>
    </>
  ) : (
    <>
      <figure className='show_interact'>
        <img src={like} alt={name} />
      </figure>
      <div className='identifier'>like</div>
    </>
  );
};

export default FindExpression;
