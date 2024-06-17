import { describe, it, expect } from 'vitest';

import { compareAnswers } from './listen-and-write.helpers';

describe('compareAnswers', () => {
  it('should return true if the user input matches exactly one of the correct answers', () => {
    // Arrange
    const userInput = 'hola';
    const correctAnswers = ['hola', 'adios'];

    // Act
    const result = compareAnswers(userInput, correctAnswers);

    // Assert
    expect(result).toBe(true);
  });

  it('should return true if the user input matches one of the correct answers with different cases', () => {
    // Arrange
    const userInput = 'HoLa';
    const correctAnswers = ['hola', 'adios'];

    // Act
    const result = compareAnswers(userInput, correctAnswers);

    // Assert
    expect(result).toBe(true);
  });

  it('should return true if the user input matches one of the correct answers with accents', () => {
    // Arrange
    const userInput = 'café';
    const correctAnswers = ['café', 'te'];

    // Act
    const result = compareAnswers(userInput, correctAnswers);

    // Assert
    expect(result).toBe(true);
  });

  it('should return true if the user input matches one of the correct answers without accents', () => {
    // Arrange
    const userInput = 'cafe';
    const correctAnswers = ['café', 'te'];

    // Act
    const result = compareAnswers(userInput, correctAnswers);

    // Assert
    expect(result).toBe(true);
  });

  it('should return false if the user input does not match any of the correct answers', () => {
    // Arrange
    const userInput = 'hello';
    const correctAnswers = ['hola', 'adios'];

    // Act
    const result = compareAnswers(userInput, correctAnswers);

    // Assert
    expect(result).toBe(false);
  });

  it('should return true if the user input contains extra spaces', () => {
    // Arrange
    const userInput = '  hola  ';
    const correctAnswers = ['hola', 'adios'];

    // Act
    const result = compareAnswers(userInput, correctAnswers);

    // Assert
    expect(result).toBe(true);
  });

  it('should return false if the user input is an empty string', () => {
    // Arrange
    const userInput = '';
    const correctAnswers = ['hola', 'adios'];

    // Act
    const result = compareAnswers(userInput, correctAnswers);

    // Assert
    expect(result).toBe(false);
  });

  it('should return true if the user input is a complex strings', () => {
    // Arrange
    const userInput = ' Holä-  ';
    const correctAnswers = ['hola', 'adios'];

    // Act
    const result = compareAnswers(userInput, correctAnswers);

    // Assert
    expect(result).toBe(true);
  });
});
