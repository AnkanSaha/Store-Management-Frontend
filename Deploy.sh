# Let's build our Production ready version of the app
npm run build

cd ../Store-Management-Backend # Go to Backend Folder
npm run build # Build the Backend App
sudo cp .env ./Build/ # Copy the .env file to the Build Folder

cd ../Store-Management-Frontend # Go to Frontend Folder

# copy the build folder to the backend folder
sudo mv ./dist ../Store-Management-Backend/Build/public

# Let's Build our Production ready version of Backend App
cd ../Store-Management-Backend/Build # Go to Backend Folder
npm run start # Start the Backend App