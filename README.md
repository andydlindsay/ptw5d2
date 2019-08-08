## W5D2: Advanced jQuery

Today we continued using jQuery to manipulate the DOM (Document Object Model) by using some new functions.

### Adding Children

We can add children to a parent element using `.append` and `.prepend`

* `.append` will add to the end of the parent's contents (last child)
  ```js
  $('#parent').append('<p>I go at the end</p>');
  ```

* `.prepend` will add to the beginning of the parent's contents (first child)
  ```js
  $('#parent').prepend('<p>I go at the beginning</p>');
  ```

### Adding Siblings

We can add siblings to a selected element using `.before` and `.after`

* `.before` adds a new element before the selected element
  ```js
  $('#child').before('<p>I go before my siblings</p>');
  ```

* `.after` adds a new element after the selected element
  ```js
  $('#child').after('<p>I go after my siblings</p>');
  ```

### Removing && Replacing

jQuery also gives us a couple of methods for removing or replacing elements

* `.remove` will remove the selected element from the page
  ```js
  $('h1').remove();
  ```

* `.replaceWith` will completely replace the element selected
  ```js
  $('h1').replaceWith('<p>Hello!</p>');
  ```

### HTML && Text

We can retrieve or set the content of an element using `.html` or `.text`

* `.html` will either return the content or set the content of the selected element
  ```js
  // if no argument is provided (between the parentheses), then the content is returned
  var listItemContent = $('li').html();

  // if an argument is provided, then jQuery will set the content of the element
  $('h2').html('New Title');
  ```

* `.text` will return the content of the selected element and all of its children or set the content of the selected element
  ```js
  // if no argument is provided, then the content of the element and its children is returned
  var listContent = $('ul').text();

  // if an argument is provided, then jQuery will set the content of the element
  $('h2').text('New Title');
  ```

### JSON

* **J**ava**S**cript **O**bject **N**otation
* A format for storing data objects
* **NOTE**: Unlike in JavaScript, the keys in JSON objects need to have quotation marks (`""`) around them

```json
{
  "lorem": "ipsum dolor sit amet",
  "donec": 19,
  "vitae": "mauris"
}
```
