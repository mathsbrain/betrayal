import { GiRaven } from "react-icons/gi";
import { Typography } from "./Typography";

interface IOmenProps {
	title: string;
	description: string;
	onClick: () => void;
}

export const Omen = ({ description, title, onClick }: IOmenProps) => {
	return (
		<div
			className="
				flex
				flex-col
				items-center
				justify-start
				gap-5
				text-center
				bg-draculaPurpleDark
				p-5
				rounded-md
				cursor-pointer
				transition-all
				border-2
				border-draculaPurpleDark
				hover:border-draculaBlue
			"
			onClick={onClick}
		>
			<GiRaven size={70} color="#F1FF80" />

			<Typography variant="h4">{title}</Typography>
			<Typography variant="body1">
				<span className="text-draculaOrange">{description}</span>
			</Typography>
		</div>
	);
};
