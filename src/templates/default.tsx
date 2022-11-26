import { ReactNode } from "react";

interface ITemplateProps {
	children: ReactNode;
}

export const DefaultTemplate = ({ children }: ITemplateProps) => {
	return (
		<main className="bg-draculaPurple min-h-screen">
			<div className="mx-auto md:w-8/12 py-10 px-2">
				{children}
			</div>
		</main>
	);
};
