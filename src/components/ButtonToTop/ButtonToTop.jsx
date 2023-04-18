import * as Scroll from 'react-scroll';
import { Button, ToTop } from './ButtonToTop.styled';
import { useState, useEffect } from 'react';

const ButtonToTop = () => {
  const [visibleButton, setVisibleButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', onSearcScroll);
  });

  const onSearcScroll = () => {
    if (window.pageYOffset > 200) {
      setVisibleButton(true);
    } else {
      setVisibleButton(false);
    }
  };

  const handleClick = () => {
    scrollTop();
  };
  const scrollTop = () => {
    let scroll = Scroll.animateScroll;
    scroll.scrollToTop();
  };

  return (
    <>
      {visibleButton && (
        <Button type="button" onClick={handleClick}>
          <ToTop size={40} />
        </Button>
      )}
    </>
  );
};

export default ButtonToTop;