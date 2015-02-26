function selectPlayer(player) {
  $('.player-row').removeClass('active');
  $('.player-row[name="' + player.toLowerCase() + '"]').addClass('active');
  $('#memberColumn').addClass('left');
}
