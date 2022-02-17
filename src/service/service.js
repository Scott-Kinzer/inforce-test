export const service = {
    fetchProducts: () => {
        return fetch('http://localhost:3004/products').then(data => data.json());
    }
}