import { defineConfig } from 'vitest/config';
import fs from 'node:fs';
import path from 'node:path';

function angularInlineResources() {
  return {
    name: 'angular-inline-resources',
    transform(code: string, id: string) {
      if (!id.endsWith('.component.ts')) {
        return null;
      }
      const dir = path.dirname(id);
      let newCode = code;

      newCode = newCode.replace(
        /templateUrl:\s*['"]([^'"]+)['"]/g,
        (_, templatePath) => {
          const fullPath = path.resolve(dir, templatePath);
          if (fs.existsSync(fullPath)) {
            const content = fs.readFileSync(fullPath, 'utf-8');
            return `template: ${JSON.stringify(content)}`;
          }
          return `template: ''`;
        },
      );

      newCode = newCode.replace(/styleUrls:\s*\[[^\]]*\]/g, 'styles: []');

      return {
        code: newCode,
        map: null,
      };
    },
  };
}

export default defineConfig({
  plugins: [angularInlineResources()],
  resolve: {
    alias: {
      'calculator-core': path.resolve(
        __dirname,
        '../calculator-core/src/index.ts',
      ),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test-setup.ts'],
    include: ['src/**/*.spec.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './coverage',
      include: ['src/app/**/*.ts'],
      exclude: [
        'src/app/**/*.spec.ts',
        'src/app/app.config.ts',
        'src/app/**/types.ts',
        'src/environments/**',
        'src/test-setup.ts',
      ],
    },
  },
});
