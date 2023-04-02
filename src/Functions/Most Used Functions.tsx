// This File is for the most used functions in the project


//defile types for typescript
type Proptypes = {
    TitleName: string;
}

// This function is for updating the document title

export function Update_Document_Title ({TitleName} : Proptypes){
    if(TitleName === undefined){
        TitleName = "Store Manager"
    }
document.title = TitleName;

}