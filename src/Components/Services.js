
const API_BASE_URL = 'https://dummyjson.com/';


// Fetch all products
const fetchProducts = async () => {
    const response = await fetch(`${API_BASE_URL}posts?limit=150`);
    const data = await response.json();
    return data;
};

// Post a new product
const postProduct = async (newProduct) => {
    // Adding a new post will not add it into the server.
    // It will simulate a POST request and will return the new created post with a new id
    // This is just a simulation of a POST request. as per the given documentation, so this can not be shown in the browser UI
    const response = await fetch(`${API_BASE_URL}posts/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct)
    });
    if (!response.ok) {
        throw new Error('Failed to add product');
    }
    return response.json();
};




export { fetchProducts, postProduct };
