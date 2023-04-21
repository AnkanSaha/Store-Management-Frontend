// This File for Store Cache Data & Return Cache Data

// Store Cache Data

interface Store_Cache_Data {
  AuthData: object;
  DataPath: string;
}

export async function Store_Cache_Data({ AuthData, DataPath }: Store_Cache_Data) {
  try {
    let CacheStatus = await caches.open("Store manager"); // open cache
    await CacheStatus.put(DataPath, new Response(JSON.stringify(AuthData))); // store data in cache
    return true;
  } catch (error) {
    return false;
  } // catch error
} // Store Cache Data Function

Store_Cache_Data.defaultProps = {
  DataPath: "AuthData"
} // default props for Store Cache Data Function

// Function for Return Cache Data
interface Return_Cache_Data {
  DataPath: string;
}
export async function Return_Cache_Data({
  DataPath
}: Return_Cache_Data) {
  try {
    let CacheStatus = await caches.open("Store manager"); // open cache
    let CacheData = await CacheStatus.match(DataPath); // return data from cache

    // logic
    if(CacheData === undefined){
      return false;
    }
    else{
      return await CacheData.json();
    }

  } catch (error) {
    return false;
  } // catch error
} // Return Cache Data Function

Return_Cache_Data.defaultProps = {
  DataPath: "AuthData"
}; // default props for Return Cache Data Function
