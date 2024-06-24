import { SerializedStyles } from '@emotion/react';

import {
  circleWrapperStyle,
  outerCircleStyle,
  innerCircleStyle,
  checkStyle,
} from './check-iconAnimation.styles';

interface Props {
  customStyles?: SerializedStyles;
}
export const CheckIconAnimation: React.FC<Props> = props => {
  const { customStyles } = props;
  return (
    <div css={[circleWrapperStyle, customStyles]}>
      <div css={outerCircleStyle}></div>
      <div css={innerCircleStyle}>
        <svg viewBox="0 0 52 52" css={checkStyle}>
          <path d="M12 27 l10 10 l21 -25" />
        </svg>
      </div>
    </div>
  );
};
