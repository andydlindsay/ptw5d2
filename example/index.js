$(document).ready(function() {
  
  // adding children
  $('#list').append('<li>I am a new list item!</li>');
  $('#list').prepend('<li>I am the first list item!</li>');

  // adding siblings
  $('#middle-child').before('<li>I come before my siblings</li>');
  $('#middle-child').after('<li>I come after my siblings</li>');

  // removing and replacing
  $('#middle-child').remove();
  $('#list').replaceWith('<p>I am not a list</p>');

  // html and text
  var titleText = $('#title').html();
  console.log('titleText:', titleText);
  $('#title').html('Shiny New Title');
  $('#paragraph').text('All new text has been added');

});
