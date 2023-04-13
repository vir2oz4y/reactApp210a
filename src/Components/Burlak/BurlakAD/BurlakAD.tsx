import {Modal} from '@mui/material';
import React from 'react';
import Button from "@mui/material/Button";
import "./BurlakAD.scss"


export type IPoppup = {
    open: boolean,
    onClose: () => void,
}
type Props = IPoppup & {
    title:string,
    children:any
}
const BurlakAd = ({open, onClose, title, children}: Props) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <div>
                <div className={'poppup'}>
                    <div className={'poppup__content__title'}>
                        <div>
                            {title}
                        </div>
                    </div>
                    <div>
                        <Button
                            color={'primary'}
                            variant={'contained'}
                            onClick={()=>onClose()}
                        >
                            Закрыть
                        </Button>
                    </div>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </Modal>

    )
        ;
};

export default BurlakAd;