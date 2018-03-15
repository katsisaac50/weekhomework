import { ShoppingList, Item, PremiumItem } from './shopping_list';
import { start } from 'repl';

// here I start to use my classes
const my_shopping_list = new ShoppingList();
const my_premium_shopping_list = new ShoppingList();
const total1 = my_shopping_list.totalCost();
const item = new Item("Apple", 60);
const item2 = new Item("Oranges", 100);
const item3 = new Item("Oranges", 100);
const premium_item = new PremiumItem("supermario", 150, 838373);

my_shopping_list.addItem(item);
my_shopping_list.addItem(item2);

my_premium_shopping_list.addItem(premium_item);
const marcos_price = my_shopping_list.searchByName("Isaac");
console.log('marcos_price', marcos_price);
console.log(my_shopping_list.list_of_items);
console.log(my_premium_shopping_list.list_of_items);
console.log(total1);