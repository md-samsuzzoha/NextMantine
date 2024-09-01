# NextMantine

NextMantine is a feature-rich Next.js starter template designed to help you build modern, responsive web applications with ease. It leverages the power of Next.js App Router, Mantine.dev for UI components, and Tailwind CSS for custom styling. With built-in light and dark mode support, a carousel component, and Jest for unit testing, NextMantine is your go-to template for developing scalable web applications.

## Features

- **Next.js App Router**: Leverage the latest App Router feature from Next.js for simplified routing and data fetching.
- **Mantine UI Components**: Utilize Mantine.dev's beautiful and accessible UI components, including a customizable carousel.
- **Tailwind CSS**: Tailwind CSS is used for utility-first styling, making it easy to customize the design.
- **Dark/Light Mode**: Seamlessly switch between dark and light themes using Mantine's color scheme.
- **Dropdown Menu**: A fully responsive dropdown menu built with Tailwind CSS.
- **Unit Testing with Jest**: Write unit tests effortlessly using Jest to ensure your components work as expected.

## Getting Started

### Prerequisites

- Node.js (>= 14.x.x)
- Yarn or npm

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/nextmantine.git
    cd nextmantine
    ```

2. Install the dependencies:

    ```bash
    yarn install
    # or
    npm install
    ```

3. Run the development server:

    ```bash
    yarn dev
    # or
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

- **/components**: Reusable components, such as the carousel and dropdown menu.
- **/pages**: Application pages following the Next.js App Router structure.
- **/styles**: Global styles and Tailwind CSS configuration.
- **/tests**: Jest unit tests for your components.

## Usage

### Carousel Component

To use the carousel component in your project:

```jsx
import { Carousel } from '@mantine/carousel';

function ExampleCarousel() {
  return (
    <Carousel>
      <Carousel.Slide>Slide 1</Carousel.Slide>
      <Carousel.Slide>Slide 2</Carousel.Slide>
      <Carousel.Slide>Slide 3</Carousel.Slide>
    </Carousel>
  );
}

export default ExampleCarousel;
