// This File for Store Cache Data & Return Cache Data

/**
 * This function stores data in a cache using the provided authentication data and data path.
 * @param {Store_Cache_Data}  - The `Store_Cache_Data` function takes in an object with two properties:
 * @returns The function `Store_Cache_Data` returns a promise that resolves to a boolean value (`true`
 * if the data was successfully stored in the cache, `false` if there was an error).
 */
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

/* `Store_Cache_Data.defaultProps` is setting a default value for the `DataPath` property in the
`Store_Cache_Data` function. If the `DataPath` property is not provided when calling the function,
it will default to `"AuthData"`. This is useful for cases where the function is called multiple
times with the same `DataPath` value, as it saves the caller from having to provide the same value
each time. */
Store_Cache_Data.defaultProps = {
  DataPath: "AuthData"
} // default props for Store Cache Data Function

/**
 * This is a TypeScript React function that returns cached data based on a given data path.
 * @param {Return_Cache_Data}  - The above code defines a function called `Return_Cache_Data` that
 * takes in an object with a single property `DataPath` of type string. The function attempts to open a
 * cache called "Store manager" and then matches the `DataPath` against the cache. If the `DataPath`
 * @returns The function `Return_Cache_Data` returns either `false` if the `CacheData` is undefined or
 * the parsed JSON data from the cache if it exists.
 */
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

/**
 * This is an async function that deletes data from a cache and returns a boolean value indicating
 * whether the deletion was successful or not.
 * @param {Return_Cache_Data}  - The function `Delete_Cache_Data` takes in an object with a property
 * `DataPath` which is a string representing the path of the data to be deleted from the cache. The
 * function returns a promise that resolves to a boolean value indicating whether the data was
 * successfully deleted from the cache or not.
 * @returns a boolean value indicating whether the cache data at the specified path was successfully
 * deleted or not. If the deletion was successful, it returns true, otherwise it returns false.
 */

export async function Delete_Cache_Data({ DataPath }: Return_Cache_Data) {
  try {
    let CacheStatus = await caches.open("Store manager"); // open cache
    let CacheData = await CacheStatus.delete(DataPath); // return data from cache

    // logic
    if(CacheData === undefined){
      return false;
    }
    else{
      return true;
    }

  } catch (error) {
    return false;
  } // catch error
} // Return Cache Data Function
