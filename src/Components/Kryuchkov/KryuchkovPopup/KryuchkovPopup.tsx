import React from 'react';
import {Button, Modal} from "@mui/material";
import "./KryuchkovPopup.scss";


export type IPopup = {
    open:boolean,
    onClose:()=>void;
}

type Props = IPopup & {
    title:string,
    children:any
}

const KryuchkovPopup = ({open, onClose, title, children}:Props) => {
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

            </div>
        </Modal>
    );
};

export default KryuchkovPopup;