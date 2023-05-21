import React from 'react';
import {Box, Modal, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import "./PosnijPopUp.scss"
export type Ipopup = {
    open:boolean,
    onClose:()=>void;
}

type Props = Ipopup & {
    title:string,
    children:any
}
const PosnijPopUp = ({open, onClose, title, children}:Props) => {
    return (
        <Modal
            open={open}
            onClose={onClose}


        >
            <div className={'popup'}>
                <div className={'popup__content'}>
                    <div className={'popup__content__title'}>
                        <div>
                            {title}
                        </div>

                        <div>
                            <Button color = {'primary'} variant = {'contained'} onClick={()=>onClose()}>
                                Закрыть
                            </Button>
                        </div>
                    </div>

                    <div>
                        {children}
                    </div>
                </div>

            </div>
        </Modal>
    );
};

export default PosnijPopUp;