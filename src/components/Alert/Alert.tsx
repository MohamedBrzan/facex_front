import './Alert.scss';

type Props = {
  text: string;
};

const Alert = ({ text }: Props) => {
  return (
    <section className='custom_alert'>
      <div className='content'>
        <div className='alert'>{text}</div>
        <div
          className='close_alert'
          onClick={(e) => {
            const target = e.target as HTMLDivElement;
            target.parentElement?.classList.add('d-none');
          }}
        ></div>
      </div>
    </section>
  );
};

export default Alert;
