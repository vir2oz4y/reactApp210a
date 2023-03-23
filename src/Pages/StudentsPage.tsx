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
                    fio={'Вишняк Алексей Евгеньевич'}
                    description={'I am a student'}
                    imageSrc={'https://webmg.ru/wp-content/uploads/2022/01/55-20220103_145806.jpg'}
                    navigateTo={'/vishnyak'}
                />
                <StudentElement
                    fio={'Крючков Николай Алексеевич'}
                    description={'Middle fullstack developer'}
                    imageSrc={'https://sky.pro/media/wp-content/uploads/2022/03/glavnaya-9-1.png'}
                    navigateTo={'/teacher'}
                />

            </Stack>
        </div>

    );
};

export default StudentsPage;