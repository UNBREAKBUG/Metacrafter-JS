/*
Assignment Requirements:
1. Create a variable that can hold a number of NFTs. What type of variable might this be?
2. Create an object inside your createNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1.
3. Your displayNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name)).
4. For good measure, getTotalNFTs() should return the number of NFTs you have created.
*/

// Declare a variable to store your NFTs
const nftCollection = [];

// This function accepts parameters to create an NFT object with its metadata,
// and adds the NFT object to the collection variable defined above.
function createNFT(godName, realm, abilities) {
    const nftData = {
        name: godName,
        domain: realm,
        powers: abilities
    };
    nftCollection.push(nftData);
}

// Define a function to loop through the NFT collection array and print each NFT's metadata.
function displayNFTs() {
    nftCollection.forEach((nft, index) => {
        console.log(`NFT #${index + 1}`);
        console.log(`Name: ${nft.name}`);
        console.log(`Domain: ${nft.domain}`);
        console.log(`Powers: ${nft.powers}`);
        console.log("");
    });
}

// Function to return the total number of NFTs created.
function getTotalNFTs() {
    return nftCollection.length;
}

// Example usage of the functions defined above.
createNFT("Harshit", "Chandigarh", "Student");
createNFT("Deepak", "YamunaNagar", "Teacher");
createNFT("Vikas", "Mohali", "Director");

displayNFTs();
console.log(`Total NFTs: ${getTotalNFTs()}`);

