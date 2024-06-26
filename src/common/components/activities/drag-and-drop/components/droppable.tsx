import React from 'react';

import { css } from '@emotion/react';

import { useDroppable } from '@dnd-kit/core';

import theme from '@/styles/themes/customMUI.theme';
import * as innerClasses from '../drag-drop.styles';

interface DroppableProps {
  id: string;
  children: React.ReactNode;
  validated: number | null;
  index: number;
}

export const Droppable: React.FC<DroppableProps> = ({
  id,
  children,
  validated,
  index,
}) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  const borderStyle = css`
    border-color: ${validated === null
      ? theme.palette.primary.main
      : validated === index
      ? theme.palette.tertiary.dark
      : theme.palette.error.main};
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
