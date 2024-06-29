import React from 'react';

import { css } from '@emotion/react';

import { useDroppable } from '@dnd-kit/core';

import theme from '@/styles/themes/customMUI.theme';
import * as innerClasses from '../drag-drop.styles';

interface DroppableProps {
  id: string;
  children: React.ReactNode;
  validated: boolean | null;
}

export const Droppable: React.FC<DroppableProps> = ({
  id,
  children,
  validated,
}) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  const borderStyle = css`
    border-color: ${validated === false
      ? theme.palette.error.main
      : theme.palette.primary.main};
  `;

  return (
    <div
      ref={setNodeRef}
      css={[innerClasses.validationStyle(borderStyle, isOver)]}
    >
      {children}
    </div>
  );
};
