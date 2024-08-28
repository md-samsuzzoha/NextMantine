import { ProductCarousel } from "@/components";

export default function Home() {
    return (
        <main className="overflow-hidden pt-12 pb-12">
            <div className="max-w-[1440px] mx-auto flex justify-center items-center pt-3">
                <ProductCarousel />
            </div>
        </main>
    );
}
