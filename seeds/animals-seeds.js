const {Animals} = require('../models')
const animalData = [
	{
		"breeds": {
			"primary": "Pug"
		},
		"colors": {
			"primary": "Yellow / Tan / Blond / Fawn"
		},
		"age": "Adult",
		"gender": "Male",
		"size": "Small",
		"name": "Bruce ",
		"description": "Bruce is 5 years old and 22lbs. He’s good with everyone. From his foster in Olympia:Bruce is a very...",
		"photos": [
			{
				"small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193835/6/?bust=1696649292&width=100",
				"medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193835/6/?bust=1696649292&width=300",
				"large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193835/6/?bust=1696649292&width=600",
				"full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193835/6/?bust=1696649292"
			},
			{
				"small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193835/1/?bust=1696649284&width=100",
				"medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193835/1/?bust=1696649284&width=300",
				"large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193835/1/?bust=1696649284&width=600",
				"full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193835/1/?bust=1696649284"
			},
			{
				"small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193835/2/?bust=1696649285&width=100",
				"medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193835/2/?bust=1696649285&width=300",
				"large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193835/2/?bust=1696649285&width=600",
				"full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193835/2/?bust=1696649285"
			},
			{
				"small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193835/3/?bust=1696649287&width=100",
				"medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193835/3/?bust=1696649287&width=300",
				"large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193835/3/?bust=1696649287&width=600",
				"full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193835/3/?bust=1696649287"
			},
			{
				"small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193835/4/?bust=1696649289&width=100",
				"medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193835/4/?bust=1696649289&width=300",
				"large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193835/4/?bust=1696649289&width=600",
				"full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193835/4/?bust=1696649289"
			},
			{
				"small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193835/5/?bust=1696649290&width=100",
				"medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193835/5/?bust=1696649290&width=300",
				"large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193835/5/?bust=1696649290&width=600",
				"full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193835/5/?bust=1696649290"
			}
		],
		"status": "adoptable",
		"contact": {
			"email": "Casadogrescue@gmail.com",
			"phone": null,
			"address": {
				"address1": null,
				"city": "Puyallup",
				"state": "WA",
				"postcode": "98375",
				"country": "US"
			}
		},
		"_links": {
			"organization": {
				"href": "/v2/organizations/wa728"
			}
		},
	},
	{
		"breeds": {
			"primary": "Belgian Shepherd / Malinois"
		},
		"colors": {
			"primary": "Tricolor (Brown, Black, & White)"
		},
		"age": "Baby",
		"gender": "Male",
		"size": "Medium",
		"name": "Roger",
		"description": "Roger is one handsome boy. He is young and a bit nervous to find himself in a shelter. The sights...",
		"photos": [
			{
				"small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193828/1/?bust=1696649019&width=100",
				"medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193828/1/?bust=1696649019&width=300",
				"large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193828/1/?bust=1696649019&width=600",
				"full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193828/1/?bust=1696649019"
			}
		],
		"status": "adoptable",
		"contact": {
			"email": "animalservices@cityofberkeley.info",
			"phone": "(510) 981-6600",
			"address": {
				"address1": "1 Bolivar Drive",
				"city": "Berkeley",
				"state": "CA",
				"postcode": "94710",
				"country": "US"
			}
		},
		"_links": {
			"organization": {
				"href": "/v2/organizations/ca412"
			}
		}
	},
	{
		"breeds": {
			"primary": "Pit Bull Terrier"
		},
		"colors": {
			"primary": null
		},
		"age": "Adult",
		"gender": "Male",
		"size": "Large",
		"name": "Traveler",
		"description": "Found at Fastrip No micro-chip or collar Adoption Fee: $100 for Dogs, $75 for Cats: This includes S/N, 1 yr...",
		"photos": [],
		"status": "adoptable",
		"contact": {
			"email": "cal.cityanimalshelter@gmail.com",
			"phone": "(760) 373-1115",
			"address": {
				"address1": null,
				"city": "California City",
				"state": "CA",
				"postcode": "93505",
				"country": "US"
			}
		},
		"_links": {
			"organization": {
				"href": "/v2/organizations/ca350"
			}
		}
	},
	{
		"breeds": {
			"primary": "American Bulldog"
		},
		"colors": {
			"primary": null
		},
		"age": "Young",
		"gender": "Female",
		"size": "Medium",
		"name": "Pumpernickle",
		"description": "________________________________________________If you would like to meet one of our adoptables or learn more about them, please submit an application...",
		"photos": [],
		"status": "adoptable",
		"contact": {
			"email": "adopt@animalrescueneworleans.org",
			"phone": null,
			"address": {
				"address1": "271 Plauche Street",
				"city": "New Orleans",
				"state": "LA",
				"postcode": "70123",
				"country": "US"
			}
		},
		"_links": {
			"organization": {
				"href": "/v2/organizations/la181"
			}
		}
	},
	{
		"breeds": {
			"primary": "Great Dane"
		},
		"colors": {
			"primary": "Golden"
		},
		"age": "Baby",
		"gender": "Male",
		"size": "Large",
		"name": "Phoenix",
		"description": "Phoenix is a lovable 7 week old Great Dane/Shepherd mix puppy (our best breed guess) that is full of energy....",
		"photos": [
			{
				"small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193824/4/?bust=1696648846&width=100",
				"medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193824/4/?bust=1696648846&width=300",
				"large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193824/4/?bust=1696648846&width=600",
				"full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193824/4/?bust=1696648846"
			},
			{
				"small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193824/1/?bust=1696648845&width=100",
				"medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193824/1/?bust=1696648845&width=300",
				"large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193824/1/?bust=1696648845&width=600",
				"full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193824/1/?bust=1696648845"
			},
			{
				"small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193824/2/?bust=1696648845&width=100",
				"medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193824/2/?bust=1696648845&width=300",
				"large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193824/2/?bust=1696648845&width=600",
				"full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193824/2/?bust=1696648845"
			},
			{
				"small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193824/3/?bust=1696648846&width=100",
				"medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193824/3/?bust=1696648846&width=300",
				"large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193824/3/?bust=1696648846&width=600",
				"full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193824/3/?bust=1696648846"
			},
			{
				"small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193824/5/?bust=1696648847&width=100",
				"medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193824/5/?bust=1696648847&width=300",
				"large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193824/5/?bust=1696648847&width=600",
				"full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193824/5/?bust=1696648847"
			},
			{
				"small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193824/6/?bust=1696648848&width=100",
				"medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193824/6/?bust=1696648848&width=300",
				"large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193824/6/?bust=1696648848&width=600",
				"full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193824/6/?bust=1696648848"
			}
		],
		"status": "adoptable",
		"contact": {
			"email": "StrayandOrphanedAnimalrescue@gmail.com",
			"phone": "(951) 205-0626",
			"address": {
				"address1": null,
				"city": "O'Fallon",
				"state": "MO",
				"postcode": "63366",
				"country": "US"
			}
		},
		"_links": {
			"organization": {
				"href": "/v2/organizations/mo380"
			}
		}
	},
	{
		"breeds": {
			"primary": "Mixed Breed"
		},
		"colors": {
			"primary": "Black"
		},
		"age": "Adult",
		"gender": "Female",
		"size": "Small",
		"name": "Chapis",
		"description": "Chapis is 3 years old and 18lbs. When she was a momma dog. She took very good care of her...",
		"photos": [
			{
				"small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193820/3/?bust=1696648755&width=100",
				"medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193820/3/?bust=1696648755&width=300",
				"large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193820/3/?bust=1696648755&width=600",
				"full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193820/3/?bust=1696648755"
			},
			{
				"small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193820/1/?bust=1696648754&width=100",
				"medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193820/1/?bust=1696648754&width=300",
				"large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193820/1/?bust=1696648754&width=600",
				"full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193820/1/?bust=1696648754"
			},
			{
				"small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193820/2/?bust=1696648754&width=100",
				"medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193820/2/?bust=1696648754&width=300",
				"large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193820/2/?bust=1696648754&width=600",
				"full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193820/2/?bust=1696648754"
			}
		],
		"status": "adoptable",
		"contact": {
			"email": "Casadogrescue@gmail.com",
			"phone": null,
			"address": {
				"address1": null,
				"city": "Puyallup",
				"state": "WA",
				"postcode": "98375",
				"country": "US"
			}
		},
		"_links": {
			"organization": {
				"href": "/v2/organizations/wa728"
			}
		}
	},
	{
		"breeds": {
			"primary": "Hound"
		},
		"colors": {
			"primary": null
		},
		"age": "Baby",
		"gender": "Male",
		"size": "Large",
		"name": "Danbury",
		"description": null,
		"photos": [],
		"status": "adoptable",
		"contact": {
			"email": "bluegrassbullyrescue@gmail.com",
			"phone": null,
			"address": {
				"address1": null,
				"city": "Lexington",
				"state": "KY",
				"postcode": "40505",
				"country": "US"
			}
		},
		"_links": {
			"organization": {
				"href": "/v2/organizations/ky536"
			}
		}
	},
	{
		"breeds": {
			"primary": "Hound"
		},
		"colors": {
			"primary": null
		},
		"age": "Baby",
		"gender": "Male",
		"size": "Large",
		"name": "Reynolds",
		"description": null,
		"photos": [],
		"status": "adoptable",
		"contact": {
			"email": "bluegrassbullyrescue@gmail.com",
			"phone": null,
			"address": {
				"address1": null,
				"city": "Lexington",
				"state": "KY",
				"postcode": "40505",
				"country": "US"
			}
		},
		"_links": {
			"organization": {
				"href": "/v2/organizations/ky536"
			}
		}
	},
	{
		"breeds": {
			"primary": "Mixed Breed"
		},
		"colors": {
			"primary": null
		},
		"age": "Baby",
		"gender": "Female",
		"size": "Medium",
		"name": "Ollie",
		"description": null,
		"photos": [],
		"status": "adoptable",
		"contact": {
			"email": "bluegrassbullyrescue@gmail.com",
			"phone": null,
			"address": {
				"address1": null,
				"city": "Lexington",
				"state": "KY",
				"postcode": "40505",
				"country": "US"
			}
		},
		"_links": {
			"organization": {
				"href": "/v2/organizations/ky536"
			}
		}
	},
	{
		"breeds": {
			"primary": "Hound"
		},
		"colors": {
			"primary": null
		},
		"age": "Baby",
		"gender": "Female",
		"size": "Small",
		"name": "Charlotte",
		"description": null,
		"photos": [],
		"status": "adoptable",
		"contact": {
			"email": "bluegrassbullyrescue@gmail.com",
			"phone": null,
			"address": {
				"address1": null,
				"city": "Lexington",
				"state": "KY",
				"postcode": "40505",
				"country": "US"
			}
		},
		"_links": {
			"organization": {
				"href": "/v2/organizations/ky536"
			}
		}
	},
	{
		"breeds": {
			"primary": "Hound"
		},
		"colors": {
			"primary": null
		},
		"age": "Baby",
		"gender": "Male",
		"size": "Large",
		"name": "George",
		"description": null,
		"photos": [],
		"status": "adoptable",
		"contact": {
			"email": "bluegrassbullyrescue@gmail.com",
			"phone": null,
			"address": {
				"address1": null,
				"city": "Lexington",
				"state": "KY",
				"postcode": "40505",
				"country": "US"
			}
		},
		"_links": {
			"organization": {
				"href": "/v2/organizations/ky536"
			}
		}
	},
	{
		"breeds": {
			"primary": "Hound"
		},
		"colors": {
			"primary": null
		},
		"age": "Baby",
		"gender": "Female",
		"size": "Large",
		"name": "Agatha",
		"description": null,
		"photos": [],
		"status": "adoptable",
		"contact": {
			"email": "bluegrassbullyrescue@gmail.com",
			"phone": null,
			"address": {
				"address1": null,
				"city": "Lexington",
				"state": "KY",
				"postcode": "40505",
				"country": "US"
			}
		},
		"_links": {
			"organization": {
				"href": "/v2/organizations/ky536"
			}
		}
	},
	{
		"breeds": {
			"primary": "Hound"
		},
		"colors": {
			"primary": null
		},
		"age": "Baby",
		"gender": "Male",
		"size": "Large",
		"name": "Brimsley",
		"description": null,
		"photos": [],
		"status": "adoptable",
		"contact": {
			"email": "bluegrassbullyrescue@gmail.com",
			"phone": null,
			"address": {
				"address1": null,
				"city": "Lexington",
				"state": "KY",
				"postcode": "40505",
				"country": "US"
			}
		},
		"_links": {
			"organization": {
				"href": "/v2/organizations/ky536"
			}
		}
	},
	{
		"breeds": {
			"primary": "American Bully"
		},
		"colors": {
			"primary": "Gray / Blue / Silver"
		},
		"age": "Baby",
		"gender": "Male",
		"size": "Medium",
		"name": "Onyx",
		"description": "This little sweetie was rescued from an overcrowded shelter in rural TX and brought to Wisconsin in hopes of finding...",
		"photos": [
			{
				"small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193810/1/?bust=1696648690&width=100",
				"medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193810/1/?bust=1696648690&width=300",
				"large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193810/1/?bust=1696648690&width=600",
				"full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193810/1/?bust=1696648690"
			},
			{
				"small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193810/2/?bust=1696648691&width=100",
				"medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193810/2/?bust=1696648691&width=300",
				"large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193810/2/?bust=1696648691&width=600",
				"full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193810/2/?bust=1696648691"
			},
			{
				"small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193810/3/?bust=1696648693&width=100",
				"medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193810/3/?bust=1696648693&width=300",
				"large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193810/3/?bust=1696648693&width=600",
				"full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193810/3/?bust=1696648693"
			},
			{
				"small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193810/4/?bust=1696648694&width=100",
				"medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193810/4/?bust=1696648694&width=300",
				"large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193810/4/?bust=1696648694&width=600",
				"full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193810/4/?bust=1696648694"
			},
			{
				"small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193810/5/?bust=1696648695&width=100",
				"medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193810/5/?bust=1696648695&width=300",
				"large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193810/5/?bust=1696648695&width=600",
				"full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193810/5/?bust=1696648695"
			}
		],
		"status": "adoptable",
		"contact": {
			"email": "Wagandpurr3@gmail.com",
			"phone": "(262) 384-9642",
			"address": {
				"address1": null,
				"city": "West Bend",
				"state": "WI",
				"postcode": "53095",
				"country": "US"
			}
		},
		"_links": {
			"organization": {
				"href": "/v2/organizations/wi541"
			}
		}
	},
	{
		"breeds": {
			"primary": "Dalmatian"
		},
		"colors": {
			"primary": "Bicolor"
		},
		"age": "Baby",
		"gender": "Male",
		"size": "Medium",
		"name": "Checkers ",
		"description": "Looking for a fun family that considers dogs family members. Checkers would love to go with you to the beach...",
		"photos": [
			{
				"small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193807/1/?bust=1696648588&width=100",
				"medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193807/1/?bust=1696648588&width=300",
				"large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193807/1/?bust=1696648588&width=600",
				"full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193807/1/?bust=1696648588"
			},
			{
				"small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193807/2/?bust=1696648589&width=100",
				"medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193807/2/?bust=1696648589&width=300",
				"large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193807/2/?bust=1696648589&width=600",
				"full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193807/2/?bust=1696648589"
			},
			{
				"small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193807/3/?bust=1696648589&width=100",
				"medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193807/3/?bust=1696648589&width=300",
				"large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193807/3/?bust=1696648589&width=600",
				"full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193807/3/?bust=1696648589"
			}
		],
		"status": "adoptable",
		"contact": {
			"email": "hesaves87@yahoo.com",
			"phone": "(408) 849-1080",
			"address": {
				"address1": null,
				"city": "Los Banos",
				"state": "CA",
				"postcode": "93635",
				"country": "US"
			}
		},
		"_links": {
			"organization": {
				"href": "/v2/organizations/ca2805"
			}
		}
	},
	{
		"breeds": {
			"primary": "German Shepherd Dog"
		},
		"colors": {
			"primary": "Bicolor"
		},
		"age": "Young",
		"gender": "Male",
		"size": "Small",
		"name": "SHERLOCK",
		"description": "SHERLOCK is a 2 year old male German Shepherd who&#039;s family has to give him up due to no fault...",
		"photos": [
			{
				"small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193802/2/?bust=1696648524&width=100",
				"medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193802/2/?bust=1696648524&width=300",
				"large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193802/2/?bust=1696648524&width=600",
				"full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193802/2/?bust=1696648524"
			},
			{
				"small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193802/1/?bust=1696648592&width=100",
				"medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193802/1/?bust=1696648592&width=300",
				"large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193802/1/?bust=1696648592&width=600",
				"full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69193802/1/?bust=1696648592"
			}
		],
		"status": "adoptable",
		"contact": {
			"email": "info@arkofsanjuan.org",
			"phone": "(949) 388-0034",
			"address": {
				"address1": "P.O. Box 117",
				"city": "San Juan Capistrano",
				"state": "CA",
				"postcode": "92693",
				"country": "US"
			}
		},
		"_links": {
			"organization": {
				"href": "/v2/organizations/ca1394"
			}
		}
	},
	{
		"breeds": {
			"primary": "Shepherd"
		},
		"colors": {
			"primary": null
		},
		"age": "Young",
		"gender": "Female",
		"size": "Medium",
		"name": "Lilac",
		"description": "Summer is in full bloom and so am I! I love activity (I&amp;#39;m a very energetic puppy on the verge...",
		"photos": [],
		"status": "adoptable",
		"contact": {
			"email": "information@berkeleyhumane.org",
			"phone": "510-845-7735",
			"address": {
				"address1": "2700 Ninth Street",
				"city": "Berkeley",
				"state": "CA",
				"postcode": "94710",
				"country": "US"
			}
		},
		"_links": {
			"organization": {
				"href": "/v2/organizations/ca280"
			}
		}
	},
	{
		"breeds": {
			"primary": "Basset Hound"
		},
		"colors": {
			"primary": null
		},
		"age": "Young",
		"gender": "Female",
		"size": "Medium",
		"name": "Barbie",
		"description": "Hi, I&amp;#39;m Barbie!I&amp;#39;m a sweet young girl who is ready to be your lifelong companion! I&amp;#39;m a little shy...",
		"photos": [],
		"status": "adoptable",
		"contact": {
			"email": "information@berkeleyhumane.org",
			"phone": "510-845-7735",
			"address": {
				"address1": "2700 Ninth Street",
				"city": "Berkeley",
				"state": "CA",
				"postcode": "94710",
				"country": "US"
			}
		},
		"_links": {
			"organization": {
				"href": "/v2/organizations/ca280"
			}
		}
	},
	{
		"breeds": {
			"primary": "Terrier"
		},
		"colors": {
			"primary": null
		},
		"age": "Baby",
		"gender": "Male",
		"size": "Medium",
		"name": "Piko",
		"description": "A furry bundle of joy and endless curiosity! Every day is a new adventure for me, whether I&amp;#39;m chasing my...",
		"photos": [],
		"status": "adoptable",
		"contact": {
			"email": "information@berkeleyhumane.org",
			"phone": "510-845-7735",
			"address": {
				"address1": "2700 Ninth Street",
				"city": "Berkeley",
				"state": "CA",
				"postcode": "94710",
				"country": "US"
			}
		},
		"_links": {
			"organization": {
				"href": "/v2/organizations/ca280"
			}
		}
	},
	{
		"breeds": {
			"primary": "Corgi"
		},
		"colors": {
			"primary": null
		},
		"age": "Young",
		"gender": "Male",
		"size": "Medium",
		"name": "Bibble",
		"description": "I&amp;#39;m a sweet, affectionate older pup who is looking for a patient and nurturing companion! My confidence is growing everyday,...",
		"photos": [],
		"status": "adoptable",
		"contact": {
			"email": "information@berkeleyhumane.org",
			"phone": "510-845-7735",
			"address": {
				"address1": "2700 Ninth Street",
				"city": "Berkeley",
				"state": "CA",
				"postcode": "94710",
				"country": "US"
			}
		},
		"_links": {
			"organization": {
				"href": "/v2/organizations/ca280"
			}
		}
	}
]
    const seedAnimals = () => Animals.bulkCreate(animalData)
module.exports = seedAnimals;