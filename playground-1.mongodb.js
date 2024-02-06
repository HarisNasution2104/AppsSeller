// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('test');

// Create a new document in the collection.
db.getCollection('products').insertOne({
    
        "name": "John Doe",
        "email": "john.doe@example.com",
        "phone": "123-456-7890"
      
      
});
