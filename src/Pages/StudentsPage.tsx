import React from 'react';
import StudentElement from "../Components/StudentElement/StudentElement";
import {Stack} from "@mui/material";
import Header from "../Components/Header/Header";

const StudentsPage = () => {

    return (
        <div>
            <Header/>
            <Stack direction="row" padding={'1em'} flexWrap={'wrap'} gap={'1em'}>

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
                    fio={'Жабров Никита Владимирович'}
                    description={'Я КОМЕНТИЛ'}
                    imageSrc={'https://vraki.net/sites/default/files/inline/images/29_21.jpg'}
                    navigateTo={'/jabrov'}
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
                    fio={'Телелинский Андрей Витальевич'}
                    description={'average sibstrin student'}
                    imageSrc={'https://media.tenor.com/ZuKvt4qIKdMAAAAS/monkey-lick.gif'}
                    navigateTo={'/Telelinskiy'}
                />

                <StudentElement
                    fio={'Гайворонских Андрей Алексеевич'}
                    description={'Student'}
                    imageSrc={'https://cdn3.iconfinder.com/data/icons/avatar-set/512/Avatar02-1024.png'}
                    navigateTo={'/Gayvoronskikh'}
                />

                <StudentElement
                    fio={'Пайзунов Никита Александрович'}
                    description={'Студент'}
                    imageSrc={'https://cdn2.iconfinder.com/data/icons/school-flat-circle/512/Boy_child_kid_school_boy_student-1024.png'}
                    navigateTo={'/payzunov'}
                />

                <StudentElement
                    fio={'Татарников Егор Дмитриевич'}
                    description={'True Pudge midder'}
                    imageSrc={'https://sun9-7.userapi.com/impg/ZuwJ-bUicCco0su4T0TNjOircPc1tpS8RQFWbA/b0nQhf7UL1M.jpg?size=1278x1080&quality=96&sign=3944a13b68b2431728387879ef02bdb6&type=album'}
                    navigateTo={'/blink'}
                />

                <StudentElement
                    fio={'Свириденко Дмитрий Борисович'}
                    description={'Юзуал студент ин энгасу сэбистрин'}
                    imageSrc={'http://mtdata.ru/u7/photo8543/20977584733-0/original.jpg'}
                    navigateTo={'/student'}
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