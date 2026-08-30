import { describe, it, expect } from 'vitest';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { MonthPipe } from './month.pipe';

registerLocaleData(zh);

describe('MonthPipe 月份转换管道测试', () => {
  const pipeEn = new MonthPipe('en-US');
  const pipeZh = new MonthPipe('zh-Hans');

  it('传入月份索引应能正确格式化为月份名称', () => {
    // Arrange
    const monthIndex = 0; // 1月 (索引 0)

    // Act
    const result = pipeEn.transform(monthIndex);

    // Assert
    expect(result).toBe('January');
  });

  it('传入 1 月索引 (即 2 月) 绝不能因月末日期溢出为 March 或 三月', () => {
    // Arrange: 索引 1 对应 2 月
    const febIndex = 1;

    // Act & Assert
    expect(pipeEn.transform(febIndex)).toBe('February');
    expect(pipeZh.transform(febIndex)).toBe('二月');
  });

  it('传入 11 月索引应能正确转换为 12 月', () => {
    // Arrange
    const monthIndex = 11; // 12月 (索引 11)

    // Act
    const result = pipeEn.transform(monthIndex);

    // Assert
    expect(result).toBe('December');
  });

  it('1 至 12 月索引均应一一对应，且不发生任何月份重复', () => {
    const months = Array.from({ length: 12 }, (_, i) => pipeZh.transform(i));
    expect(months).toEqual([
      '一月',
      '二月',
      '三月',
      '四月',
      '五月',
      '六月',
      '七月',
      '八月',
      '九月',
      '十月',
      '十一月',
      '十二月',
    ]);
  });
});
