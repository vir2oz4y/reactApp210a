import React from 'react';
import StudentElement from "../Components/StudentElement/StudentElement";
import {Stack} from "@mui/material";
import Header from "../Components/Header/Header";

const StudentsPage = () => {

    return (
        <div>
            <Header/>
            <Stack direction="row" spacing={2} padding={'1em'}>

                <StudentElement
                    fio={'Крючков Николай Алексеевич'}
                    description={'Middle fullstack developer'}
                    imageSrc={'https://sky.pro/media/wp-content/uploads/2022/03/glavnaya-9-1.png'}
                    navigateTo={'/teacher'}
                />

                <StudentElement
                    fio={'Свириденко Дмитрий Борисович'}
                    description={'Юзуал студент ин энгасу сэбистрин'}
                    imageSrc={'http://mtdata.ru/u7/photo8543/20977584733-0/original.jpg'}
                    navigateTo={'/student'}
                />

            </Stack>
        </div>

    );
};

export default StudentsPage;