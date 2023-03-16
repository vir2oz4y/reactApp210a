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

                    fio={'Аникеева Вера Сергеевна'}
                    description={"prrrr"}
                    imageSrc={'https://static.wikia.nocookie.net/442edd41-4117-4de8-bedc-db8ac6610048'}
                    navigateTo={'/anikeeva'}
                    />

                <StudentElement
                    fio={'Алешин Григорий Алексалрович'}
                    description={'Middle fullstack developer'}
                    imageSrc={'https://sky.pro/media/wp-content/uploads/2022/03/glavnaya-9-1.png'}
                    navigateTo={'/aleshin'}

                />

            </Stack>
        </div>

    );
};

export default StudentsPage;