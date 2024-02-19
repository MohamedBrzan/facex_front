import { ChangeEvent, FC, useEffect, useRef } from 'react';
import './Input.scss';
interface InputProps {
  type: 'text' | 'number' | 'email' | 'password';
  label: string;
  value: string | number;
  name?: string;
  placeholder?: string;
  error?: boolean;
  disabled?: boolean;
  required?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
}

const Input: FC<InputProps> = ({
  type,
  label,
  value,
  name,
  placeholder,
  error,
  disabled,
  onChange,
  required,
  errorMessage,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef?.current;
    const input = inputRef?.current;
    const label = labelRef?.current;

    input!.onfocus = function () {
      wrapper?.classList.add('active');
      if (!value) {
        label?.classList.add('active');
      }
    };

    input!.onblur = function () {
      wrapper?.classList.remove('active');
      if (!value) {
        label?.classList.remove('active');
      }
    };
  }, [value]);

  return (
    <div className='input_wrapper' ref={wrapperRef}>
      <input
        type={type}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        required={required}
        ref={inputRef}
      />{' '}
      <label ref={labelRef} htmlFor={label}>
        {label}
      </label>
      {error && <p className='error'>{errorMessage}</p>}
    </div>
  );
};

export default Input;
