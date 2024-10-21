import React from "react";
import { Link, Head } from '@inertiajs/inertia-react';

export default function Homepage(props) {
    console.log(props)
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <Head title="Latihan laravel"/>
                
            <h1>Homepage</h1>
        </div>
    )
}
