import React from 'react';
import Modal from '@mui/material/Modal';
import Button from "@mui/material/Button";
import "./ChernyakPopup.scss";

export type IPoup = {
    open: boolean,
    onClose: () => void;
}

type Props = IPoup &{
     title:string,
    children: any
}
const ChernyakPopup = ({open, onClose, title,children}:Props) => {

    return (
        <Modal
            open={open}
            onClose={onClose}

        >
            <div className={'popup'}>
                <div className={'popup__cantent__title'}>
                    <div>
                        Заголовок
                    </div>

                    <div>
                        <Button
                            color={'primary'}
                            variant={'contained'}
                            onClick={()=>onClose}
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
    );
};

export default ChernyakPopup;