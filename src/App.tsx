import { useState } from "react";

import { Event } from "./components/Event";
import { Item } from "./components/Item";
import { Omen } from "./components/Omen";
import { Typography } from "./components/Typography";

import jsonEvents from "../events.json";
import jsonItems from "../items.json";
import jsonOmens from "../omens.json";
import Modal from "./components/Modal";

function App() {
	const [module, setModule] = useState("events");

	const [events, setEvents] = useState(jsonEvents);
	const [items, setItems] = useState(jsonItems);
	const [omens, setOmens] = useState(jsonOmens);

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [titleModal, setTitleModal] = useState("");
	const [descriptionModal, setDescriptionModal] = useState("");
	const [actionModal, setActionModal] = useState<string[]>([]);

	function handleSearch(search: string) {
		if (module === "events") {
			setEvents(jsonEvents.filter((event) => event.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())));
		} else if (module === "items") {
			setItems(jsonItems.filter((item) => item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())));
		} else if (module === "omens") {
			setOmens(jsonOmens.filter((omen) => omen.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())));
		}
	}

	return (
		<div>
			<Modal
				open={isModalOpen}
				setOpen={setIsModalOpen}
				tipo={module}
				title={titleModal}
				description={descriptionModal}
				action={actionModal}
			/>

			<div className="flex flex-col lg:flex-row gap-7">
				<div className="flex flex-col gap-2">
					<Typography variant="body1">Selecione o tipo</Typography>
					<select
						name="witch"
						id="witch"
						className="
							md:min-w-[300px]
							bg-draculaPurpleDark
							border-2
							border-draculaPurpleDark
							transition-all
							px-2
							py-3
							rounded-md
							text-draculaOrange
							focus:border-draculaBlue
						"
						onChange={(e) => setModule(e.target.value)}
					>
						<option value="events">Eventos</option>
						<option value="items">Itens</option>
						<option value="omens">Presságios</option>
					</select>
				</div>
				<div className="flex flex-col gap-2">
					<Typography variant="body1">Pesquisar</Typography>
					<input
						type="text"
						className="md:min-w-[300px] bg-draculaPurpleDark border-2 border-draculaPurpleDark transition-all px-2 py-3 rounded-md text-draculaOrange focus:border-draculaBlue"
						onChange={(ev) => handleSearch(ev.target.value)}
					/>
				</div>
			</div>

			{module === "events" && (
				<div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-5 my-10">
					{events.map((event) => (
						<Event
							key={event.id}
							title={event.title}
							description={event.description}
							onClick={() => {
								setTitleModal(event.title);
								setDescriptionModal(event.description);
								setActionModal(event.action);
								setIsModalOpen(true);
							}}
						/>
					))}
				</div>
			)}
			{module === "items" && (
				<div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-5 my-10">
					{items.map((event) => (
						<Item
							key={event.id}
							title={event.title}
							description={event.description}
							onClick={() => {
								setTitleModal(event.title);
								setDescriptionModal(event.description);
								setActionModal(event.action);
								setIsModalOpen(true);
							}}
						/>
					))}
				</div>
			)}
			{module === "omens" && (
				<div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-5 my-10">
					{omens.map((event) => (
						<Omen
							key={event.id}
							title={event.title}
							description={event.description}
							onClick={() => {
								setTitleModal(event.title);
								setDescriptionModal(event.description);
								setActionModal(event.action);
								setIsModalOpen(true);
							}}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default App;
