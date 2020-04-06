const myContacts = [
    {
        id: 1,
        name: 'Alpha Avalon',
        phone: '+1 111 101010',
        email: 'alpha@avalon.org',
        favorite: true,
        rating: 9,
        tags: ['popular', 'cool'] 
    },
    {
        id: 2,
        name: 'Betty Brave',
        phone: '+62 812 242424',
        email: 'betty@bravelian.com' 
    },
    {
        id: 3,
        name: 'Gamma Gacurio',
        phone: '+63 813 363636',
        email: 'gamma@gacurio.dev' 
    }
]

// Create Contact console with method show contact, add contact, filter contact and delete contact

const showContacts = (contacts) => {
    for (let index = 0; index < contacts.length; index++) {
        const contact = contacts[index];
        console.log(`[${contact.id}] ${contact.name} (${contact.phone}) <${contact.email}>`)
        
    }
}

const newContact = {
    id: 4,
    name: 'Intan Adela',
    phone: '+62 821 6610xxxx',
    email: 'intanadhelia655@gmail.com'
}
const addContact = (contact) => {
    myContacts.push(contact)

    showContacts(myContacts)
}

const filterContact = (keyword) => {
    const hasil = myContacts.find((item, index, array) => {
        if(item.name == keyword) {
            return true;
        } else {
            return false;
        }
    })

    console.log(`[${hasil.id}] ${hasil.name} (${hasil.phone}) <${hasil.email}>`)
}

const deleteContact = (id) => {
    const index = myContacts.map(item => {
        return item.id
    }).indexOf(id)

    myContacts.splice(index, 1)
    showContacts(myContacts)
}