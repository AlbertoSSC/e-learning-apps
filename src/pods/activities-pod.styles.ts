import theme from '@/styles/themes/customMUI.theme';
import { css } from '@emotion/react';

export const podArticleStyle = css`
  max-width: 1200px;
  columns: 3 400px;
  column-gap: 0;
`;

export const podSectionsStyle = css`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

export const headerStyles = css`
  display: flex;
  justify-content: center;
  padding: 1rem;
  width: 100%;
  max-width: 1200px;
`;

export const titleStyles = css`
  font-family: 'handDrawFont';
  font-weight: bold;
  padding: 1rem;
  color: ${theme.palette.primary.light};
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.8);
  letter-spacing: 2px;
`;
