/* eslint-disable indent */
import { Fragment } from "react";

import { Dialog, Transition } from "@headlessui/react";
import { TiSpiral } from "react-icons/ti";
import { GiDesertSkull, GiRaven } from "react-icons/gi";
import { Typography } from "./Typography";

interface IModalProps {
	open: boolean;
	setOpen: (bool: boolean) => void;
	tipo: string;
	title: string;
	description: string;
	action: string[];
}

export default function Modal({
	open,
	setOpen,
	description,
	tipo,
	title,
	action
}: IModalProps) {
	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog as="div" className="relative z-20" onClose={setOpen}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 top-0 z-20 overflow-y-auto">
					<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<Dialog.Panel className="relative overflow-hidden rounded-lg bg-draculaPurple px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
								<div>
									<div
										className={`mx-auto
											flex
											items-center
											justify-center
											rounded-full`}
									>
										{tipo === "events" ? (
											<TiSpiral size={100} color="#F1FF80" />
										) : tipo === "items" ? (
											<GiDesertSkull size={100} color="#F1FF80" />
										) : (
											<GiRaven size={100} color="#F1FF80" />
										)}
									</div>
									<div className="mt-3 text-center sm:mt-5">
										<div
											className="text-lg font-medium leading-6 text-gray-900"
										>
											<Typography variant="h4">{title}</Typography>
										</div>
										<div className="mt-2">
											<Typography variant="body1"><span className="text-draculaOrange">{description}</span></Typography>
										</div>
										<div className="mt-4">
											{action.map((i) => (
												<div key={i}>
													<Typography variant="body1">{i}</Typography>
												</div>
											))}
										</div>
									</div>
								</div>
								<div className="mt-5 sm:mt-6">
									<button
										type="button"
										className="inline-flex w-full justify-center rounded-md border border-transparent bg-draculaBlue px-4 py-2 text-base font-medium text-draculaPurpleDark shadow-sm transition-all hover:bg-draculaBlueDark sm:text-sm"
										onClick={() => setOpen(false)}
									>
										<span className="font-pop font-bold">Ok</span>
									</button>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
}
