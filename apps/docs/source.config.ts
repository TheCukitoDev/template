import {
	remarkMdxFiles,
	remarkMdxMermaid,
	remarkNpm,
} from "fumadocs-core/mdx-plugins";
import {
	defineConfig,
	defineDocs,
	frontmatterSchema,
	metaSchema,
} from "fumadocs-mdx/config";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.dev/docs/mdx/collections
const remarkInstallOptions = {
	persist: {
		id: "installOptions",
	},
};

export const docs = defineDocs({
	dir: "content/docs",
	docs: {
		schema: frontmatterSchema,
		postprocess: {
			includeProcessedMarkdown: true,
		},
	},
	meta: {
		schema: metaSchema,
	},
});

export default defineConfig({
	mdxOptions: {
		remarkPlugins: [remarkMath, remarkMdxMermaid, remarkMdxFiles, [remarkNpm, remarkInstallOptions]],
		rehypePlugins: (v) => [rehypeKatex, ...v],
	},
});
