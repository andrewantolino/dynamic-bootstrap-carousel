# dynamic-bootstrap-carousel

## Concept
Built using jQuery and Pug, this brief example demonstrates how to add items to a Bootstrap carousel. Controls and indicators are dynamically rendered depending on the number of slides in the carousel.

The carousel items are populated with JSON data coming from a third-party API called from an Express backend.

Carousel items are taken from an array of objects returned from the backend. The array is divided into segments of three, then placed into divs with classes of 'carousel-item' and 'active' for the first carousel slide.

## Problems
One of the drawbacks of this code is that it assumes that the carousel slides will always contain 3 items. This is problematic for responsive web development, as I've found in the project I was trying to implement this in. Dividing the length of the JSON array by the number of items you want in the slide will remedy this.

E.g. in the Pug template, changing the initial `for` loop params as such: 
```javascript
  // Change the factor by which the length of featured properties is divided
  for (var i = 0; i < featuredProperties.length / 2; i++) {
    // Carousel markup
  }
```

Will ensure that only two items are shown per slide. However, the property mixin doesn't cater for this. It is probably better to abstract all of the carousel logic from the Pug template into the jQuery template and append the resultant html to hooks in the template.

For this project in the end, the decision was made to move to a jQuery carousel library to save time on development and improve maintainability.
