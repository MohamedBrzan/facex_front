type Props = {
  text: string;
};
const Loading = (props: Props) => {
  const { text } = props;

  return <p>{text}</p>;
};

export default Loading;
