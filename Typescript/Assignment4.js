var item = /** @class */ (function () {
    function item(itemId, itemName, itemPrice, itemCategory) {
        var _this = this;
        this.display = function () {
            console.log("itemId=" + _this.itemId + ",itemName=" + _this.itemName + ",ItemPrice=" + _this.itemPrice + ",ItemCategory=" + _this.itemCategory);
        };
        this.itemId = itemId;
        this.itemName = itemName;
        this.itemPrice = itemPrice;
        this.itemCategory = itemCategory;
    }
    return item;
}());
//Test
var item1 = new item(1, 'Mobile', 2000, 'phone');
item1.display();
var item2 = new item(2, 'vechicle', 14000, 'Bike');
item2.display();
var item3 = new item(3, 'Electronics', 50000, 'laptop');
item3.display();
