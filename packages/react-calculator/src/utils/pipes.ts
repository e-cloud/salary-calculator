import { format } from 'date-fns';
import zhCN from 'date-fns/locale/zh-CN';

export function month(input: number, locale = zhCN) {
  return format(input, 'MMMM', { locale });
}

const currencyFormatter = new Intl.NumberFormat('zh-CN', {
  style: 'currency',
  currency: 'CNY',
});

export function currency(input: number) {
  return currencyFormatter.format(input);
}

export const NUMBER_FORMAT_REGEXP =
  /^(\[[UCP]\])?(\d+)?\.(\d+)-(\d+)(:[\w-]+)?$/;

function selectStyle(style: string) {
  switch (style) {
    case '[U]':
      return 'unit';
    case '[C]':
      return 'currency';
    case '[P]':
      return 'percent';
    default:
      return 'decimal';
  }
}

export function numberFormat(input: number, numberDigits = '0.0') {
  const parts = numberDigits.match(NUMBER_FORMAT_REGEXP);
  if (parts === null) {
    throw new Error(`${numberDigits} is not a valid digit info`);
  }
  const minIntPart = Math.max(parseInt(parts[2]!, 10), 1);
  const minFractionPart = parseInt(parts[3]!, 10);
  const maxFractionPart = parseInt(parts[4]!, 10);
  const locale = parts[5];

  return new Intl.NumberFormat(locale || 'zh', {
    style: selectStyle(parts[1]!),
    minimumIntegerDigits: minIntPart,
    maximumFractionDigits: maxFractionPart,
    minimumFractionDigits: minFractionPart,
  }).format(input);
}
