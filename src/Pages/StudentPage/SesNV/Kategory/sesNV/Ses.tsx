import React from 'react';
import { Modal } from "@mui/material";
import Button from "@mui/material/Button";
import "./sesNV.scss";

export type IPopUp = {
    open: boolean,
    onClose: () => void
}
type Props = IPopUp & {
    title: string
    children: any
}
const SesPopUp = ({ open, onClose, title, children }: Props) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <div className={'PopUp'}>
                <div className={'PopUp__content'}>
                    <div className={'PopUp__content__title'}>
                        <div>
                            {title}
                        </div>
                        <div>
                            <Button
                                color={'primary'}
                                variant={'contained'}
                                onClick={onClose}
                            >
                                закрыть
                            </Button>
                        </div>
                    </div>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </Modal>
    );
};

export default SesPopUp;