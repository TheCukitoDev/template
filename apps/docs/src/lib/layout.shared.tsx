import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
	return {
		nav: {
			title: (
				<>
					<span className="font-medium in-[.uwu]:hidden in-[header]:text-[15px]">
						cukkito docs
					</span>
				</>
			),
		},
		githubUrl: "https://github.com/thecukitodev/template",
	};
}
