// Simple function to fetch users from a free API
export async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const data = await response.json();
    return data.slice(0, 5); // Return only 5 users for simplicity
  } catch (error) {
    console.error(error);
    return [];
  }
}
