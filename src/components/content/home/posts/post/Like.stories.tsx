import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";

import {LikesBtn} from './Post'

export default {
    title: 'Example/LikesBtn',
    component: LikesBtn,
};

export const RegularPost = () => <LikesBtn likecount={111}/>


