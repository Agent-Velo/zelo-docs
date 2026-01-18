import { defineConfig, defineDocs } from 'fumadocs-mdx/config';
import { remarkMdxFiles } from 'fumadocs-core/mdx-plugins/remark-mdx-files';

export const docs = defineDocs({
  dir: 'content/docs',
});

export default defineConfig({
    mdxOptions: {
        remarkPlugins: [remarkMdxFiles],
    }
});
