import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { Geist, JetBrains_Mono } from "next/font/google";
import "katex/dist/katex.css";

const geist = Geist({
	subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
	subsets: ["latin"],
});

export default function Layout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="en"
			className={jetbrains.className && geist.className}
			suppressHydrationWarning
		>
			<body className="flex flex-col min-h-screen">
				<RootProvider>{children}</RootProvider>
			</body>
		</html>
	);
}
