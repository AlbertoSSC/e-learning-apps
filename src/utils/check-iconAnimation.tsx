import React from 'react';

import {
  outerCircleWrapperStyle,
  outerCircleStyle,
  innerCircleStyle,
  checkStyle,
} from './check-iconAnimation.styles';

const CheckIconAnimation: React.FC = () => {
  return (
    <div css={outerCircleWrapperStyle}>
      <div css={outerCircleStyle}></div>
      <div css={innerCircleStyle}>
        <svg viewBox="0 0 52 52" css={checkStyle}>
          <path d="M12 27 l10 10 l21 -25" />
        </svg>
      </div>
    </div>
  );
};

export default CheckIconAnimation;
