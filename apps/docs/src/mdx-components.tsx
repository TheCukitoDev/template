import { createGenerator } from "fumadocs-typescript";
import { AutoTypeTable } from "fumadocs-typescript/ui";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import * as TabComponents from "fumadocs-ui/components/tabs";
import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { Mermaid } from "@/components/mdx/mermaid";
import { ImageZoom } from "./components/image-zoom";

const generator = createGenerator();

export function getMDXComponents(components?: MDXComponents): MDXComponents {
	return {
		...defaultMdxComponents,
		Mermaid,
		AutoTypeTable: (props) => (
			<AutoTypeTable {...props} generator={generator} />
		),
		pre: ({ ref: _ref, ...props }) => (
			<CodeBlock {...props}>
				<Pre>{props.children}</Pre>
			</CodeBlock>
		),
		img: (props) => <ImageZoom {...(props as any)} />,
		...components,
		...TabComponents,
	};
}
