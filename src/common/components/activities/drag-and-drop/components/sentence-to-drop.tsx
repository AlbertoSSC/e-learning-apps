import { css } from "@emotion/react";

import { Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

import * as innerClasses from "../drag-drop.styles";

interface Props {
  index: number;
  sentence: string;
  activeBoxIndex: number | null;
  onDragLeave: () => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
  onDrop: (index: number) => void;
  droppedItems: (string | null)[];
  validated: number | null;
}

export const SenteceToDrop: React.FC<Props> = ({
  index,
  sentence,
  activeBoxIndex,
  onDragLeave,
  onDragOver,
  onDrop,
  droppedItems,
  validated,
}) => {
  const borderStyle = css`
    ${validated === null
      ? blue[700]
      : validated === index
      ? " green"
      : " crimson"};
  `;

  return (
    <div id={`sentence-text-${index}`} css={innerClasses.sentenceText}>
      <Typography component="span">{sentence}</Typography>

      <div
        id={`sentence-droppable-box-${index}`}
        css={innerClasses.validationStyle(
          borderStyle,
          activeBoxIndex,
          index
        )}
        onDragOver={(e) => onDragOver(e, index)}
        onDragLeave={onDragLeave}
        onDrop={() => onDrop(index)}
      >
        {droppedItems[index]}
      </div>
    </div>
  );
};
