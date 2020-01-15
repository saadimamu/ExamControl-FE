import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse';
import {LoginConfig} from 'app/main/login/LoginConfig';

const routeConfigs = [
    ...adminConfigs,    
    LoginConfig,
    MajalesRolesAppConfig
];

const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        path     : '/',
        component: () => <Redirect to="/majalesroles"/>
    }
];

export default routes;
