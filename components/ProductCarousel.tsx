/* eslint-disable @next/next/no-img-element */
"use client";
import { useFetch } from "@/hooks";
import {
    ArrowLeftCircleIcon,
    ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";
import { Carousel } from "@mantine/carousel";
import { Container } from "@mantine/core";
import { useMemo } from "react";

function ProductCarousel() {
    const { data, error, isLoading } = useFetch();
    const products = useMemo(() => data, [data]);

    if (isLoading) return <div className="flex justify-center">Loading...</div>;
    if (error)
        return <div className="flex justify-center">Error loading data</div>;

    return (
        <section className="relative px-3 py-12 drop-shadow-lg">
            <div className="">
                <h2 className="text-2xl font-bold mb-6 flex mx-auto max-w-screen-xl">
                    Newly Added
                </h2>

                <Container size="xl">
                    <Carousel
                        withIndicators
                        slideSize={{
                            base: "100%",
                            sm: "50%",
                            md: "33.333333%",
                            lg: "25%",
                        }}
                        slideGap={{ base: 0, sm: "8px", md: "8px", lg: "8px" }}
                        loop
                        align="start"
                        nextControlIcon={
                            <ArrowRightCircleIcon className="w-6 h-6 text-blue-500 font-bold" />
                        }
                        previousControlIcon={
                            <ArrowLeftCircleIcon className="w-6 h-6 text-blue-400 font-bold" />
                        }
                        controlSize={40}
                    >
                        {products &&
                            products.length > 0 &&
                            products.map((product) => (
                                <Carousel.Slide key={product.id}>
                                    <div className="max-w-xs mx-auto bg-white drop-shadow-lg rounded-md dark:bg-gray-800 dark:border-gray-600">
                                        <div className="rounded-md overflow-hidden min-h-[430px] max-h-[430px] p-3 dark:bg-gray-800">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover rounded-md"
                                            />
                                        </div>

                                        <div className="pb-4 my-4 pl-2 pr-2">
                                            <div className="flex justify-between items-center">
                                                <div className="w-10 h-10 rounded-full bg-white">
                                                    <img
                                                        src="/icons/lululemon.webp"
                                                        alt="Logo"
                                                        className="w-full h-full object-cover rounded-full"
                                                    />
                                                </div>
                                                <div className="flex-1 pl-2">
                                                    <div className="flex items-center place-content-between space-x-2">
                                                        <span className="text-lg font-bold dark:text-white">
                                                            {product.name}
                                                        </span>
                                                        <span className="bg-blue-500 text-white text-[8px] font-semibold py-1 px-2 rounded-xl shadow-md">
                                                            {product.tag}
                                                        </span>
                                                    </div>
                                                    <p className="text-black text-sm font-semibold dark:text-gray-400">
                                                        {product.title}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap gap-2 pt-3">
                                                {product.chips.map(
                                                    (chip, j) => (
                                                        <div
                                                            key={j}
                                                            className="flex items-center space-x-2 bg-white dark:bg-gray-800 dark:border-gray-600 drop-shadow-lg py-1 px-3 rounded-2xl shadow-md"
                                                        >
                                                            <img
                                                                src={chip.icon}
                                                                alt="Chip Logo"
                                                                className="w-5 h-5 rounded-full"
                                                            />
                                                            <span className="text-sm py-1 text-black dark:text-gray-400 font-bold">
                                                                ${chip.amount}
                                                            </span>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Slide>
                            ))}
                    </Carousel>
                </Container>
            </div>
        </section>
    );
}

export default ProductCarousel;
