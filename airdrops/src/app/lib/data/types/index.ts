export type AppUser = {
    uid: string;
    walletAdr: string;
};

export type Airdrop = {
    id: string;
    title: string;
    task: string;
    reward_value_estimated_usd?: number;
    likesCount?: number;
    usersJoined?: string[];
    date_added: string; // ISO string
    end_date?: string; // ISO string
    steps: AirdropStep[];
    description: string;    
    confirmed: boolean;
    live: boolean;
    requirements: string[];
    tags: string[];
    logoUrl: string;
    refLink: string;
};

export type AirdropStep = {
    step: string;
    link: string;
};

