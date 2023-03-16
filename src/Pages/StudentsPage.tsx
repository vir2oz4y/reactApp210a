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
                    fio={'Телелинский Андрей Витальевич'}
                    description={'average sibstrin student'}
                    imageSrc={'https://media.tenor.com/ZuKvt4qIKdMAAAAS/monkey-lick.gif'}
                    navigateTo={'/Telelinskiy'}
                />

            </Stack>
        </div>

    );
};

export default StudentsPage;