
        const products = [
                        { name: "Laptop", price: 1500, inStock: true },
                        { name: "Phone", price: 800, inStock: false },
                        { name: "Tablet", price: 900, inStock: true },
                        { name: "Monitor", price: 300, inStock: true }
                    ];

        function getProduct(product){
            let result = product.filter(p=>p.inStock && p.price <= 1000).map(user=> `${user.name}: ${user.price}$`);
            return result.length > 0 ? result : "No affordable products in stock.";
        }
        const res = getProduct(products);
        document.getElementById('data').innerHTML = res.join('<br>');