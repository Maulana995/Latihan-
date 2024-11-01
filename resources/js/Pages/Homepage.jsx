import { Head } from '@inertiajs/react';

export default function Homepage(props){
    
    return(
        <div  className="bg-neutral-800 text-white text-2xl">
            {/* Menggunakan komponen Head untuk mengatur judul halaman */}
            <Head title={props.title}/>
            <div className=' items-center justify-center h-screen'>
                
                
                {/* Menampilkan judul halaman */}
                <h1>{props.description}</h1>
                {props.news ? props.news.map((data,i)=> {
                    return (
                        <div key={i} className=" justify-center p-4 m-2 bg-white text-black shadow-md border">
                          <p className='text-2xl'>{data.title}</p>
                          <p>{data.description}</p>
                          <i className='text-sm'>{data.category}</i>
                          <i className='text-sm'>{data.author}</i>  
                        </div>
                    )
                }) : <p>Saat Ini Belum Ada Berita Tersedia</p>}

            </div>
        </div>
    )
}