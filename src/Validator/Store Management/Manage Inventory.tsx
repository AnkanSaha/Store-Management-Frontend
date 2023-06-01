// This File For Validate Manage inventory Form

// types
type str = string;
type num = number;
type bool = boolean;

// interface
interface ValidateAddInventory {
    OwnerEmail: str;
    User_id: str;
    ProductName: str;
    ProductCategory: str;
    ProductSKU: str | undefined;
    ProductQuantity: num;
    ProductPrice: num;
    ProductDescription: str;
}

export async function ValidateAddInventory(data:ValidateAddInventory): Promise<bool> {
  if(data.ProductName === "" || data.ProductName === null || data.ProductName === undefined){
    alert("Please Enter Product Name");
    return false
  }
    else if(data.ProductCategory === "" || data.ProductCategory === null || data.ProductCategory === undefined){
        alert("Please Enter Product Category");
        return false
    }
    else if(data.ProductSKU === "" || data.ProductSKU === null || data.ProductSKU === undefined){
        alert("Please Enter Product SKU");
        return false
    }
    else if(data.ProductQuantity === null || data.ProductQuantity === undefined || data.ProductQuantity <= 0){
        alert("Please Enter Valid Product Quantity");
        return false
    }
    else if(data.ProductPrice === null || data.ProductPrice === undefined || data.ProductPrice <= 0){
        alert("Please Enter Valid Product Price");
        return false
    }
    else if(data.ProductDescription === "" || data.ProductDescription === null || data.ProductDescription === undefined){
        alert("Please Enter Product Description");
        return false
    }
    else{
        return true
    }
};