import React from 'react'
import { AUTH_PREFIX_PATH, APP_PREFIX_PATH } from 'configs/AppConfig'

export const publicRoutes = [
    {
        key: 'login',
        path: `${AUTH_PREFIX_PATH}/login`,
        component: React.lazy(() => import('views/auth-views/authentication/login')),
    },
    {
        key: 'register',
        path: `${AUTH_PREFIX_PATH}/register`,
        component: React.lazy(() => import('views/auth-views/authentication/register')),
    },
    {
        key: 'forgot-password',
        path: `${AUTH_PREFIX_PATH}/forgot-password`,
        component: React.lazy(() => import('views/auth-views/authentication/forgot-password')),
    }
]

export const protectedRoutes = [
    {
        key: 'dashboard.admin',
        path: `${APP_PREFIX_PATH}/dashboard/admin`,
        component: React.lazy(() => import('views/app-views/dashboard/admin')),
    },
    {
        key: 'dashboard.customer',
        path: `${APP_PREFIX_PATH}/dashboard/customer`,
        component: React.lazy(() => import('views/app-views/dashboard/customer')),
    },
    {
        key:'reports.idle_report',
        path:`${APP_PREFIX_PATH}/reports/idle_report`,
        component:React.lazy(()=> import('views/app-views/reports/idle_report')),
    },    
    {
        key:'reports.parking_report',
        path:`${APP_PREFIX_PATH}/reports/parking_report`,
        component:React.lazy(()=> import('views/app-views/reports/parking_report')),
    },
    {
        key:'reports.distance_report',
        path:`${APP_PREFIX_PATH}/reports/distance_report`,
        component:React.lazy(()=> import('views/app-views/reports/distance_report')),
    },
    {
        key:'reports.trip_report',
        path:`${APP_PREFIX_PATH}/reports/trip_report`,
        component:React.lazy(()=> import('views/app-views/reports/trip_report')),
    },
    {
        key:'reports.playback_history',
        path:`${APP_PREFIX_PATH}/reports/playback_history`,
        component:React.lazy(()=> import('views/app-views/reports/playback_history')),
    },
    {
        key:'user_management.roles',
        path:`${APP_PREFIX_PATH}/user_management/roles`,
        component:React.lazy(()=> import('views/app-views/user_management/roles')),
    },
    {
        key:'user_management.customer',
        path:`${APP_PREFIX_PATH}/user_management/customer`,
        component:React.lazy(()=> import('views/app-views/user_management/customer')),
    },
    {
        key:'settings',
        path:`${APP_PREFIX_PATH}/settings`,
        component:React.lazy(()=> import('views/app-views/settings')),
    }
]