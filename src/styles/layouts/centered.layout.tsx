import React from 'react';

import * as classes from './centered.layout.styles';

interface Props extends React.PropsWithChildren {}

export const CenteredLayout: React.FC<Props> = props => {
  const { children } = props;
  return <div css={classes.centeredLayout}>{children}</div>;
};
