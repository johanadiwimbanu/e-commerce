import Image1 from '@/assets/carousel/1.jpg';
import Image2 from '@/assets/carousel/2.jpg';
import Image3 from '@/assets/carousel/3.jpg';
import Campaigns from '@/Components/Campaigns';
import NavigationMenu from '@/Components/NavigationMenu';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';

export default function Welcome({ auth }: PageProps) {
    const campaigns = [
        {
            name: 'Warehouse Sale 2025',
            image: Image3,
            gradient: {
                from: 'from-amber-900',
                to: 'to-amber-800',
            },
            description:
                'Diskon hingga 70% untuk gadget premium! Gratis ongkir seluruh Indonesia. Periode promo 1-31 Januari 2025.',
        },
        {
            name: 'Gadgets Wars',
            image: Image2,
            gradient: {
                from: 'from-slate-800',
                to: 'to-slate-700',
            },
            description:
                'Flash Sale setiap jam 12! Dapatkan gadget terbaru dengan cashback hingga Rp 2 juta + cicilan 0% hingga 12 bulan.',
        },
        {
            name: 'New Year Sale',
            image: Image1,
            gradient: {
                from: 'from-zinc-900',
                to: 'to-zinc-800',
            },
            description:
                'Sambut 2025 dengan gadget impian! Dapatkan exclusive bundling dan bonus aksesori untuk setiap pembelian.',
        },
    ];

    return (
        <>
            <Head title="Welcome" />
            <NavigationMenu auth={auth} />
            <Campaigns campaigns={campaigns} />
        </>
    );
}
