import { Head } from '@inertiajs/react';

export default function Homepage(props){
    return(
        <div>
            {/* Menggunakan komponen Head untuk mengatur judul halaman */}
            <Head title="Hallo" />
            <div>
                {/* Menampilkan judul halaman */}
                <h1>Hallo World</h1>
            </div>
        </div>
    )
}
