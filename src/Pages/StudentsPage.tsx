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
                    fio={'Сесь Надежда Владимировна'}
                    description={'Fullstack developer'}
                    imageSrc={'https://sun6-20.userapi.com/s/v1/ig1/yjQgheEobaUdohztWoxMfvzfJMKZ4zoYD2gv3hoyseFRMmFML82IVIzdbQOz8ZFD9JRKVt-Q.jpg?size=1176x1176&quality=96&crop=3,101,1176,1176&ava=1'}
                    navigateTo={'SesNV'}
                />


                <StudentElement
                    fio={'Бурлак Александр Дмитриевич'}
                    description={'Middle developer'}
                    imageSrc={'https://vraki.net/sites/default/files/inline/images/29_21.jpg'}
                    navigateTo={'BurlakAD'}
                />

<StudentElement
                    fio={'Бушманов Максим Аркадьевич'}
                    description={'Capitan of pirate sheep'}
                    imageSrc={'https://seeklogo.com/images/M/mugiwara-logo-303FD55C54-seeklogo.com.png'}
                    navigateTo={'/bushmanov'}
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