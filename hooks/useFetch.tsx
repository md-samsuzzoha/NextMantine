import useSWR from "swr";

const fetcher = (url) => {
    // fetch(url).then((r) => r.json());
    return [
        {
            id: 1,
            image: "/images/product/product-3.webp",
            name: "Lululemon",
            title: "Campaign Title Goes Here",
            tag: "HIGHEST TRENDING",
            chips: [
                { icon: "/icons/facebook.png", amount: 75 },
                { icon: "/icons/tiktok.jpeg", amount: 175 },
                { icon: "/icons/linkedin.png", amount: 235 },
                { icon: "/icons/instagram.jpeg", amount: 100 },
                { icon: "/icons/x.png", amount: 20 },
                { icon: "/icons/youtube.png", amount: 25 },
            ],
        },
        {
            id: 2,
            image: "/images/product/product-2.webp",
            name: "Lululemon",
            title: "Campaign Title Goes Here",
            tag: "HIGHEST TRENDING",
            chips: [
                { icon: "/icons/facebook.png", amount: 75 },
                { icon: "/icons/tiktok.jpeg", amount: 175 },
                { icon: "/icons/linkedin.png", amount: 235 },
                { icon: "/icons/instagram.jpeg", amount: 100 },
                { icon: "/icons/x.png", amount: 20 },
                { icon: "/icons/youtube.png", amount: 25 },
            ],
        },
        {
            id: 3,
            image: "/images/product/product-1.webp",
            name: "Lululemon",
            title: "Campaign Title Goes Here",
            tag: "HIGHEST TRENDING",
            chips: [
                { icon: "/icons/facebook.png", amount: 75 },
                { icon: "/icons/tiktok.jpeg", amount: 175 },
                { icon: "/icons/linkedin.png", amount: 235 },
                { icon: "/icons/instagram.jpeg", amount: 100 },
                { icon: "/icons/x.png", amount: 20 },
                { icon: "/icons/youtube.png", amount: 25 },
            ],
        },
        {
            id: 4,
            image: "/images/product/product-4.webp",
            name: "Lululemon",
            title: "Campaign Title Goes Here",
            tag: "HIGHEST TRENDING",
            chips: [
                { icon: "/icons/facebook.png", amount: 75 },
                { icon: "/icons/tiktok.jpeg", amount: 175 },
                { icon: "/icons/linkedin.png", amount: 235 },
                { icon: "/icons/instagram.jpeg", amount: 100 },
                { icon: "/icons/x.png", amount: 20 },
                { icon: "/icons/youtube.png", amount: 25 },
            ],
        },
        {
            id: 5,
            image: "/images/product/product-5.webp",
            name: "Lululemon",
            title: "Campaign Title Goes Here",
            tag: "HIGHEST TRENDING",
            chips: [
                { icon: "/icons/facebook.png", amount: 75 },
                { icon: "/icons/tiktok.jpeg", amount: 175 },
                { icon: "/icons/linkedin.png", amount: 235 },
                { icon: "/icons/instagram.jpeg", amount: 100 },
                { icon: "/icons/x.png", amount: 20 },
                { icon: "/icons/youtube.png", amount: 25 },
            ],
        },
        {
            id: 6,
            image: "/images/product/product-6.webp",
            name: "Lululemon",
            title: "Campaign Title Goes Here",
            tag: "HIGHEST TRENDING",
            chips: [
                { icon: "/icons/facebook.png", amount: 75 },
                { icon: "/icons/tiktok.jpeg", amount: 175 },
                { icon: "/icons/linkedin.png", amount: 235 },
                { icon: "/icons/instagram.jpeg", amount: 100 },
                { icon: "/icons/x.png", amount: 20 },
                { icon: "/icons/youtube.png", amount: 25 },
            ],
        },
    ];
};

export default function useFetch() {
    const { data, error, isLoading } = useSWR("api/user", fetcher);

    return { data, error, isLoading };
}
