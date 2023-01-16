
class item {
    public itemId: number;
    private itemName: string;
    public itemPrice: number;
    private itemCategory: string;
    constructor(itemId: number, itemName: string, itemPrice: number, itemCategory: string) {
        this.itemId = itemId;
        this.itemName = itemName;
        this.itemPrice = itemPrice;
        this.itemCategory = itemCategory;
    }
    display = () => {
        console.log("itemId=" + this.itemId + ",itemName=" + this.itemName + ",ItemPrice=" + this.itemPrice + ",ItemCategory=" + this.itemCategory);
 
}

}
//Test
let item1: item = new item(1, 'Mobile', 2000,'phone');
item1.display();
let item2: item=new item(2,'vechicle',14000,'Bike');
item2.display();
let item3: item=new item(3,'Electronics',50000,'laptop');
item3.display();





