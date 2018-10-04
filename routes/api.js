// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

const players = [{
	firstName : "Nasir"	,
	lastName : "Hussain" ,
	position : "QB",
	age : 13,
	team : "pak"
},
{
	firstName : "Munir"	,
	lastName : "Hussain" ,
	position : "SB",
	age : 43,
	team : "pak"
},
{
	firstName : "Ghula"	,
	lastName : "Hussain" ,
	position : "QB",
	age : 73,
	team : "pak"
}]

const teams = [{
	name : "giants",
	city : "New York",
	conference : "NFC"
},
{
	name : "patriots",
	city : "New England",
	conference : "AFC"
},
{
	name : "Texans",
	city : "Houseton",
	conference : "AFC"
}
]


// router.get('/players', (req, res) => {
// 			 res.json({note : "Hey it worked", 
// 			data : players
// 			});
// });

// router.get('/teams', (req, res) => {
// 	 res.json({
// 		 note : "Here are the teams",
// 		 data : teams
// 	 });
// });

router.get('/:resource', (req, res) => {
		const resource = req.params.resource;
		if (resource == "players"){
			 res.json({note : "Hey it worked", 
			 			data : players
						 });
						 return
		}
		if (resource == "teams"){
			res.json({note : "Hey it worked", 
						data : teams
						});
						return
	   }
	    res.json({connection : "fail", message : "Invalid Route"});
	});

module.exports = router
