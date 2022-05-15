import { useEffect, useReducer, useRef, useState } from 'react';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import CarouselItem from './CarouselItem';

import classes from './Carousel.module.scss';

import useWindowSize from 'hooks/use-window-size';

const sliderInitialState = {
  positionX: 0,
  disableLeftArrow: true,
  disableRightArrow: false,
};

const sliderReducer = (state, action) => {
  if (action.type === 'SLIDE') {
    const newPositionX = state.positionX + action.payload.scrollWidth;
    const disableLeftArrow = newPositionX === 0;
    const disableRightArrow =
      newPositionX === action.payload.maxSliderPositionX;
    return { positionX: newPositionX, disableLeftArrow, disableRightArrow };
  }
};

const Carousel = (props) => {
  const [itemPerSlide, setItemPerSlide] = useState(3);
  const [offsetWidth, setOffsetWidth] = useState();
  const [sliderState, dispatchSlider] = useReducer(
    sliderReducer,
    sliderInitialState
  );
  const sliderContentRef = useRef(null);
  const [width] = useWindowSize();

  const { positionX, disableLeftArrow, disableRightArrow } = sliderState;
  const itemWidth =
    (offsetWidth - (itemPerSlide - 1) * 50 - itemPerSlide * 60) / itemPerSlide;
  const maxSliderPositionX =
    (Math.ceil(props.items.length / itemPerSlide) - 1) * itemWidth + 110;

  useEffect(() => {
    if (width >= 1025) {
      setItemPerSlide(4);
    } else if (width >= 769 && width < 1025) {
      setItemPerSlide(3);
    } else if (width >= 481 && width < 768) {
      setItemPerSlide(2);
    } else if (width >= 320 && width < 480) {
      setItemPerSlide(1);
    }
    setOffsetWidth(sliderContentRef.current?.offsetWidth || 0);
  }, [width]);

  const carouselItemList = props.items.map((item) => {
    return (
      <CarouselItem key={item.id} itemDetails={item} itemWidth={itemWidth} />
    );
  });

  useEffect(() => {
    sliderContentRef.current.scrollTo({
      left: positionX,
      behavior: 'smooth',
    });
  }, [positionX]);

  const leftArrowClickHandler = () => {
    const scrollWidth = -(itemWidth + 110);

    dispatchSlider({
      type: 'SLIDE',
      payload: { scrollWidth, maxSliderPositionX },
    });
  };
  const rightArrowClickHandler = () => {
    const scrollWidth = itemWidth + 110;

    dispatchSlider({
      type: 'SLIDE',
      payload: { scrollWidth, maxSliderPositionX },
    });
  };

  return (
    <div className={classes.carousel}>
      <button
        className={classes['icon-container']}
        onClick={leftArrowClickHandler}
        disabled={disableLeftArrow}
      >
        <FiChevronLeft className={classes.icon} />
      </button>
      <div ref={sliderContentRef} className={classes['slider-content']}>
        {carouselItemList}
      </div>
      <button
        className={classes['icon-container']}
        onClick={rightArrowClickHandler}
        disabled={disableRightArrow}
      >
        <FiChevronRight className={classes.icon} />
      </button>
    </div>
  );
};

export default Carousel;
