import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useMutation, useQueryClient } from "react-query";
import { postProduct } from "../Services";
import { toast } from "react-toastify";
const ProductForm = (props) => {
    const { dialogProps, setProductList, productList } = props
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const notify = () => toast("Product created successfully!",);

    const queryClient = useQueryClient()

    const { mutate, isError, isLoading } = useMutation({
        mutationFn: postProduct,
        onMutate: () => {

        },
        onSuccess: (data, variables, context) => {
            console.log("Dtata", data)
            queryClient.invalidateQueries({
                // queryKey: ['products'],
                exact: true
            })
            setProductList([data])
            notify()
        }
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !description || !price) return;

        try {
            await mutate({ title: name, body: description, reactions: parseFloat(price), userId: Math.floor(Math.random() * 100) });
            setName('');
            setDescription('');
            setPrice('');
            dialogProps.onClose()
        } catch (error) {
            console.error('Failed to add product:', error);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                required
                margin="normal"
            />
            <TextField
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                fullWidth
                required
                margin="normal"
            />
            <TextField
                label="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                fullWidth
                type="number"
                required
                margin="normal"
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ float: "right" }}
                disabled={isLoading}
            >
                {isLoading ? "Adding..." : "Add Product"}
            </Button>
        </form>
    );
};

export default ProductForm;
