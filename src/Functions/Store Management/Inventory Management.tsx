// This file is created by Ankan Saha

// import required modules
import { HTTP_POST, HTTP_PUT } from "../Most Used Functions"; // import HTTP POST Function

// import Validator Functions
import {ValidateAddInventory} from '../../Validator/Store Management/Manage Inventory'; // import Validate Add Inventory Function

// Typescript type
type globe = any; // type for any
type str = string; // type for string
type num = number; // type for number
type bool = boolean; // type for boolean

// Typescript Interface
interface AddInventoryProps {
    OwnerEmail: num;
    User_id: str;
    ProductName: str;
    ProductCategory: str;
    ProductSKU: str;
    ProductQuantity: num;
    ProductPrice: num;
    ProductExpiryDate: str;
    ProductManufacturingDate: str;
    ProductDescription: str;
}

// function  for add inventory

export async function AddInventory_Function(AddInventoryData:AddInventoryProps) : Promise<globe | bool> {
    try{
        let ValidateStatus = await ValidateAddInventory(AddInventoryData); // validate the data
        if(ValidateStatus === true){
            let AddInventoryStatus = await HTTP_POST({
                PostPath: '/post/inventory/add',
                SendData: AddInventoryData
            });
            return AddInventoryStatus;
        }
        else if(ValidateStatus === false){ 
            return false;
        }
    }
    catch(err){
        console.log(err);
    }
}

export async function Edit_Inventory_Function(AddInventoryData:AddInventoryProps) : Promise<globe | bool> {
    try{
        let ValidateStatus = await ValidateAddInventory(AddInventoryData); // validate the data
        if(ValidateStatus === true){
            let AddInventoryStatus = await HTTP_PUT({
                PostPath: '/put/inventory/update',
                SendData: AddInventoryData
            });
            return AddInventoryStatus;
        }
        else if(ValidateStatus === false){ 
            return false;
        }
    }
    catch(err){
        console.log(err);
    }
}