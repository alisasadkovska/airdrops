import type { Airdrop, AppUser } from "./types";

export const users: AppUser[] = [
    {
        uid: "bob-id",
        walletAdr: "0x8D16089D377668021bF93A567E49E2acfB78dBf3"
    },
    {
        uid: "tom-id",
        walletAdr: "0x8D16089D377668021bF93A567E49E2acfB78dBf3"
    },
    {
        uid: "jane-id",
        walletAdr: "0x8D16089D377668021bF93A567E49E2acfB78dBf3"
    }
];

export const airdrops: Airdrop[] = [
    {
        id: 'airdrop-1',
        title: "Airdrop 1",
        task: "Complete this task to receive your airdrop",
        reward_value_estimated_usd: 150,
        likesCount: 2,
        usersJoined: [users[0].uid, users[1].uid],
        date_added: new Date().toISOString(),
        steps: [{step: "Step 1", link: "https://example.com/step1"}, {step: "Step 2", link: "https://example.com/step2"}],
        description: "This is a sample airdrop description",
        confirmed: false,
        live: true,
        requirements: ["Follow us on Twitter", "Join our Discord"],
        tags: ["NFT", "DeFi"],
        logoUrl: "https://airdrops.io/wp-content/uploads/2025/10/Z1aHCoTc_400x400.jpg.webp",
        refLink: "https://example.com/airdrop1"
    },
    {
        id: 'airdrop-2',
        title: "Airdrop 2",
        task: "Complete this task to receive your airdrop",         
        reward_value_estimated_usd: 75,
        likesCount: 2,
        usersJoined: [users[1].uid, users[2].uid],
        date_added: new Date().toISOString(),
        steps: [{step: "Step 1", link: "https://example.com/step1"}, {step: "Step 2", link: "https://example.com/step2"}],
        description: "This is a sample airdrop description",
        confirmed: true,
        live: true,
        requirements: ["Follow us on Twitter", "Join our Discord"],
        tags: ["Gaming", "Web3"],
        logoUrl: "https://airdrops.io/wp-content/uploads/2024/09/Meteora.jpg.webp",
        refLink: "https://example.com/airdrop2"
    },
    {
        id: 'airdrop-3',
        title: "Airdrop 3",
        task: "Complete this task to receive your airdrop",
        reward_value_estimated_usd: 200,
        likesCount: 2,
        usersJoined: [users[0].uid, users[2].uid],
        date_added: new Date().toISOString(),
        steps: [{step: "Step 1", link: "https://example.com/step1"}, {step: "Step 2", link: "https://example.com/step2"}],
        description: "This is a sample airdrop description",
        confirmed: false,
        live: false,
        requirements: ["Follow us on Twitter", "Join our Discord"],
        tags: ["Metaverse", "NFT"],
        logoUrl: "https://airdrops.io/wp-content/uploads/2024/06/Turtle-Clubhouse-Logo.png.webp",
        refLink: "https://example.com/airdrop3"
    }
];



