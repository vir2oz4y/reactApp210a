import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import { useState } from 'react';
import { Product } from './models';
import BurlakPopup, { IPopup } from "../../../../Components/Burlak/BurlakPopup/BurlakPopup";
import { BurlakCreateProductPopup } from './Modals/BurlakCreateProductPopup';
import { BurlakEditProductPopup } from './Modals/BurlakEditProductPopup';
const ProductPage = () => {
    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
        },
        {
            field: 'name',
            headerName: 'name',
        },
        {
            field: 'firstName',
            headerName: 'ProductFirstName',
            flex: 1,
        },
        {
            field: 'lastName',
            headerName: 'ProductLastName',
            flex: 1,
        },
        {
            field: 'category',
            headerName: 'category',
            flex: 1,
        },
        {
            field: 'cena',
            headerName: 'cena',
            flex: 1,
        },
        {
            field: '',
            headerName: '',
            width: 290,
            renderCell: (e: any) => {
                return <div style={{ display: 'flex', gap: '1em' }}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => setEditedProduct(e.row)}
                    >
                        Edit
                    </Button>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => onDeleteClick(e.row.id)}
                    >
                        delete
                    </Button>
                </div>
            },
        }
    ];

    const onDeleteClick = (id: number) => {
        setProduct(prev =>
            prev.filter(el => el.id != id))
    }

    const [Product, setProduct] = useState<Product[]>([
        { id: 1, name: 'Вязанка', firstName: 'Большая', lastName: 'Сырокопченная', category: 'Колбаса', cena: '50' },
    ]);

    const [showCreateProduct, setShowCreateProduct] = useState(false);
    const [editedProduct, setEditedProduct] = useState<Product | null>(null);

    const onCreate = (newProduct: Product) => {
        setProduct(prev => [...prev, newProduct]);

    }

    const onEdit = (Product: Product) => {
        setProduct(prev => {
            const editCategory = prev.find(el => el.id === Product.id);

            if (editCategory) {
                editCategory.name = Product.name;
                editCategory.firstName = Product.firstName;
                editCategory.lastName = Product.lastName;
                editCategory.category = Product.category;
                editCategory.cena = Product.cena;
            }

            return [...prev];
        });
    }

    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
            >
                <h1>
                    Product
                </h1>
                <div>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => setShowCreateProduct(true)}>
                        Add a Product
                    </Button>
                </div>
            </div>

            {showCreateProduct && <BurlakCreateProductPopup
                open={showCreateProduct}
                onClose={() => setShowCreateProduct(false)}
                onCreate={(Product) => onCreate(Product)}

            />}

            {editedProduct !== null && <BurlakEditProductPopup
                open={editedProduct !== null}
                onClose={() => setEditedProduct(null)}
                Product ={editedProduct}
                onEdit={(Product) => onEdit(Product)}
            />}

            <Box sx={{ height: '100vh', width: '100%' }}>
                <DataGrid
                    rows={Product}
                    columns={columns}
                />
            </Box>
        </div>

    );
}

export default ProductPage;