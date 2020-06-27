import React, { useState, useMemo, useCallback } from 'react';
import TextArea from './TextArea';
import VisualizedData from './VisualizedData/VisualizedData';
import { Footer } from './Footer';
import { Header } from './Header';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '.';
import { textareaSlice } from './features/textarea/textareaSlice';

const minFrameWidth = 100;

export const Page: React.FC = () => {
  const [dragging, setDragging] = useState(false);
  const width = useSelector((state: RootState) => state.textarea.width);

  const { setWidth } = textareaSlice.actions;
  const dispatch = useDispatch();

  const onMouseDown = useCallback(() => {
    setDragging(true);
  }, [setDragging]);
  const onMouseUpOrLeave = useCallback(() => {
    setDragging(false);
  }, [setDragging]);
  const onMouseMove = useCallback(
    (event: React.MouseEvent) => {
      if (dragging) {
        const newWidth = event.clientX;
        if (newWidth > minFrameWidth) {
          dispatch(setWidth(newWidth));
        }
      }
    },
    [dragging, setWidth]
  );

  const leadingStyle = useMemo(() => {
    return {
      width: width,
    };
  }, [width]);

  return (
    <>
      <Header />
      <main
        className="d-flex flex-row flex-grow-1"
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUpOrLeave}
        onMouseLeave={onMouseUpOrLeave}
      >
        <div className="leading-side d-flex flex-column" style={leadingStyle}>
          <section className="flex-grow-1">
            <TextArea />
          </section>
        </div>
        <div
          className="adjuster d-flex justify-content-center align-items-center"
          onMouseDown={onMouseDown}
        >
          <i className="fas fa-ellipsis-v" />
        </div>
        <div className="trailing-side d-flex flex-column flex-grow-1 pr-2 pl-1">
          <div className="flex-grow-1">
            <div className="scroll-wrapper">
              <VisualizedData />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
