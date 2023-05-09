
import React from "react";
import {Modal} from "@mui/material";
import Button from "@mui/material/Button";


export type IPopup = {
    open:boolean,
    onClose:()=>void;
}

type Props = IPopup &{

}



const SviridenkoDdd = ({open,onClose}:Props) => {
    return (

            <Modal
                open={open}
                onClose={onClose}
            >
                <div className={'popup'}>
                    <div className={'popup__content'}>
                        <div className={'popup__content__title'}>
                            <div>
                                Заголовок
                            </div>

                            <div>
                                <Button
                                    color ={'primary'}
                                    variant={'contained'}
                                    >

                                </Button>
                            </div>
                        </div>

                        <div>
                            1232131232131
                        </div>
                    </div>

                </div>

            </Modal>

    );
};

export default SviridenkoDdd;