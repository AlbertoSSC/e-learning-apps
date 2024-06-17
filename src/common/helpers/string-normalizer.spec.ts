import { describe, it, expect } from 'vitest';

import { normalizeString } from './string-normalizer';

describe('utils/normalizeString specs', () => {
  describe('normalizeString function', () => {
    it('should remove diacritics from the string', () => {
      // Arrange
      const input = 'café';
      const expectedOutput = 'cafe';

      // Act
      const result = normalizeString(input);

      // Assert
      expect(result).toEqual(expectedOutput);
    });

    it('should remove special characters from the string', () => {
      // Arrange
      const input = 'hello*world!';
      const expectedOutput = 'helloworld';

      // Act
      const result = normalizeString(input);

      // Assert
      expect(result).toEqual(expectedOutput);
    });

    it('should convert the string to lowercase', () => {
      // Arrange
      const input = 'HeLLo WoRLd';
      const expectedOutput = 'hello world';

      // Act
      const result = normalizeString(input);

      // Assert
      expect(result).toEqual(expectedOutput);
    });

    it('should trim leading and trailing spaces', () => {
      // Arrange
      const input = '  hello world  ';
      const expectedOutput = 'hello world';

      // Act
      const result = normalizeString(input);

      // Assert
      expect(result).toEqual(expectedOutput);
    });

    it('should handle empty strings', () => {
      // Arrange
      const input = '';
      const expectedOutput = '';

      // Act
      const result = normalizeString(input);

      // Assert
      expect(result).toEqual(expectedOutput);
    });

    it('should handle strings with only spaces', () => {
      // Arrange
      const input = '     ';
      const expectedOutput = '';

      // Act
      const result = normalizeString(input);

      // Assert
      expect(result).toEqual(expectedOutput);
    });

    it('should handle strings with numbers', () => {
      // Arrange
      const input = 'hello12 3';
      const expectedOutput = 'hello12 3';

      // Act
      const result = normalizeString(input);

      // Assert
      expect(result).toEqual(expectedOutput);
    });

    it('should handle complex strings', () => {
      // Arrange
      const input = '  Héllò-Wörld! ã123 ';
      const expectedOutput = 'helloworld a123';

      // Act
      const result = normalizeString(input);

      // Assert
      expect(result).toEqual(expectedOutput);
    });

    it('should handle ñ', () => {
      // Arrange
      const input = 'caña';
      const expectedOutput = 'caña';

      // Act
      const result = normalizeString(input);

      // Assert
      expect(result).toEqual(expectedOutput);
    });
  });
});
