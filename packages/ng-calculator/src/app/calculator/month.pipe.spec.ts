import { describe, it, expect } from 'vitest';
import { MonthPipe } from './month.pipe';

describe('MonthPipe 月份转换管道测试', () => {
  const pipe = new MonthPipe('en-US');

  it('传入月份索引应能正确格式化为月份名称', () => {
    // Arrange
    const monthIndex = 0; // 1月 (索引 0)

    // Act
    const result = pipe.transform(monthIndex);

    // Assert
    expect(result).toBe('January');
  });

  it('传入 11 月索引应能正确转换为 12 月', () => {
    // Arrange
    const monthIndex = 11; // 12月 (索引 11)

    // Act
    const result = pipe.transform(monthIndex);

    // Assert
    expect(result).toBe('December');
  });
});
