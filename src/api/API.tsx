const searchOMDB = async (query: string) => {
  try {
    console.log(import.meta.env.VITE_OMDB_API_KEY);
    const response = await fetch(
      `https://www.omdbapi.com/?t=${query}&apikey=${
        import.meta.env.VITE_OMDB_API_KEY
      }`
    );
    console.log('Response:', response);
    
    //turn the querry into data
    const data = await response.json();
    if (!response.ok) {
      throw new Error('invalid API response, check the network tab');
    }
    
    //the querry after it's been converted 
    console.log('Data:', data);
    return data; // return the data
    
  } catch (err) {
    console.log('an error occurred', err);
    return [];
  }
};

export { searchOMDB };
