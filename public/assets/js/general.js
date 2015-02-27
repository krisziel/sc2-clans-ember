var league = function(league){
  var leagues = ["bronze","silver","gold","platinum","diamond","master","grandmaster"];
  return leagues[league];
}
var rank = function(rank){
  var r = "100";
  if(rank > 50) {
    r = "100";
  } else if(rank > 25) {
    r = "50";
  } else if(rank > 8) {
    r = "25";
  } else {
    r = "8";
  }
  return "top" + r;
}
var race = {
  "p":"protoss",
  "t":"terran",
  "z":"zerg"
}
function updateHeight() {
  var height = ($(window).height() - 95);
  $('#memberList').css({maxHeight:height-52});
  $('.player-window').css({maxHeight:height});
}
function parseLadder(ladder,characters) {
  var type = "";
  var mmq = ladder.matchMakingQueue;
  var insertIndex = 0;
  if(mmq.match("TWOS")) {
    insertIndex = 1;
    if(characters.length === 2) {
      type = "2v2 Arranged";
    } else {
      type = "2v2 Random";
    }
  } else if(mmq.match("THREES")) {
    insertIndex = 2;
    if(characters.length === 3) {
      type = "3v3 Arranged";
    } else {
      type = "3v3 Random";
    }
  } else if(mmq.match("FOURS")) {
    insertIndex = 3;
    if(characters.length === 4) {
      type = "4v4 Arranged";
    } else {
      type = "4v4 Random";
    }
  } else {
    insertIndex = 0;
    type = "1v1";
  }
  var expansion = "";
  var info = ladder;
  if(ladder.matchMakingQueue.substring(0,4) === "HOTS") {
    expansion = "HOTS";
  } else {
    expansion = "WOL";
  }
  var ladderInfo = {
    name:info.ladderName,
    id:info.ladderId,
    rank:info.rank,
    league:info.league.toLowerCase(),
    type:type,
    wins:info.wins,
    losses:info.losses,
    expansion:expansion,
    rankRange:rank(info.rank)
  }
  var thisLadder = {
    ladder:ladderInfo,
    characters:{
      string:characters.join(", "),
      list:ladder.characters
    }
  }
  return {
    ladder:thisLadder,
    expansion:expansion,
    insertIndex:insertIndex
  }
}
function parseFullLadder(ladder) {
  var teams = [];
  var currentTeam = {};
  $.each(ladder,function(i,player){
    var clan = '';
    if(player.character.clanTag.length > 0) {
      clan = '[' + player.character.clanTag + '] ';
    }
    if((player.joinTimestamp === currentTeam.joinTimestamp)&&(player.wins === currentTeam.wins)&&(player.losses === currentTeam.losses)&&(player.points === currentTeam.points)) {
      currentTeam.members.push(player.character);
        currentTeam.memberString += ", " + clan+player.character.displayName;
    } else {
      if(currentTeam.members) {
        teams.push(currentTeam);
      }
      currentTeam = {
        rank:(teams.length + 1),
        members:[player.character],
        joinTimestamp:player.joinTimestamp,
        points:player.points,
        wins:player.wins,
        losses:player.losses,
        highestRank:player.highestRank,
        memberString:clan+player.character.displayName
      };
    }
  });
  return teams;
}

// "ladderMembers" : [ {
//   "character" : {
//     "id" : 277751,
//     "realm" : 1,
//     "displayName" : "Poke",
//     "clanName" : "Spongy KittenZ",
//     "clanTag" : "KttnZ",
//     "profilePath" : "/profile/277751/1/Poke/"
//   },
//   "joinTimestamp" : 1424569441,
//   "points" : 589.0,
//   "wins" : 30,
//   "losses" : 15,
//   "highestRank" : 1,
//   "previousRank" : 0,
//   "favoriteRaceP1" : "ZERG",
//   "favoriteRaceP2" : "TERRAN"
// }, {
//   "character" : {
//     "id" : 540606,
//     "realm" : 1,
//     "displayName" : "NightLight",
//     "clanName" : "Spongy KittenZ",
//     "clanTag" : "KttnZ",
//     "profilePath" : "/profile/540606/1/NightLight/"
//   },
//   "joinTimestamp" : 1424569441,
//   "points" : 589.0,
//   "wins" : 30,
//   "losses" : 15,
//   "highestRank" : 1,
//   "previousRank" : 0,
//   "favoriteRaceP1" : "ZERG",
//   "favoriteRaceP2" : "TERRAN"
// }, {
