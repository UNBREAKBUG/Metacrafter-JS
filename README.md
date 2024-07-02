# Metacrafters

This repository contains a simple JavaScript script designed to manage a collection of Non-Fungible Tokens (NFTs). The script demonstrates fundamental concepts of JavaScript, such as variable manipulation, object creation, array operations, and iteration. It provides functionalities to create, display, and count NFTs with specific attributes such as name, domain, and powers. These NFTs are stored in an array, simulating a basic form of a digital ledger.

Overview of Functionality:

1. NFT Creation: 
The `createNFT` function allows users to generate a new NFT by providing its name, domain, and powers. Each NFT is represented as an object with these properties, and the function appends this object to the `nftCollection` array. This approach encapsulates the metadata for each NFT within a structured format, making it easy to manage and retrieve information.

2. Displaying NFTs: 
The `displayNFTs` function iterates over the `nftCollection` array and prints the metadata of each NFT to the console. This provides a user-friendly way to review all created NFTs and their attributes. By using the `forEach` method, the function ensures clear and concise output, helping users to quickly understand the details of each NFT in the collection.

3. Total Supply Calculation: 
The `getTotalNFTs` function returns the total count of NFTs stored in the `nftCollection` array. This gives a quick overview of the collection size, reflecting the number of unique NFTs that have been created and stored.

This script is a basic example aimed at demonstrating how to manage and manipulate data collections in JavaScript, particularly in the context of NFTs. It can serve as a foundational tool for those looking to understand or build more complex blockchain-based applications and digital asset management systems.
