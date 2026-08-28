---
trigger: model_decision
description: 涉及任何前端测试 (Test, Spec, Unit Test)、修复测试、增加测试覆盖率、或编写新组件时的强制性规范。
---

# 前端自动化测试标准 (Frontend Testing Standards)

## 1. 核心原则
- **Always Read the Guide**: 在执行任何测试相关任务前，**必须**阅读 `docs/实现指导/前端自动化测试规范.md`。
- **No Implementation Details**: 严禁测试组件私有属性、方法或内部状态 (e.g., `component['privateMethod']` or `fixture.componentInstance.prop`)。
- **Behavior Driven**: 测试必须模拟用户行为 (Use `userEvent`) 并验证 DOM 结果 (Use `screen.getBy*`)，禁止使用`getByText/getByRole`。
- **AAA Pattern**: 所有测试必须显式包含 `// Arrange`, `// Act`, `// Assert` 注释。

## 2. 选择器策略 (Selector Strategy)
- **i18n Resilience**: 鉴于多语言环境，**优先使用 `data-testid`** 定位元素，而非依赖不稳定的文本内容。
- **Output Contract**: 针对 `Dialog` 等组件，必须验证 `Output` (如 `close` 时的返回值) 符合契约。

## 3. 工具链
- **Library**: 必须使用 `@testing-library/angular` 进行渲染和交互。
- **Strict Mode**: 保持 TypeScript Strict Mode 检查。

## 4. 实现参考
- **样例**: 设计测试前，必须参考其他现存组件的测试模式，定义的mock等可行测试配置，禁止重复造轮子