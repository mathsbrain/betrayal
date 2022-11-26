/* eslint-disable indent */
import { ReactNode } from "react";

interface ITypographyProps {
	variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "overline";
	children: ReactNode;
}

export const Typography = ({
	variant,
	children
}: ITypographyProps) => {
	switch (variant) {
		case "h1":
			return <h1 className="font-pop text-draculaGreen text-[4rem] leading-[5rem] font-semibold">{children}</h1>;

		case "h2":
			return <h2 className="font-pop text-draculaGreen text-[3rem] leading-[4rem] font-semibold">{children}</h2>;

		case "h3":
			return <h3 className="font-pop text-draculaGreen text-[2rem] leading-[3rem] font-semibold">{children}</h3>;

		case "h4":
			return <h4 className="font-pop text-draculaGreen text-[1.5rem] leading-[2.25rem] font-semibold">{children}</h4>;

		case "h5":
			return <h5 className="font-pop text-draculaGreen text-[1.25rem] leading-[1.8rem] font-semibold">{children}</h5>;

		case "h6":
			return <h6 className="font-pop text-draculaGreen text-[1.1rem] leading-[1.75rem] font-semibold">{children}</h6>;

		case "subtitle1":
			return <p className="text-[1rem] leading-[1.5rem] font-semibold">{children}</p>;

		case "subtitle2":
			return <p className="text-[0.8rem] leading-[1.3rem] font-semibold">{children}</p>;

		case "body1":
			return <p className="text-[1rem] text-draculaPink leading-[1.5rem] font-medium">{children}</p>;

		case "body2":
			return <p className="text-[0.8rem] text-draculaPink leading-[1.3rem] font-medium">{children}</p>;

		case "caption":
			return <span className="text-[0.75rem] leading-[1.1rem] font-medium">{children}</span>;

		case "overline":
			return <span className="text-[0.75rem] leading-[1.1rem] font-bold uppercase">{children}</span>;
	}
};
