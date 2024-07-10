import theme from '@/styles/themes/customMUI.theme';
import { css } from '@mui/material';

export const progressContainer = css`
  display: flex;
  align-items: center;

  @media (width < 800px) {
    max-width: 650px;
  }

  width: 100%;

  border-radius: 24px;
  padding: 0.5rem;

  background: rgba(255, 255, 255, 1);
  backdrop-filter: blur(1px);

  box-shadow: 0px 8px 12px 6px rgba(0, 0, 0, 0.15),
    0px 4px 4px 0 rgba(0, 0, 0, 1);
`;

export const profileStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;

  @media (width < 800px) {
    padding: 0.5rem;
  }
`;

export const progressContent = css`
  padding: 1rem;

  p {
    padding-block: 0.5rem;
    font-weight: 500;
    line-height: 1.2rem;
  }

  h6 {
    line-height: 22px;
  }
`;

export const userStyles = css`
  padding: 0 1rem;
`;

export const userNameStyles = css`
  font-weight: bold;
  color: ${theme.palette.greyColor.main};
  line-height: 1rem;
  padding-block: 0.5rem 0;

  white-space: nowrap;
`;
