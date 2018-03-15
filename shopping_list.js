// Contact list class
// Add a contact
// Remove a contact

/**
 * Class for create contact list
 */
export class ShoppingList {

    constructor() {
        this.list_of_items = [];
    }

    /**
     * Add a contact to the contact list
     * @param {*} item is an object that reppresnt a contact
     * @description
     * first create a new contact with the class Contact like so:
     * @example
     * const contact = new Contact("marco", 42838188);
     * my_contact_list.addContact(contact);
     */
    addItem(item) {
        // I need to check if contact exist
        let exist = false;
        this.list_of_items.forEach((item_in_the_list) => {
            exist = (item.name === item_in_the_list.name || item.price === item_in_the_list.price)
        });
        if (exist) {
            // do nothing
        } else {
            this.list_of_items.push(item);
        }
    }

    /**
     * Remove a contact at specific index
     * @param {number} i is the index of the array of the contact list
     */
    removeItem(i) {
        if (this.list_of_items[i]) {
            this.list_of_items.splice(i, 1);
        }
    }

    /**
     * remove all contacts
     */
    removeAllItems() {
        this.list_of_items = [];
    }

    totalCost(item) {
        function totalCost() {
            let total = 0;
            for (let i = 0; i < this.list_of_items.length; i++)
                total += this.list_of_items[i].price;
            return total;
        }

    };

    /**
     * 
     * @param {string} name of the contact
     */
    searchByName(name) {
        let price;
        this.list_of_items.forEach((item) => {
            if (item.name === name) {
                price = item.price;
            }
        });
        return price;
    }
}

export class Item {
    /**
     * 
     * @param {string} name is the name of the contact
     * @param {number} price is the phone number of the contact
     */
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

export class PremiumItem extends Item {
    /**
     * 
     * @param {string} name is the name of the contact
     * @param {number} price is the phone number of the contact
     * @param {number} special_price is the secret phone number of the contact
     */
    constructor(name, price, special_price) {
        super(name, price);
        this.special_price = special_price;
    }
}