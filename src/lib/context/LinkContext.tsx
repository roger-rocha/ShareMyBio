import React, { createContext, useContext, useState } from 'react';

interface AdditionalLinkProps {
    id: number
    i: string;
    l: string;
    u: string;
}

interface DataProps {
    i: string;
    n: string;
    d: string;
    f: string;
    t: string;
    ig: string;
    tg: string;
    e: string;
    y: string;
    gh: string;
    l: string;
    w: string;
    bg: string
    ls: AdditionalLinkProps[];
}

interface DataContextType {

    // Todo: fix type props
    data: DataProps;
    addNewData: (linkData: AdditionalLinkProps) => void;
    updateIndex: (updatedIndex: AdditionalLinkProps[]) => void;
    updateProfileInfo: (name: any, value: any) => void;
    updateSocialInfo: (name: any, value: any) => void;
    updateAdditionalInfo: (updatedIndex: any) => void;
    showDemo: () => void;
    selectBackground: (bgcode: string) => void;
}

const initialData: DataProps = {
    n: '',
    i: '',
    d: '',
    f: '',
    t: '',
    ig: '',
    tg: '',
    gh: '',
    l: '',
    e: '',
    w: '',
    y: '',
    bg: '',
    ls: [],
};

const demoData: DataProps = {
    n: 'Roger Rocha',
    i: 'https://avatars.githubusercontent.com/u/74687838?v=4',
    d: " O Desenvolvedor para seu projeto.",
    t: 'https://twitter.com/rogerrochadev',
    f: 'https://twitter.com/rogerrochadev',
    ig: 'https://twitter.com/rogerrochadev',
    tg: 'https://twitter.com/rogerrochadev',
    y: 'https://twitter.com/rogerrochadev',
    w: 'https://twitter.com/rogerrochadev',
    gh: 'https://github.com/roger-rocha',
    l: 'https://www.linkedin.com/in/roger-rocha-9027aa200/',
    e: 'mail@rogerrochadev@gmail.com',
    bg: '#808080',
    ls: [
        {
            id: 1,
            i: 'lucide:laptop',
            l: 'Portfolio',
            u: 'https://www.rogerocha.com/',
        },
        {
            id: 2,
            i: 'lucide:link',
            l: 'Share My Bio',
            u: 'https://share-my-bio.vercel.app/',
        },
        {
            id: 3,
            i: 'lucide:calendar-check-2',
            l: 'Plan My Event',
            u: 'https://plan-my-event.vercel.app/',
        },
    ],
}



const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
    const [data, setData] = useState<DataProps>(initialData);

    const selectBackground = (bgcode: string) => {
        setData((prevState) => ({
            ...prevState,
            bg: bgcode,
        }));
    };

    const addNewData = (linkData: AdditionalLinkProps) => {
        setData((prevData) => ({
            ...prevData,
            ls: [...prevData.ls, linkData]
        }))
    }

    const updateIndex = (updatedIndex: AdditionalLinkProps[]) => {
        setData((prevState) => ({
            ...prevState,
            ls: updatedIndex,
        }));
    };
    const updateAdditionalInfo = (updatedIndex: any) => {
        setData((prevState) => ({
            ...prevState,
            ls: updatedIndex,
        }));
    };

    const updateProfileInfo = (name: any, value: any) => {
        setData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const updateSocialInfo = (name: any, value: any) => {
        setData(prevData => ({ ...prevData, [name]: value }))
    };

    const showDemo = () => {
        setData(demoData)
    };

    return (
        <DataContext.Provider value={{ data, addNewData, updateIndex, updateProfileInfo, updateSocialInfo, updateAdditionalInfo, showDemo, selectBackground }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};