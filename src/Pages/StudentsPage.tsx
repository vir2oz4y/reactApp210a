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
                    fio={'Гайворонских Андрей Алексеевич'}
                    description={'Student'}
                    imageSrc={'https://cdn3.iconfinder.com/data/icons/avatar-set/512/Avatar02-1024.png'}
                    navigateTo={'/Gayvoronskikh'}
                />

            </Stack>
        </div>

    );
};

export default StudentsPage;