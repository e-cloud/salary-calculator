---
name: i18n-management
description: 'Extract, translate, verify, and synchronize i18n messages (zh-CN and en-US) for the FamilyGraph web application. Use when the user asks to manage translations, update language files, fix translation alignment, fill in missing or untranslated strings, or translate UI strings.'
---

# i18n 国际化翻译管理指南

本 Skill 指导 Agent 在 FamilyGraph 前端项目中，如何规范地使用 Angular 原生国际化（`@angular/localize`）机制来进行开发、提取、翻译、对齐和校验，以保证翻译系统的一致性，并最大限度地减少多语言文件的 Git 冲突。

## 开发原则

1. **原生工具链优先**：所有的翻译提取与合并必须使用项目已有的 Angular 国际化命令。**严禁**手动拼接、修改或创建 `messages.xlf` 及 `messages.en-US.xlf` 中的 XML 结构和 `<trans-unit>` 标签。
2. **默认简体中文**：项目以简体中文（`zh-CN`）为源语言（主语言），英文（`en-US`）为目标翻译语言。
3. **严格的物理顺序对齐**：由于 Angular 的提取合并工有时会导致目标文件的翻译条目乱序，必须使用项目内置的 Python 校验脚本对翻译文件中的 XML 节点进行排序重排（`--fix`），确保物理顺序与主文件完全对齐，减少 Git 冲突。

---

## 核心工作流 (SOP)

本套工作流同时适用于以下两种场景：
1. **开发新功能**：在代码中新增了国际化文本。
2. **补全缺失翻译**：需要补齐项目中已有但在英文翻译文件 `messages.en-US.xlf` 中缺失 `<target>` 标签（或 `<target>` 内容为空）的词条。

在遇到翻译相关任务时，请严格按照以下步骤操作：

### 步骤 1：在代码中添加/检查国际化标记

如果是开发新功能，请在页面上新增或修改需要展示的中文文本时，使用 Angular 原生国际化标记。如果是补全缺失翻译，请检查对应代码位置的国际化标记是否正确。

*   **HTML 模板标注方法**：
    使用 `i18n` 属性，并指定唯一的 ID（推荐格式：`page.component.element`）。
    ```html
    <span i18n="@@dashboard.welcome.title">欢迎来到族谱空间</span>
    <input i18n-placeholder="@@dashboard.search.placeholder" placeholder="搜索成员..." />
    ```

*   **TypeScript 文件标注方法**：
    使用 `$localize` 标记文本。
    ```typescript
    const welcomeMessage = $localize `:@@dashboard.welcome.message:欢迎来到族谱空间`;
    ```

*   **注意**：在标注国际化文本的同时，关键的交互元素应优先配置 `data-testid`（例如 `data-testid="search-input"`），以方便自动化测试定位，避免因语言切换导致选择器失效。

### 步骤 2：提取并自动合并翻译

无论是新增词条还是重新提取以检查缺失，都必须运行提取命令，将主语言文案提取出来并自动合并。

运行以下命令（在工作区根目录下）：
```powershell
npx nx extract-i18n family-graph --outputPath=src/locale
```

**执行结果**：
1. 提取最新的词条到主文件 `src/locale/messages.xlf`。
2. **自动合并** 新的 ID 到目标语言文件 `src/locale/messages.en-US.xlf`。此时，`messages.en-US.xlf` 中会为新 ID 创建 `<trans-unit>`，但其 `<target>` 标签尚未翻译（或缺失）。

### 步骤 3：补全英文翻译

打开文件 [messages.en-US.xlf](file:///e:/github/group-e-cloud/family-graph-web-ui/src/locale/messages.en-US.xlf)，查找新合并过来或原本就缺失 `<target>` 的 `trans-unit` 节点（可以通过查找不包含 `<target>` 子节点的 `<trans-unit>` 标签来定位缺失项）。

通常格式如下：
```xml
<trans-unit id="dashboard.welcome.title" datatype="html">
  <source>欢迎来到族谱空间</source>
  <context-group purpose="location">
    <context context-type="sourcefile">src/app/features/dashboard.html</context>
    <context context-type="linenumber">5</context>
  </context-group>
</trans-unit>
```

请在其中加入 `<target>` 标签，填入对应的英文翻译：
```diff
 <trans-unit id="dashboard.welcome.title" datatype="html">
   <source>欢迎来到族谱空间</source>
+  <target>Welcome to the Family Space</target>
   <context-group purpose="location">
     <context context-type="sourcefile">src/app/features/dashboard.html</context>
     <context context-type="linenumber">5</context>
   </context-group>
 </trans-unit>
```

### 步骤 4：对齐翻译物理顺序

提取与合并命令可能会导致目标文件中的条目顺序与主文件不同。为避免 Git 冲突，**必须运行以下脚本以重新排列目标文件的物理节点顺序**：

```powershell
python scripts/verify-i18n.py --fix
```

### 步骤 5：最终校验

最后，执行静态一致性校验，确保没有任何未被提取的 ID 缺失，且物理顺序完美一致：

```powershell
python scripts/verify-i18n.py
```

如果校验脚本输出 `✨ 校验完成` 并且退出码为 `0`，则表示翻译工作流程全部正确完成。
