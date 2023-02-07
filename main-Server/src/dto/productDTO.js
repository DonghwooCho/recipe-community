class ProductDTO {
    menuCode;
    menuName;
    menuPrice;
    categoryCode;
    orderableStatus;

    constructor(data) {
        this.menuCode = data.MENU_CODE;
        this.menuName = data.MENU_NAME;
        this.menuPrice = data.MENU_PRICE;
        this.categoryCode = data.CATEGORY_CODE;
        this.orderableStatus = data.ORDERABLE_STATUS;
    }
}

module.exports = ProductDTO;