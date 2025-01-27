# Scratch Card SDK

A React-based scratch card SDK that allows you to easily integrate interactive scratch cards into your web applications.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
   - [Using the React Component](#using-the-react-component)
   - [Using the Programmatic API](#using-the-programmatic-api)
3. [Customization](#customization)
   - [Text Offers](#text-offers)
   - [Image Offers](#image-offers)
4. [API Reference](#api-reference)
   - [ScratchCard Component Props](#scratchcard-component-props)
   - [createScratchCard Options](#createscratchcard-options)
5. [Styling](#styling)
6. [Browser Support](#browser-support)
7. [Troubleshooting](#troubleshooting)
8. [Contributing](#contributing)
9. [License](#license)

## Installation

Install the package using npm:

```bash
npm install scratch-card-sdk
```

## Usage

### Using the React Component

```javascriptreact
import React from 'react';
import { ScratchCard } from 'scratch-card-sdk';

const MyComponent = () => {
  const handleRevealed = () => {
    console.log('Offer revealed!');
  };

  const handleClaimed = () => {
    console.log('Offer claimed!');
  };

  return (
    <ScratchCard
      offer="25% OFF ON A BURGER"
      width={300}
      height={150}
      onRevealed={handleRevealed}
      onClaimed={handleClaimed}
    />
  );
};

export default MyComponent;
```

### Using the Programmatic API

```javascript
import { createScratchCard } from 'scratch-card-sdk';

document.addEventListener('DOMContentLoaded', () => {
  createScratchCard({
    offer: '25% OFF ON A BURGER',
    width: 300,
    height: 150,
    containerId: 'scratch-card-container',
    onRevealed: () => console.log('Offer revealed!'),
    onClaimed: () => console.log('Offer claimed!')
  });
});
```

Make sure you have a container element in your HTML:

```html
<div id="scratch-card-container"></div>
```

## API Reference

### ScratchCard Component Props

| Prop | Type | Required | Default | Description
|-----|-----|-----|-----|-----
| `offer` | string | { type: 'image', src: string } | Yes | - | The offer to be revealed
| `width` | number | No | 300 | Width of the scratch card
| `height` | number | No | 150 | Height of the scratch card
| `onRevealed` | function | No | - | Callback when offer is revealed
| `onClaimed` | function | No | - | Callback when offer is claimed
| `scratchColor` | string | No | '`#AAAAAA`' | Color of the scratch-off layer
| `revealPercentage` | number | No | 70 | Percentage of area to scratch to reveal offer


### createScratchCard Options

| Option | Type | Required | Default | Description
|-----|-----|-----|-----|-----
| `offer` | string | { type: 'image', src: string } | Yes | - | The offer to be revealed
| `width` | number | No | 300 | Width of the scratch card
| `height` | number | No | 150 | Height of the scratch card
| `containerId` | string | Yes | - | ID of the container element
| `onRevealed` | function | No | - | Callback when offer is revealed
| `onClaimed` | function | No | - | Callback when offer is claimed
| `scratchColor` | string | No | '`#AAAAAA`' | Color of the scratch-off layer
| `revealPercentage` | number | No | 70 | Percentage of area to scratch to reveal offer


## Customization

### Text Offers

You can easily customize the text offer by passing a string to the `offer` prop:

```javascriptreact
<ScratchCard
  offer="50% OFF YOUR NEXT PURCHASE"
  width={300}
  height={150}
/>
```

### Image Offers

To use an image as the offer, pass an object with the `type` and `src` properties:

```javascriptreact
<ScratchCard
  offer={{
    type: 'image',
    src: 'https://example.com/path/to/your/image.jpg'
  }}
  width={300}
  height={150}
/>
```

## Styling

The scratch card component uses minimal styling by default. You can customize the appearance using CSS:

```css
.scratch-card-container {
  /* Your custom styles */
}

.scratch-card-canvas {
  /* Your custom styles for the canvas element */
}

.scratch-card-offer {
  /* Your custom styles for the revealed offer */
}

.scratch-card-claim-button {
  /* Your custom styles for the claim button */
}
```

## Browser Support

This SDK supports all modern browsers that are ES5-compliant (IE8 and below are not supported).

## Troubleshooting

If you encounter any issues, please check the following:

1. Ensure you have the correct peer dependencies installed (React and ReactDOM).
2. Check that the container element exists in the DOM before calling `createScratchCard`.
3. Verify that the offer text or image URL is correct and accessible.


If problems persist, please open an issue on the GitHub repository.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

```plaintext

</ReactProject>

This README file now provides a complete guide for using the Scratch Card SDK. It includes all the necessary sections, from installation instructions to usage examples, API reference, customization options, styling guidelines, browser support, troubleshooting tips, contribution guidelines, and license information.

The code blocks are complete and properly formatted, and all sections are fully detailed. This should provide users with all the necessary information to effectively use the Scratch Card SDK in their projects.
```
