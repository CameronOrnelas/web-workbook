'use strict';

$(document).ready(function() {
  let turn = 'X';
  $('[data-cell]').on('click', function(){
      $(this).text(turn);
      wins();
      if(turn === 'X') {
        turn = 'O';
      }else {
        turn = 'X';
      }
});

  function wins() {
    if(
      ($('[date-cell="0"]').text() === turn &&
      $('[date-cell="3"]').text() === turn &&
      $('[date-cell="6"]').text() === turn) ||
      ($('[date-cell="1"]').text() === turn &&
      $('[date-cell="4"]').text() === turn &&
      $('[date-cell="7"]').text() === turn) ||
      ($('[date-cell="2"]').text() === turn &&
      $('[date-cell="5"]').text() === turn &&
      $('[date-cell="8"]').text() === turn) ||
      ($('[date-cell="0"]').text() === turn &&
      $('[date-cell="1"]').text() === turn &&
      $('[date-cell="2"]').text() === turn) ||
      ($('[date-cell="3"]').text() === turn &&
      $('[date-cell="4"]').text() === turn &&
      $('[date-cell="5"]').text() === turn) ||
      ($('[date-cell="6"]').text() === turn &&
      $('[date-cell="7"]').text() === turn &&
      $('[date-cell="8"]').text() === turn) ||
      ($('[date-cell="0"]').text() === turn &&
      $('[date-cell="4"]').text() === turn &&
      $('[date-cell="8"]').text() === turn) ||
      ($('[date-cell="2"]').text() === turn &&
      $('[date-cell="4"]').text() === turn &&
      $('[date-cell="6"]').text() === turn)
    ) {
  $('#announce-winner').text(`Player ${turn} Wins!`)
    }
  }

  $('#clear').click(function() {
    $('[data-cell], #announce-winner').text('');
    turn = 'X';
  });

});
