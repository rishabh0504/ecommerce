

const contents = {
    privateContent: [
        {
          additionalServices: "Additional Services",
          type: "category",
          elements: [
            { "Add Product": "addProduct" },
            { "My Products": "myProduct" },
            { "My Wishlist": "wishlist" },
            { "My Orders": "orders" }
          ]
        }
      ],
     
      user: {}
};

export default function(state = contents, action) {

    switch (action.type){


    }


    return state;
}