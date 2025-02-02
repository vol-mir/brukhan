class ApiClient {
    static async get(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error in request', error);
            throw error;
        }
    }
}

export default ApiClient;
