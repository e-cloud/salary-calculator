import { test, expect } from '@playwright/test';
import { CalculatorFormPage } from '../pages/calculator-form.page';
import { CityRecipeDialogPage } from '../pages/city-recipe-dialog.page';

test.describe('Suite 7: 城市计算参数与政策依据双 Tab 弹窗 (City Recipe & Policy Dialog)', () => {
  let formPage: CalculatorFormPage;
  let dialogPage: CityRecipeDialogPage;

  test.beforeEach(async ({ page }) => {
    formPage = new CalculatorFormPage(page);
    dialogPage = new CityRecipeDialogPage(page);
    await formPage.goto();
  });

  test('TC-701: 点击「政策参数」按钮成功唤起弹窗，且默认展示当前城市与年份的政策参数', async () => {
    // Arrange: 切换至北京配方
    await formPage.selectCityRecipe('beijing');

    // Act: 点击政策参数按钮
    await formPage.openPolicyParamsDialog();

    // Assert: 弹窗容器可见且标题正确
    await expect(dialogPage.dialogContainer).toBeVisible();
    await expect(dialogPage.dialogTitle).toHaveText(
      '城市社保公积金计算参数与政策依据',
    );

    // 验证北京最低工资与社平工资
    const minWage = await dialogPage.getMinWageText();
    const avgWage = await dialogPage.getAvgWageText();
    expect(minWage).toContain('2,540');
    expect(avgWage).toContain('12,116');

    // 验证北京五险合计比例
    expect(await dialogPage.getTotalEmployeeRateText()).toContain('10.5%');
    expect(await dialogPage.getTotalEmployerRateText()).toContain('26.7%');
  });

  test('TC-702: 竖向 Tab 切换城市（按需加载验证），右侧横向年份列表与城市参数自适应更新', async () => {
    // Arrange: 打开弹窗
    await formPage.openPolicyParamsDialog();

    // Act 1: 切换至上海
    await dialogPage.selectCity('shanghai');
    expect(await dialogPage.getAvgWageText()).toContain('12,577');

    // Act 2: 切换至广州
    await dialogPage.selectCity('guangzhou');
    expect(await dialogPage.getMinWageText()).toContain('2,680');

    // Act 3: 切换至深圳一档（验证本地在岗社平 16,157 与五险合计）
    await dialogPage.selectCity('shenzhen-1');
    expect(await dialogPage.getMinWageText()).toContain('2,700');
    expect(await dialogPage.getLocalAvgWageText()).toContain('16,157');
    expect(await dialogPage.getAvgWageText()).toContain('9,183');
    expect(await dialogPage.getTotalEmployeeRateText()).toContain('10.2%');
    expect(await dialogPage.getTotalEmployerRateText()).toContain('23.1%');
  });

  test('TC-703: 横向 Tab 切换年份，验证基数范围、社平工资及政策依据准确联动', async () => {
    // Arrange: 打开弹窗并选择北京
    await formPage.openPolicyParamsDialog();
    await dialogPage.selectCity('beijing');

    // Act 1: 默认处于 2026 年度
    expect(await dialogPage.getAvgWageText()).toContain('12,116');

    // Act 2: 点击 2025 年度 Tab
    await dialogPage.selectYear(2025);

    // Assert: 验证更新为 2025 年的社平工资 11,937
    expect(await dialogPage.getAvgWageText()).toContain('11,937');
  });

  test('TC-704: 政策出处外链核对，验证呈现官方文件标题与有效政府官网外链', async () => {
    // Arrange: 打开弹窗并选择北京
    await formPage.openPolicyParamsDialog();
    await dialogPage.selectCity('beijing');

    // Act: 获取政策参考文件链接数量与属性
    const linkCount = await dialogPage.getReferenceLinksCount();
    expect(linkCount).toBeGreaterThan(0);

    const firstLink = await dialogPage.getReferenceLinkInfo(0);
    // Assert: 验证包含合法的 http 链接与 target="_blank"
    expect(firstLink.href).toMatch(/^https?:\/\//);
    expect(firstLink.target).toBe('_blank');
    expect(firstLink.text.length).toBeGreaterThan(5);
  });

  test('TC-705: 弹窗关闭与主界面交互，点击关闭按钮后主表单状态保持完整', async () => {
    // Arrange: 用户在表单输入薪资 25,000
    await formPage.fillSalary(25000);
    await formPage.openPolicyParamsDialog();

    // Act: 点击关闭弹窗
    await dialogPage.close();

    // Assert: 弹窗隐藏且主表单薪资输入框仍为 25000
    await expect(dialogPage.dialogContainer).toBeHidden();
    await expect(formPage.monthSalaryInput).toHaveValue('25000');
  });
});
