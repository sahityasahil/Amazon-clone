let productHTML = '';

products.forEach((products) => {
    productHTML += `
    <div class="product-box">
        <div class="product-img">
            <img src="${products.image}">
        </div>
        <div class="product-info">
            <div class="product-name">
                <p>${products.name}</p>
            </div>
            <div class="product-rating">
                <img src="../images/ratings/rating-${products.rating.stars * 10}.png"><p>${products.rating.count}</p>
            </div>
            <div class="product-price">
                <p>$${(products.price / 100).toFixed(2)}</p>
            </div>
        </div>
        <button class="addtocart-btn js-addtoCart-btn" data-product-id="${products.productId}">Add to Cart</button>
    </div>
    `
})

document.querySelector('.js-shopping-products')
    .innerHTML = productHTML;

document.querySelectorAll('.js-addtoCart-btn')
    .forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            let matchingitem;

            cart.forEach((item) => {
                if (productId === item.productId) {
                    matchingitem = item;
                }
            });

            if (matchingitem) {
                matchingitem.quantity += 1;
            }
            else {
                cart.push({
                    productId: productId,
                    quantity: 1
                })
            }

            let totalCartQuantity = 0;
            cart.forEach((item) => {
                totalCartQuantity += item.quantity;
            })

            document.querySelector('.js-total-cart-quantity')
                .innerHTML = totalCartQuantity;

            // console.log(cart);
            // console.log(totalCartQuantity);
        })
    })
