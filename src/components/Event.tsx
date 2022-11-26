import { TiSpiral } from "react-icons/ti";
import { Typography } from "./Typography";

interface IEventProps {
	title: string;
	description: string;
	onClick: () => void;
}

export const Event = ({ description, title, onClick }: IEventProps) => {
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
			<TiSpiral size={70} color="#F1FF80" />

			<Typography variant="h4">{title}</Typography>
			<Typography variant="body1">
				<span className="text-draculaOrange">{description}</span>
			</Typography>
		</div>
	);
};
