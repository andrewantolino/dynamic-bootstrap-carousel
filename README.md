# dynamic-bootstrap-carousel
Built using jQuery and Pug, this brief example demonstrates how to add items to a Bootstrap carousel. Controls and indicators are dynamically rendered depending on the number of slides in the carousel.

The carousel items are populated with JSON data coming from a third-party API called from an Express backend.

Carousel items are taken from an array of objects returned from the backend. The array is divided into segments of three, then placed into divs with classes of 'carousel-item' and 'active' for the first carousel panel.
