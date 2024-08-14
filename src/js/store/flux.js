const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			
			fetchContacts: async () => {
				try{
					const response = await fetch("https://playground.4geeks.com/contact/docs");
					const dara = await response.json();
					setStore({ constacts: data });
				}
				catch (error) {
					console.error("Error fetching contacts:", error);
				}
			},
			addContact: (contact) => {
				const store = getStore();
				setStore({ contacts: [...store.contacts, contact] });
			},
			updateContact: (index, updatedContact) => {
				const store = getStore();
				const contacts = store.contacts.map((contact, i) => 
				i === index ? updatedContact : contact
			);
			setStore({ contacts: contacts });
			},
				
			deleteContact: (index) => {
				const store = getStore();
				const contacts = store.contacts.filter((_, i) => i !== index);
				setStore({ contacts: contacts });
			

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
