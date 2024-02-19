import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.scss';

type Props = {
  placeholder?: string;
};

const SearchBar = (props: Props) => {
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const { placeholder } = props;

  useEffect(() => {
    const searchDiv = searchRef.current;
    const inputEle = inputRef.current;
    const searchIcon = iconRef.current;

    searchDiv?.addEventListener('click', () =>
      searchDiv.classList.add('full_width')
    );
    inputEle?.addEventListener('blur', () =>
      searchRef.current?.classList.remove('full_width')
    );
    searchIcon?.addEventListener('click', () => inputEle?.focus());
  }, []);

  return (
    <div className='search' ref={searchRef}>
      <div className='search_icon' ref={iconRef}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <input
        type='search'
        className='search'
        placeholder={`${placeholder}`}
        ref={inputRef}
      />
    </div>
  );
};

export default SearchBar;
