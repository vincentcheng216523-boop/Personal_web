import React from 'react';
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';
import 'primeicons/primeicons.css';
import { Toolbar } from 'primereact/toolbar';
import { PrimeReactProvider } from 'primereact/api';
import Tailwind from 'primereact/passthrough/tailwind';
import ThemeSwitcher from './themeSwitcher';

function Toolbar_func() {
    //const router = useRouter();
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh'
        },
        {
            label: 'Delete',
            icon: 'pi pi-times'
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://reactjs.org/'
            }
        },
        {   label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                //router.push('/fileupload');
            }
        }
    ];

    const startContent = (
        <React.Fragment>
            <Button label="New" icon="pi pi-plus" className="mr-2" />
            <Button label="Upload" icon="pi pi-upload" className="p-button-success" />
            <i className="pi pi-bars text-gray-700 dark:text-white/80 mr-2" />
            <SplitButton label="Save" icon="pi pi-check" model={items} className="p-button-warning"></SplitButton>
        </React.Fragment>
    );

    const endContent = (
        <React.Fragment>
            <Button icon="pi pi-search" className="mr-2" />
            <Button icon="pi pi-calendar" className="p-button-success mr-2" />
            <Button icon="pi pi-times" className="p-button-danger" />
        </React.Fragment>
    );

    return ( 
        <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
            <ThemeSwitcher />
                <Toolbar start={startContent} end={endContent} />
        </PrimeReactProvider>
    );
}

export default Toolbar_func;
    