import { css } from '@mui/material';

export const progressContainer = css`
  display: flex;
  align-items: center;

  border-radius: 24px;
  padding: 0.5rem;

  background: rgba(220, 220, 220, 0.3);
  backdrop-filter: blur(10px);

  box-shadow: 0px 8px 12px 6px rgba(0, 0, 0, 0.15),
    0px 4px 4px 0 rgba(0, 0, 0, 1);
`;

export const profileStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const progressContent = css`
  padding: 1rem;
`;

export const userStyles = css`
  padding: 0 1rem;
`;
