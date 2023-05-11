import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import BurlakPopup, { IPopup } from "../../../../../Components/Burlak/BurlakPopup/BurlakPopup";
import { Product } from '../models';


type Props = IPopup & {
    onCreate: (newProduct: Product) => void;
}
export const BurlakCreateProductPopup = ({ open, onClose, onCreate }: Props) => {

    const [Product, setProduct] = useState<Product>({
        id: Math.random(),
        name: '',
        firstName: '',
        lastName: '',
        category: '',
        cena: ''
    })

    const onCreateClick = () => {
        onCreate(Product)
        onClose();
    }


    return (<div>
        <BurlakPopup
            open={open}
            onClose={onClose}
            title={'Creating a Product'}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>

                <TextField
                    label="Product Name"
                    variant="standard"
                    value={Product.name}
                    onChange={e => setProduct(prev => ({ ...prev, name: e.target.value }))}

                />
                <TextField
                    label="Product First Name"
                    variant="standard"
                    value={Product.firstName}
                    onChange={e => setProduct(prev => ({ ...prev, firstName: e.target.value }))}

                />
                <TextField
                    label="Product Last Name"
                    variant="standard"
                    value={Product.lastName}
                    onChange={e => setProduct(prev => ({ ...prev, lastName: e.target.value }))}

                />
                <TextField
                    label="Product category"
                    variant="standard"
                    value={Product.category}
                    onChange={e => setProduct(prev => ({ ...prev, category: e.target.value }))}

                />
                <TextField
                    label="Product cena"
                    variant="standard"
                    value={Product.cena}
                    onChange={e => setProduct(prev => ({ ...prev, cena: e.target.value }))}

                />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => onCreateClick()}
                    >
                        Create
                    </Button>
                </div>
            </div>
        </BurlakPopup>
    </div>)
}