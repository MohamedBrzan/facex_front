import {
  like,
  happy,
  angry,
  surprise,
  support,
  love,
  sad,
  disgust,
  fear,
} from './Emojis';

const CheckIdentifierName = (name: string) => {
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
      : name === 'fear'
      ? fear
      : like;

  return condition;
};

export default CheckIdentifierName;
