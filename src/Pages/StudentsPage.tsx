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
                    fio={'Пайзунов Никита Александрович'}
                    description={'Студент'}
                    imageSrc={'https://cdn2.iconfinder.com/data/icons/school-flat-circle/512/Boy_child_kid_school_boy_student-1024.png'}
                    navigateTo={'/payzunov'}
                />

            </Stack>
        </div>

    );
};

export default StudentsPage;