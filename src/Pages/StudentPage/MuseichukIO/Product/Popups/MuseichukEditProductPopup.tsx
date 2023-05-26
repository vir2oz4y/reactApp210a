import React, { useEffect, useState } from 'react';
import MuseichukDY, { IPopup } from "../../../../../Components/Museichuk/MuseichukDY/MuseichukDY";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Product } from "../model";
import { MuseichukAxios } from '../../MuseichukIO'
import { Category } from "../../Kategorii/models";
import { Manufacturer } from "../../Manufacture/models";

type Props = IPopup & {
    onEdit: (newProduct: Product) => void;
    Product: Product
}

const MuseichukEditProductPopup = ({ open, onClose, Product: ProductEdit, onEdit }: Props) => {

    const [Product, setProduct] = useState(ProductEdit)

    const onEditClick = () => {

        MuseichukAxios.patch<{ item: Product }>('https://canstudy.ru/orderapi/Product',
            {
                item: {
                    ...Product
                }
            })
            .then(res => {
                onEdit(res.data.item)
                onClose();
            })
    }

    const [categoryList, setCategoryList] = useState<Category[]>([])

    const [manufactureList, setManufactureList] = useState<Manufacturer[]>([])

    const getCategories = () => {
        MuseichukAxios<{ items: Category[] }>('https://canstudy.ru/orderapi/category/list')
            .then(res => {
                setCategoryList(res.data.items);
            })
    }

    const getManufacturies = () => {
        MuseichukAxios.get<{ items: Manufacturer[] }>('https://canstudy.ru/orderapi/manufacturer/list')
            .then(res => {
                setManufactureList(res.data.items);
            })
    }

    useEffect(() => {
        getCategories();
        getManufacturies();
    }, [])


    return (
        <MuseichukDY
            title={'Changing the client'}
            open={open}
            onClose={() => onClose()}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1em'
                }}
            >
                <TextField
                    label="Title"
                    variant="standard"
                    fullWidth={true}
                    value={Product.name}
                    onChange={e => setProduct(prev => ({ ...prev, name: e.target.value }))}
                />

                <TextField
                    label="Description"
                    variant="standard"
                    fullWidth={true}
                    value={Product.description}
                    onChange={e => setProduct(prev => ({ ...prev, description: e.target.value }))}
                />


                <TextField
                    label="Price"
                    variant="standard"
                    fullWidth={true}
                    value={Product.cost}
                    onChange={e => setProduct(prev => ({ ...prev, cost: e.target.value as any }))}
                />

                <FormControl fullWidth>
                    <InputLabel id="category">Category</InputLabel>
                    <Select
                        labelId="category"
                        value={Product.categoryId?.toString()}
                        label="Category"
                        onChange={(e) => setProduct(prev => ({ ...prev, categoryId: e.target.value as any }))}
                    >
                        {categoryList.map((el, i) =>
                            <MenuItem value={el.id.toString()}>{el.name}</MenuItem>)
                        }

                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="manufacturer">Manufacturer</InputLabel>
                    <Select
                        labelId="manufacturer"
                        value={Product.manufacturerId?.toString()}
                        label="Manufacturer"
                        onChange={(e) => setProduct(prev => ({ ...prev, manufacturerId: e.target.value as any }))}
                    >
                        {manufactureList.map((el, i) =>
                            <MenuItem value={el.id.toString()}>{el.name}</MenuItem>)
                        }

                    </Select>
                </FormControl>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => onEditClick()}
                    >
                        To change
                    </Button>
                </div>

            </div>
        </MuseichukDY>
    );
};

export default MuseichukEditProductPopup;