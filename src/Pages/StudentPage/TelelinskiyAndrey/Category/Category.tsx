import React from 'react';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

const Category = () => {
    return (
        <div>
            <Stack direction="row" spacing={2}>
                <Avatar alt="Remy Sharp" src="https://media.tenor.com/ZuKvt4qIKdMAAAAS/monkey-lick.gif"
                        sx={{width: 520, height: 520}} variant="rounded"/>
            </Stack>
            категории

        </div>
    );
};

export default Category;