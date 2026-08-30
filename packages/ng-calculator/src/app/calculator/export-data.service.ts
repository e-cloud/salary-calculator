import { Injectable } from '@angular/core';
import { FullYearIncomeInfo, MonthlyIncomeInfo } from 'calculator-core';

@Injectable({
  providedIn: 'root',
})
export class ExportDataService {
  /**
   * 将 12 个月薪资明细与全年汇总生成 CSV 格式内容
   */
  generateCsvContent(
    monthlyIncomes: MonthlyIncomeInfo[],
    summary: FullYearIncomeInfo,
    cityLabel: string = '全国',
    year: number = new Date().getFullYear(),
  ): string {
    const headers = [
      '月份',
      '税前账面工资(元)',
      '五险个人缴费(元)',
      '公积金个人缴费(元)',
      '个人补充公积金(元)',
      '企业补充公积金(元)',
      '专项附加扣除(元)',
      '应税所得额(元)',
      '当月预缴个税(元)',
      '税后到手现金(元)',
      '企业社保成本(元)',
      '企业总成本(元)',
    ];

    const rows: (string | number)[][] = [];

    // 12 个月数据
    monthlyIncomes.forEach((item, index) => {
      rows.push([
        `${item.actualMonth || index + 1}月`,
        item.salary.toFixed(2),
        item.insuranceFullCost.toFixed(2),
        item.housingFund.toFixed(2),
        (item.supplementaryHousingFund || 0).toFixed(2),
        (item.employerCosts.supplementaryHousingFund || 0).toFixed(2),
        item.fullExtraDeduction.toFixed(2),
        item.accumulatedTaxQuota.toFixed(2),
        item.tax.toFixed(2),
        item.cashIncome.toFixed(2),
        item.employerCosts.insuranceFull.toFixed(2),
        item.employerCosts.full.toFixed(2),
      ]);
    });

    // 全年合计行
    const totalExtraDeduction = monthlyIncomes.reduce(
      (acc, cur) => acc + (cur.fullExtraDeduction || 0),
      0,
    );
    rows.push([
      '全年薪资合计',
      summary.bookSalary.toFixed(2),
      (
        summary.employee.endowmentInsurance + summary.employee.healthInsurance
      ).toFixed(2),
      summary.employee.housingFund.toFixed(2),
      (summary.employee.supplementaryHousingFund || 0).toFixed(2),
      (summary.employerCosts.supplementaryHousingFund || 0).toFixed(2),
      totalExtraDeduction.toFixed(2),
      '-',
      summary.prepaidTax.toFixed(2),
      summary.postTaxSalary.toFixed(2),
      (summary.employerCosts.full - summary.bookIncome).toFixed(2),
      summary.employerCosts.full.toFixed(2),
    ]);

    // 年终奖与全年总计行
    if (summary.bonus > 0) {
      rows.push([
        '全年一次性奖金',
        summary.bonus.toFixed(2),
        '0.00',
        '0.00',
        '0.00',
        '0.00',
        '0.00',
        summary.bonus.toFixed(2),
        summary.bonusTax.toFixed(2),
        summary.postTaxBonus.toFixed(2),
        '0.00',
        summary.bonus.toFixed(2),
      ]);
    }

    // 汇算清缴预测行
    if (summary.annualTaxSettlement) {
      const typeText =
        summary.annualTaxSettlement.settlementType === 'refund'
          ? `预计汇算退税: ¥${summary.annualTaxSettlement.amount.toFixed(2)}`
          : summary.annualTaxSettlement.settlementType === 'supplement'
            ? `预计汇算补税: ¥${summary.annualTaxSettlement.amount.toFixed(2)}`
            : '汇算无需退补';
      rows.push([
        '汇算清缴预测',
        typeText,
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
      ]);
    }

    const csvLines = [
      `"${year}年薪税明细测算表 - ${cityLabel}"`,
      headers.join(','),
      ...rows.map((r) => r.map((cell) => `"${cell}"`).join(',')),
    ];

    return '\uFEFF' + csvLines.join('\r\n');
  }

  /**
   * 触发 CSV 文件在浏览器端的下载
   */
  downloadCsv(
    monthlyIncomes: MonthlyIncomeInfo[],
    summary: FullYearIncomeInfo,
    cityLabel: string = '测算结果',
    year: number = new Date().getFullYear(),
  ): void {
    const csvContent = this.generateCsvContent(
      monthlyIncomes,
      summary,
      cityLabel,
      year,
    );
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `薪税明细表_${cityLabel}_${year}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
}
