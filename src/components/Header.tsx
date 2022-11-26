import { Typography } from "./Typography";

export const Header = () => {
	return (
		<header className="py-5 bg-draculaPurpleDark">
			<div className="mx-auto md:w-8/12 px-2 flex gap-2 items-center">
				<Typography variant="h3">Betrayal</Typography>
				<Typography variant="h6"><span className="text-draculaYellow">at the House on the Hill</span></Typography>
			</div>
		</header>
	);
};
