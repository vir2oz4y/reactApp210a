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
                    fio={'Татарников Егор Дмитриевич'}
                    description={'True Pudge midder'}
                    imageSrc={'https://sun9-7.userapi.com/impg/ZuwJ-bUicCco0su4T0TNjOircPc1tpS8RQFWbA/b0nQhf7UL1M.jpg?size=1278x1080&quality=96&sign=3944a13b68b2431728387879ef02bdb6&type=album'}
                    navigateTo={'/blink'}
                />

            </Stack>
        </div>

    );
};

export default StudentsPage;