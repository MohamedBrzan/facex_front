import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import me from '../../assets/me_opentowork.jpeg';
import EmojiPicker from 'emoji-picker-react';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import smileFace from '../../assets/smile_face.svg';
import './UploadPost.scss';
import { useEffect, useRef, useState } from 'react';

const UploadPost = () => {
  const showEmojisRef = useRef<HTMLElement>(null);
  const emojis = useRef<HTMLDivElement>(null);
  const hideEmojiRef = useRef<HTMLDivElement>(null);
  const [emoji, setEmoji] = useState<string[]>([]);
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    const show = showEmojisRef.current;
    const emojisSelector = emojis.current;
    const hide = hideEmojiRef.current;

    show!.onclick = () => {
      emojisSelector!.classList.toggle('active');
      hide!.classList.toggle('active');
    };

    hide!.onclick = () => {
      hide!.classList.toggle('active');
      emojisSelector!.classList.toggle('active');
    };

    // if (emoji.length > 0) {
    //   const caretPosition = cursor_position();
    //   const firstPart = value.slice(0, caretPosition);
    //   const secondPart = value.slice(caretPosition);
    //   const newText = value.slice(0, caretPosition) + emoji.join('');
    //   const emojis = emoji.join('');
    //   // setValue( newText);
    //   console.log(firstPart);
    //   console.log(emojis);
    //   console.log(secondPart);
    //   console.log(cursor_position());
    // }
  }, [emoji, value]);

  // function cursor_position() {
  //   const sel: Selection | null = document.getSelection();
  //   sel.modify('extend', 'backward', 'paragraphboundary');
  //   const pos: number = sel.toString().length;
  //   if (sel.anchorNode != undefined) sel.collapseToEnd();
  //   return pos;
  // }

  // Demo:

  // function printCaretPosition(el) {
  //   console.log(cursor_position(), 'length:', el.textContent.trim().length);
  // }
  // useMemo(() => {}, [emoji, value]);

  return (
    <section className='upload_post'>
      <section className='content'>
        <section className='form'>
          <div className='user_card'>
            <figure>
              <img src={me} alt='User' />
            </figure>
            <div className='info'>
              <div className='user'>
                <div className='name'>Mohamed Mahmoud</div>
                <p className='privacy'>Post to Anyone</p>
              </div>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </div>
          <textarea
            name='post_text'
            id='post_text'
            value={value}
            placeholder='What do want to talk about?'
            autoFocus
            onClick={() => setEmoji([])}
            onInput={(e) => {
              setEmoji([]);
              const target = e.target as HTMLTextAreaElement;
              setValue(target.value);
            }}
          ></textarea>
          {/* <div
            ref={postText}
            role='textbox'
            className='post_text'
            contentEditable='true'
            onClick={() => {
              setEmoji([]);
              cursor_position();
            }}
            onKeyUp={() => {
              setEmoji([]);
              cursor_position();
            }}

          ></div> */}

          <figure className='smile_face_selector' ref={showEmojisRef}>
            <img src={smileFace} alt='Emoji' />
          </figure>
        </section>
        <section className='emojis' ref={emojis}>
          <EmojiPicker
            onEmojiClick={(e) => setEmoji((prev) => [...prev, e.emoji])}
          />
        </section>
        <div className='emoji_modal' ref={hideEmojiRef}></div>
      </section>

      <div className='upload_post_modal'></div>
    </section>
  );
};

export default UploadPost;
