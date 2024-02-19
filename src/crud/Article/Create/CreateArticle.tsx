import { useEffect, useRef } from 'react';
import ArticleHeader from './Helpers/ArticleHeader';
import ArticleBody from './Helpers/ArticleBody';
import '../Article.scss';

const CreateArticle = () => {
  const userButtonRef = useRef<HTMLDivElement>(null);
  const userDropDownRef = useRef<HTMLDivElement>(null);
  const manageBtnRef = useRef<HTMLDivElement>(null);
  const manageBtnDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.backgroundColor = '#FFFFFF';
    //* Handle User Dropdown
    const userDropDownbutton = userButtonRef?.current;
    userDropDownbutton!.onclick = () => {
      userDropDownRef.current?.classList.toggle('active');
    };

    //*************************************************** */

    // //* Handle Manage Button Dropdown

    //* Handle User Dropdown
    const manageBtn = manageBtnRef?.current;
    manageBtn!.onclick = () => {
      manageBtnDropdownRef.current?.classList.toggle('active');
    };
  }, []);

  const handleUserDropDownModalOnClick = () =>
    userDropDownRef.current?.classList.remove('active');

  const handleManageModalOnClick = () =>
    manageBtnDropdownRef.current?.classList.remove('active');

  return (
    <section className='create_article'>
      <ArticleHeader
        userButtonRef={userButtonRef}
        userDropDownRef={userDropDownRef}
        manageBtnRef={manageBtnRef}
        manageBtnDropdownRef={manageBtnDropdownRef}
        handleUserDropDownModalOnClick={handleUserDropDownModalOnClick}
        handleManageModalOnClick={handleManageModalOnClick}
      />
      <ArticleBody />
    </section>
  );
};

export default CreateArticle;
