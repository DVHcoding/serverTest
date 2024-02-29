

exports.getAllProducts = async (req, res) => {

    res.status(200).json({
        success: true,
        data: {
            name: "product-1",
            price: 3000,
            description: "this is an example product description",
            image: [
                {
                    public_id: "this is a public_id",
                    url: "this is an example image url",
                },
            ],
        }
    });
}