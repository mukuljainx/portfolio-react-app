app.controller('EventController',['$scope', function($scope){

	$scope.polys = [
	{
		name  : 'competition',
		classx: 'eventx',
		evenx : 'event1',
		imgid : 'comptimg',
		url   :  'events/compt.html',
		mimg  : 'media/images/competition.png',
		limg  : 'media/images/line.png',
	},
	{
		name  : 'MUN',
		classx: 'eventx',
		evenx : 'event2',
		imgid : 'munimg',
		url   :  '#b',
		mimg  : 'media/images/mun.png',
		limg  : 'media/images/line.png',
	},
	{
		name  : 'Workshops',
		classx: 'eventx',
		evenx : 'event3',
		imgid : 'workimg',
		url   :  '#c',
		mimg  : 'media/images/workshop.png',
		limg  : 'media/images/line.png',
	},
	{
		name  : 'Talks',
		classx: 'eventx',
		evenx : 'event4',
		imgid : 'talkimg',
		url   :  '#d',
		mimg  : 'media/images/speaker.png',
		limg  : 'media/images/line.png',
	},
	{
		name  : 'Exhibations',
		classx: 'eventx',
		evenx : 'event5',
		imgid : 'exhimg',
		url   : '#e',
		mimg  : 'media/images/exhibition.png',
		limg  : 'media/images/line.png',
	}];

	$scope.funevents = [
	{
		name  : 'School Outreach Program',
		classx: 'funevent',
		evenx : 'funevent1',
		imgid : 'img1xxxx',
		url   :  '##x',
		mimg  : 'media/images/sop.png',
		limg  : 'media/images/line.png',
	},
	{
		name  : 'Informals',
		classx: 'funevent',
		evenx : 'funevent2',
		imgid : 'img2xxxx',
		url   :  '##y',
		mimg  : 'media/images/informal.png',
		limg  : 'media/images/line.png',
	},
	{
		name  : 'More...',
		classx: 'funevent',
		evenx : 'funevent3',
		imgid : 'img3xxxx',
		url   : '##z',
		mimg  : 'media/images/1.png',
		limg  : 'media/images/line.png',
	}];

}]);
