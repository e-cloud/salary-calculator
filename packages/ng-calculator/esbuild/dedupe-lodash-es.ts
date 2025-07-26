import { Plugin } from 'esbuild';

const dedupeLodashEs: Plugin = {
  name: 'dedupe-lodash-es',
  setup(build) {
    // 捕获所有 lodash-es 的导入请求
    build.onResolve({ filter: /^lodash-es(\/.*)?$/ }, (args) => {
      // 强制解析到 根目录 node_modules/lodash-es
      const target = args.path === 'lodash-es' ? 'lodash-es' : args.path;
      return {
        path: require.resolve(target, { paths: [process.cwd()] }),
        namespace: 'file',
      };
    });
  },
};

export default dedupeLodashEs;
