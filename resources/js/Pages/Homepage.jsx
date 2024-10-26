import { Head } from '@inertiajs/react';

export default function Homepage(props){
    
    return(
        <div  className="bg-neutral-800 text-white text-2xl">
            {/* Menggunakan komponen Head untuk mengatur judul halaman */}
            <Head title={props.title}/>
            <div className='flex items-center justify-center h-screen'>
                
                
                {/* Menampilkan judul halaman */}
                <h1>{props.description}</h1>

            </div>
        </div>
    )
}