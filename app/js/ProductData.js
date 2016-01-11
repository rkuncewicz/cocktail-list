module.exports = {
  // Load Mock Product Data Into localStorage
  init: function() {
    localStorage.clear();
    localStorage.setItem('cocktails', JSON.stringify(
    [
        {
            "name": "Negroni",
            "author": "Paul Clarke",
            "photo": "20150323-cocktails-vicky-wasik-negroni.jpg",
            "url": "http://www.seriouseats.com/recipes/2010/04/negroni-cocktail-recipe-gin-campari-vermouth.html",
            "ingredients": [
                {
                    "size": {
                        "quantity": 1,
                        "unit": "ounce"
                    },
                    "ingredient": "dry gin"
                },
                {
                    "size": {
                        "quantity": 1,
                        "unit": "ounce"
                    },
                    "ingredient": "Campari"
                },
                {
                    "size": {
                        "quantity": 1,
                        "unit": "ounce"
                    },
                    "ingredient": "sweet vermouth"
                },
            ],
            "directions": [
                "There are two common ways to serve a Negroni: on the rocks, or straight up. For the former, simply combine the ingredients in an old-fashioned glass filled with ice; stir to combine, twist a thin piece of orange peel over the drink for aromatics and use the twist as garnish.",
                "To serve a Negroni straight up, combine the ingredients in a mixing glass and fill with ice. Stir well for 20 seconds, and strain into a chilled cocktail glass. Twist a piece of orange peel over the drink, and use the twist as garnish."
            ]
        },
        {
            "name": "Old Fashioned",
            "author": "Paul Clarke",
            "photo": "20141104-cocktail-party-old-fashioneds-holiday-vicky-wasik-3.jpg",
            "url": "http://www.seriouseats.com/recipes/2008/06/traditional-old-fashioned-recipe.html",
            "ingredients": [
                {
                    "size": {
                        "quantity": 2,
                        "unit": "ounce"
                    },
                    "ingredient": "bourbon or rye whiskey"
                },
                {
                    "size": {
                        "quantity": 1,
                        "unit": "teaspoon"
                    },
                    "ingredient": "superfine sugar",
                    "alternatives": [{
                            "size": {
                            "quantity": 1
                        },
                        "ingredient": "sugar cube"
                    }]
                },
                {
                    "size": {
                        "quantity": 2.5,
                        "unit": "dash"
                    },
                    "ingredient": "Angostura is tranditional and works well"
                }
            ],
            "directions": [
                "Place the sugar in an Old Fashioned glass and douse with the bitters; add a few drops of water, and stir until the sugar is dissolved. Add the whiskey and give a few good stirs to further dissolve the sugar, then add a couple of large ice cubes. Stir a few times to chill; garnish, if you like, with a slice of orange and a cherry, though it’s perfectly fine to skip this step. If you’re accustomed to topping the drink with soda, at least give it a chance once without; your father brought you up to be open-minded."
            ]
        },
        {
            "name": "Martine",
            "author": "Michael Dietsch",
            "photo": "20150323-cocktails-vicky-wasik-martinez.jpg",
            "url": "http://www.seriouseats.com/recipes/2011/09/martinez-cocktail-gin-cocktail-recipe.html",
            "ingredients": [
                {
                    "size": {
                        "quantity": 1.5,
                        "unit": "ounce"
                    },
                    "ingredient": "Old Tom Gin"
                },
                {
                    "size": {
                        "quantity": 1.5,
                        "unit": "ounce"
                    },
                    "ingredient": "Sweet vermouth"
                },
                {
                    "size": {
                        "quantity": 1,
                        "unit": "teaspoon"
                    },
                    "ingredient": "Maraschino liqueur"
                },
                {
                    "size": {
                        "quantity": 2,
                        "unit": "dash"
                    },
                    "ingredient": "Orange bitter"
                },
                {
                    "size": {
                        "quantity": 1,
                        "unit": "twist"
                    },
                    "ingredient": "lemon"
                }
            ],
            "directions": [
                "Fill a mixing glass with ice. Add gin, sweet vermouth, maraschino liqueur, and orange bitters. Stir until very cold then strain into a chilled cocktail glass. Twist lemon peel over cocktail to express its oils. Rub rim of glass with peel and discard."
            ]
        },
        {
            "name": "Martini",
            "author": "Paul Clarke",
            "photo": "20150323-cocktails-vicky-wasik-martini.jpg",
            "url": "http://www.seriouseats.com/recipes/2010/06/the-martini-recipe.html",
            "ingredients": [
                {
                    "size": {
                        "quantity": 2,
                        "unit": "ounce"
                    },
                    "ingredient": "dry gin", 
                },
                {
                    "size": {
                        "quantity": 1,
                        "unit": "ounce"
                    },
                    "ingredient": "dry vermouth",

                },
                {
                    "size": {
                        "quantity": 1,
                        "unit": "dash"
                    },
                    "ingredient": "orange bitter"
                },
            ],
            "directions": [
                "Combine ingredients in a mixing glass and fill with ice. Stir well to chill and strain into a chilled cocktail glass. Twist a piece of lemon peel over the drink and use as garnish, or, if you must, toss in an olive."
            ]
        },
        {
            "name": "Manhattan Cocktail",
            "author": "The Serious Eats Team",
            "photo": "20150323-cocktails-vicky-wasik-manhattan.jpg",
            "url": "http://www.seriouseats.com/recipes/2008/01/cocktails-manhattan-recipe.html",
            "ingredients": [
                {
                    "size": {
                        "quantity": 4,
                        "unit": "ounce"
                    },
                    "ingredient": "Rye whiskey"
                },
                {
                    "size": {
                        "quantity": 2,
                        "unit": "ounce"
                    },
                    "ingredient": "Sweet vermouth"
                },
                {
                    "size": {
                        "quantity": 4,
                        "unit": "dash"
                    },
                    "ingredient": "Angostura bitter"
                },
                {
                    "size": {
                        "quantity": 2
                    },
                    "ingredient": "Maraschino cherry"
                }
            ],
            "directions": [
                "Pour the whiskey, sweet vermouth, and bitters into a mixing glass filled with ice. Stir until outside of shaker is very cold to touch.",
                "Place a maraschino cherry in each of two chilled cocktail glasses. Dividing evenly, strain the contents of the shaker over cherries and serve immediately."
            ]
        },
        {
            "name": "The Brooklyn Cocktail",
            "author": "Blake Royer",
            "photo": "20150323-cocktails-vicky-wasik-Brooklyn.jpg",
            "url": "http://www.seriouseats.com/recipes/2011/02/the-brooklyn-cocktail-rye-maraschino-vermouth.html",
            "ingredients": [
                {
                    "size": {
                        "quantity": 2, 
                        "unit": "ounce"
                    },
                    "ingredient": "rye",
                    "alternatives": [{
                        "size": {
                            "quantity": 2, 
                            "unit": "ounce"
                        },
                        "ingredient": "whiskey"
                    }]
                },
                {
                    "size": {
                        "quantity": 1, 
                        "unit": "ounce"
                    },
                    "ingredient": "dry vermouth"
                },
                {
                    "size": {
                        "quantity": 0.25, 
                        "unit": "ounce"
                    },
                    "ingredient": "maraschino liqueur"
                },
                {
                    "size": {
                        "quantity": 0.25, 
                        "unit": "ounce"
                    },
                    "ingredient": "Amer Picon",
                    "alternatives": [{
                        "size": {
                            "quantity": 3, 
                            "unit": "dash"
                        },
                        "ingredient": "Angostura or orange bitter"
                    }]
                }
            ],
            "directions": [
                "Combine ingredients with ice and stir until well-chilled. Strain into a chilled cocktail glass."
            ]
        },
        {
            "name": "Daiquiri",
            "author": "Paul Clarke",
            "photo": "20150323-cocktails-vicky-wasik-daiquiri.jpg",
            "url": "http://www.seriouseats.com/recipes/2008/05/daiquiri-recipe.html",
            "ingredients": [
                {
                    "size": {
                        "quantity": 2, 
                        "unit": "ounce"
                    },
                    "ingredient": "light rum"
                },
                {
                    "size": {
                        "quantity": 0.75, 
                        "unit": "ounce"
                    },
                    "ingredient": "lime juice"
                },
                {
                    "size": {
                        "quantity": 1, 
                        "unit": "teaspoon"
                    },
                    "ingredient": "sugar"
                }
            ],
            "directions": [
                "Pour sugar and lime juice into a cocktail shaker and stir until sugar is dissolved. Add the rum and fill shaker with ice; shake well for 10 seconds and strain into a chilled cocktail glass. Garnish with a wedge of lime."
            ]
        },
        {
            "name": "Classic Margarita",
            "author": "The Serious Eats Team",
            "photo": "20150323-cocktails-vicky-wasik-margarita.jpg",
            "url": "http://www.seriouseats.com/recipes/2015/04/classic-margarita-recipe-tequila-cocktail.html",
            "ingredients": [
                {
                    "size": {
                        "quantity": 1, 
                        "unit": "wedge"
                    },
                    "ingredient": "lime"
                },
                {
                    "size": {
                        "quantity": 1, 
                        "unit": "tablespoon"
                    },
                    "ingredient": "coarse salt"
                },
                {
                    "size": {
                        "quantity": 4,
                        "unit": "ounce"
                    },
                    "ingredient": "blanco tequila"
                },
                {
                    "size": {
                        "quantity": 2, 
                        "unit": "ounce"
                    },
                    "ingredient": "Cointreau"
                },
                {
                    "size": {
                        "quantity": 1.5, 
                        "unit": "ounce"
                    },
                    "ingredient": "lime juice"
                }
            ],
            "directions": [
                "Run lime wedge around the outer rims of two rocks glasses and dip rims in salt. Set aside.",
                "In cocktail shaker, combine tequila, Cointreau, and lime juice. Fill with ice and shake until thoroughly chilled, about 15 seconds (the bottom of a metal shaker should frost over).",
                "Fill glasses with fresh ice and strain margarita into both glasses. Garnish with lime wheels and serve."
            ]
        },
                {
            "name": "Sidecar",
            "author": "Paul Clarke",
            "photo": "20141101-cognac-sidecar-carey-jones.jpg",
            "url": "http://www.seriouseats.com/recipes/2010/11/sidecar-drink-cocktail-recipe.html",
            "ingredients": [
                {
                    "size": {
                        "quantity": 2, 
                        "unit": "ounce"
                    },
                    "ingredient": "VSOP Cognac"
                },
                {
                    "size": {
                        "quantity": 1, 
                        "unit": "ounce"
                    },
                    "ingredient": "Cointeau"
                },
                {
                    "size": {
                        "quantity": 0.75, 
                        "unit": "ounce"
                    },
                    "ingredient": "lemon juice"
                },
                {
                    "size": {
                        "quantity": 1                   
                    },
                    "ingredient": "superfine sugar",
                    "optional": true
                }
            ],
            "directions": [
                "Optional: prepare cocktail glass by making a slit in a lemon wedge and running the cut edge around the rim of the glass; then dip the rim in a saucer of superfine sugar to create a thin crust; chill the glass until needed.",
                "Combine ingredients in a cocktail shaker and fill with ice. Shake well until chilled, about 10 seconds. Strain into prepared glass; garnish with a twist of orange or lemon peel, if the urge comes across."
            ]
        },
        {
            "name": "French 75",
            "author": "Maggie Hoffman",
            "photo": "20150323-cocktails-vicky-wasik-french75.jpg",
            "url": "http://www.seriouseats.com/recipes/2011/03/french-75-cocktial-gin-champagne-lemon.html",
            "ingredients": [
                {
                    "size": {
                        "quantity": 2, 
                        "unit": "ounce"
                    },
                    "ingredient": "gin"
                },
                {
                    "size": {
                        "quantity": 1, 
                        "unit": "ounce"
                    },
                    "ingredient": "lemon juice"
                },
                {
                    "size": {
                        "quantity": 2, 
                        "unit": "teaspoon"
                    },
                    "ingredient": "sugar"
                },
                {
                    "ingredient": "champagne"
                },
                {
                    "size": {
                        "quantity": 1, 
                    },
                    "ingredient": "lemon spiral"
                },
                {
                    "size": {
                        "quantity": 1, 
                    },
                    "ingredient": "cocktail cherry"
                }
            ],
            "directions": [
                "Fill cocktail shaker with ice. Shake gin, lemon juice, and sugar in a cocktail shaker until well chilled, about 15 seconds. Strain into a champagne flute.",
                "Top with Champagne. Stir gently, garnish with a long, thin lemon spiral and a cocktail cherry."
            ]
        },
        {
            "name": "The Ultimate Fully-Loaded Bloody Mary",
            "author": "J. KENJI LÓPEZ-ALT",
            "photo": "twase-20150320-21.jpg",
            "url": "http://www.seriouseats.com/recipes/2011/06/the-ultimate-fully-loaded-bloody-mary-recipe.html",
            "ingredients": [
                {
                    "size": {
                        "quantity": 1, 
                        "unit": "tablespoon"
                    },
                    "ingredient": "celery salt"
                },
                {
                    "size": {
                        "quantity": 0.25, 
                        "unit": "wedge"
                    },
                    "ingredient": "lemon"
                },
                {
                    "size": {
                        "quantity": 0.5, 
                        "unit": "teaspoon"
                    },
                    "ingredient": "Worcestershire sauce"
                },
                {
                    "size": {
                        "quantity": 0.25, 
                        "unit": "teaspoon"
                    },
                    "ingredient": "soy sauce"
                },
                {
                    "size": {
                        "quantity": 0.5, 
                        "unit": "teaspoon"
                    },
                    "ingredient": "black pepper"
                },
                {
                    "size": {
                        "quantity": 1, 
                        "unit": "dash"
                    },
                    "ingredient": "cayenne pepper"
                },
                {
                    "size": {
                        "quantity": 0.25, 
                        "unit": "teaspoon"
                    },
                    "ingredient": "hot sauce"
                },
                {
                    "size": {
                        "quantity": 0.5, 
                        "unit": "teaspoon"
                    },
                    "ingredient": "fresh horseradish",
                    alternatives: [{
                            "size": {
                            "quantity": 1, 
                            "unit": "teaspoon"
                        },
                        "ingredient": "prepared horseradish"
                    }]
                },
                {
                    "size": {
                        "quantity": 2, 
                        "unit": "ounce"
                    },
                    "ingredient": "vodka"
                },
                {
                    "size": {
                        "quantity": 4, 
                        "unit": "ounce"
                    },
                    "ingredient": "tomato juice"
                },
                {
                    "size": {
                        "quantity": 1, 
                        "unit": "stick"
                    },
                    "ingredient": "celery"
                }
            ],
            "directions": [
                "Place celery salt in a shallow saucer. Rub rim of 12-ounce tumbler with 1 lemon wedge and coat wet edge with celery salt. Place lemon wedge on rim of glass. Fill glass with ice.",
                "Add Worcestershire, soy, black pepper, cayenne pepper, hot sauce, and horseradish to bottom of cocktail shaker. Fill shaker with ice and add vodka, tomato juice, and juice of remaining lemon wedge. Shake vigorously, taste for seasoning and heat, and adjust as necessary. Strain into ice-filled glass. Garnish with celery stalk and serve immediately."
            ]
        },
        {
            "name": "Irish Coffee",
            "author": "Paul Clarke",
            "photo": "20150323-cocktails-vicky-wasik-irish-coffee.jpg",
            "url": "http://www.seriouseats.com/recipes/2010/03/irish-coffee-drink-st-patricks-dayrecipe.html",
            "ingredients": [
                {
                    "size": {
                        "quantity": 1.5, 
                        "unit": "ounce"
                    },
                    "ingredient": "whiskey"
                },
                {
                    "size": {
                        "quantity": 4, 
                        "unit": "ounce"
                    },
                    "ingredient": "coffee"
                },
                {
                    "size": {
                        "quantity": .75, 
                        "unit": "ounce"
                    },
                    "ingredient": "simple syrup"
                },
                {
                    "ingredient": "heavy cream"
                }
            ],
            "directions": [
                "Whip the cream until thick, but not stiff. In a pre-warmed toddy mug, Irish coffee glass or sturdy wine glass, combine the whiskey, simple syrup and coffee (for more richness of flavor without added sweetness, try making the simple syrup using brown sugar or demerara sugar). Stir to combine, and gently spoon between 1/2-inch and an inch of cream atop the coffee mixture, to taste."
            ]
        },
        {
            "name": "Jack Rose",
            "author": "J. KENJI LÓPEZ-ALT",
            "photo": "20150323-cocktails-vicky-wasik-jack-rose.jpg",
            "url": "http://www.seriouseats.com/recipes/2014/08/jack-rose-cocktail-recipe.html",
            "ingredients": [
                {
                    "size": {
                        "quantity": 2, 
                        "unit": "ounce"
                    },
                    "ingredient": "Laird's Applejack"
                },
                {
                    "size": {
                        "quantity": 0.75, 
                        "unit": "ounce"
                    },
                    "ingredient": "grenadine"
                },
                {
                    "size": {
                        "quantity": 0.75, 
                        "unit": "ounce"
                    },
                    "ingredient": "lemon"
                },
                {
                    "size": {
                        "quantity": 1, 
                        "unit": "dash"
                    },
                    "ingredient": "Peychaud's bitter"
                },
                {
                    "ingredient": "lemon twist"
                }
            ],
            "directions": [
                "Combine applejack, grenadine, lemon juice, and bitters in a cocktail shaker. Fill shaker with ice and shake vigorously until well chilled, about 15 seconds. Strain into a chilled coupe or martini glass. Squeeze lemon twist over surface of drink, skin-side-out to release fragrant oils. Rub rim of glass with skin side of lemon twist and discard twist. Serve immediately."
            ]
        },
        {
            "name": "Boulevardier",
            "author": "Paul Clarke",
            "photo": "20150323-cocktails-vicky-wasik-boulevardier.jpg",
            "url": "http://www.seriouseats.com/recipes/2008/09/boulevardier-recipe.html",
            "ingredients": [
                {
                    "size": {
                        "quantity": 1, 
                        "unit": "ounce"
                    },
                    "ingredient": "bourbon",
                    "alternatives": [{
                        "size": {
                            "quantity": 1, 
                            "unit": "ounce"
                        },
                        "ingredient": "rye whiskey"
                    }]
                },
                {
                    "size": {
                        "quantity": 1, 
                        "unit": "ounce"
                    },
                    "ingredient": "Campari"
                },
                {
                    "size": {
                        "quantity": 1, 
                        "unit": "ounce"
                    },
                    "ingredient": "vermouth"
                },
                {
                    "ingredient": "orange twist",
                    "alternatives": [{
                        "ingredient": "cherry"
                    }]
                }
            ],
            "directions": [
                "Pour ingredients into a mixing glass and fill with cracked ice. Stir well for 20 seconds and strain into a chilled cocktail glass. Garnish with a cherry or a twist of orange peel."
            ]
        },
        {
            "name": "The Sazerac",
            "author": "Paul Clarke",
            "photo": "20150323-cocktails-vicky-wasik-sazerac.jpg",
            "url": "http://www.seriouseats.com/recipes/2007/07/cocktails-recipes-the-sazerac.html",
            "ingredients": [
                {
                    "size": {
                        "quantity": 1, 
                        "unit": "teaspoon"
                    },
                    "ingredient": "sugar"
                },
                {
                    "size": {
                        "quantity": 3.5, 
                        "unit": "dash"
                    },
                    "ingredient": "Peychaud's Bitters"
                },
                {
                    "size": {
                        "quantity": 3, 
                        "unit": "drops"
                    },
                    "ingredient": "water"
                },
                {
                    "size": {
                        "quantity": 2, 
                        "unit": "ounce"
                    },
                    "ingredient": "whiskey"
                },
                {
                    "size": {
                        "quantity": 1, 
                        "unit": "teaspoon"
                    },
                    "ingredient": "Herbsaint",
                    alternatives: [
                        {
                            "size": {
                                "quantity": 1, 
                                "unit": "teaspoon"
                            },
                            "ingredient": "pastis"
                        },
                        {
                            "size": {
                                "quantity": 1, 
                                "unit": "teaspoon"
                            },
                            "ingredient": "absinthe"
                        }
                    ]
                },
                {
                    "ingredient": "lemon peel"
                }
            ],
            "directions": [
                "Chill an Old Fashioned glass or small tumbler in your freezer.",
                "In a mixing glass, combine sugar, Peychaud’s Bitters, and a few drops of water. Mix until sugar is dissolved, and add rye. Add plenty of ice, and stir for about 30 seconds",
                "Pour Herbsaint, pastis, or absinthe into your chilled glass, and rotate glass until the inside is well coated; discard the excess. Strain the liquid from your mixing glass into the serving glass. Twist a piece of lemon peel over the drink. Indulge."
            ]
        },
        {
            "name": "Vieux Carré",
            "author": "Paul Clarke",
            "photo": "20150323-cocktails-vicky-wasik-vieux-carre.jpg",
            "url": "http://www.seriouseats.com/recipes/2008/07/vieux-carre-recipe.html",
            "ingredients": [
                {
                    "size": {
                        "quantity": 0.5, 
                        "unit": "teaspoon"
                    },
                    "ingredient": "Benedictine"
                },
                {
                    "size": {
                        "quantity":1, 
                        "unit": "dash"
                    },
                    "ingredient": "Peychaud's Bitters"
                },
                {
                    "size": {
                        "quantity": 1, 
                        "unit": "dash"
                    },
                    "ingredient": "Angostura Bitters"
                },
                {
                    "size": {
                        "quantity": 0.75, 
                        "unit": "ounce"
                    },
                    "ingredient": "rye whiskey"
                },
                {
                    "size": {
                        "quantity":0.75, 
                        "unit": "ounce"
                    },
                    "ingredient": "cognac"
                },
                {
                    "size": {
                        "quantity":0.75, 
                        "unit": "ounce"
                    },
                    "ingredient": "sweet vermouth"
                }
            ],
            "directions": [
                "Combine all ingredients in a mixing glass and fill with ice; stir well for 20 seconds and strain into an ice-filled Old Fashioned glass. Garnish with a cherry."
            ]
        },
        {
            "name": "Ramos Fizz",
            "author": "Paul Clarke",
            "photo": "20150323-cocktails-robyn-lee-ramos-gin-fizz.jpg",
            "url": "http://www.seriouseats.com/recipes/2009/06/time-for-a-drink-ramos-fizz.html",
            "ingredients": [
                {
                    "size": {
                        "quantity":2, 
                        "unit": "ounce"
                    },
                    "ingredient": "gin"
                },
                {
                    "size": {
                        "quantity":1, 
                        "unit": "ounce"
                    },
                    "ingredient": "cream"
                },
                {
                    "size": {
                        "quantity":1, 
                    },
                    "ingredient": "egg white"
                },
                {
                    "size": {
                        "quantity":0.5, 
                        "unit": "ounce"
                    },
                    "ingredient": "lemon juice"
                },
                {
                    "size": {
                        "quantity":0.5, 
                        "unit": "ounce"
                    },
                    "ingredient": "lime juice"
                },
                {
                    "size": {
                        "quantity":2, 
                        "unit": "teaspoons"
                    },
                    "ingredient": "sugar"
                },
                {
                    "size": {
                        "quantity":2.5, 
                        "unit": "drops"
                    },
                    "ingredient": "orange flower water"
                },
                {
                    "ingredient": "Seltzer"
                }
            ],
            "directions": [
                "Combine everything except seltzer in a cocktail shaker. Tradition dictates that the drink be shaken very hard for at least one and preferably two full minutes with ice. You can cheat by either whisking the mixture with a milk-frother or whisk (or tossing a spring from a Hawthorne strainer into the shaker and using that to whip the ingredients) until foamy, and then shaking with ice for a good 20 seconds, or you can buckle down and take the fully authentic ride, while working off the calories you’ll be taking in from the cream and sugar. Strain into a chilled Collins glass and add an ounce or two of chilled seltzer, to taste."
            ]
        },
        {
            "name": "Mint Julep",
            "author": "Paul Clarke",
            "photo": "20150323-cocktails-vicky-wasik-mint-julep.jpg",
            "url": "http://www.seriouseats.com/recipes/2010/04/how-to-make-a-mint-julep-recipe-derby-day.html",
            "ingredients": [
                {
                    "size": {
                        "quantity": 2.5, 
                        "unit": "ounces"
                    },
                    "ingredient": "bourbon"
                },
                {
                    "size": {
                        "quantity":1, 
                        "unit": "teaspoon"
                    },
                    "ingredient": "sugar dissolved in 1 teaspoon water"
                },
                {
                    "size": {
                        "quantity":9, 
                        "unit": "leaves"
                    },
                    "ingredient": "fresh mint"
                },
                {
                    "ingredient": "mint sprigs"
                },
                {
                    "ingredient": "crushed ice"
                }
            ],
            "directions": [
                "Place the sugar and water at the bottom of a julep cup or tall glass and stir until sugar is dissolved (or speed the process by using simple syrup). Add the mint leaves and gently bruise with a wooden muddler or a wooden spoon. Take care not to overwork the mint, but swab the sides of the glass with the mint's aromatic oils. Half-fill the glass with crushed ice and add the bourbon, stirring to combine. Fill the glass with crushed ice and stir until the outside of the glass frosts. Add more crushed ice if needed to fill, and generously adorn the drink with sprigs of fresh mint. Serve with a short straw, so the fragrance of the mint bouquet will greet the drinker with each sip."
            ]
        },
        {
            "name": "Whiskey Sour",
            "author": "Paul Clarke",
            "photo": "20150323-cocktails-vicky-wasik-whiskey-sour.jpg",
            "url": "http://www.seriouseats.com/recipes/2007/10/cocktails-whiskey-sour.html",
            "ingredients": [
                {
                    "size": {
                        "quantity": 2, 
                        "unit": "ounce"
                    },
                    "ingredient": "whiskey"
                },
                {
                    "size": {
                        "quantity": 1, 
                        "unit": "ounce"
                    },
                    "ingredient": "lemon juice"
                },
                {
                    "size": {
                        "quantity": 1, 
                        "unit": "teaspoon"
                    },
                    "ingredient": "sugar"
                },
                {
                    "size": {
                        "quantity":1, 
                    },
                    "ingredient": "egg white",
                    optional: true
                }
            ],
            "directions": [
                "Pour ingredients into a cocktail shaker, fill with ice and shake for 10 seconds (if using the egg white, give it a little extra muscle and a little extra time). Strain into a chilled cocktail glass, or into an ice-filled Old Fashioned glass. Garnish with a cherry, a slice of orange, or everything or nothing at all."
            ]
        },
        {
            "name": "Mai Tai",
            "author": "Paul Clarke",
            "photo": "20150323-cocktails-vicky-wasik-mai-tai.jpg",
            "url": "http://www.seriouseats.com/recipes/2008/03/time-for-a-drink-mai-tai-recipe.html",
            "ingredients": [
                {
                    "size": {
                        "quantity":2, 
                        "unit": "ounce"
                    },
                    "ingredient": "Jamaican Rum"
                },
                {
                    "size": {
                        "quantity":1, 
                        "unit": "ounce"
                    },
                    "ingredient": "lime juice"
                },
                {
                    "size": {
                        "quantity": 0.5, 
                        "unit": "ounce"
                    },
                    "ingredient": "curaçao"
                },
                {
                    "size": {
                        "quantity":0.25, 
                        "unit": "ounce"
                    },
                    "ingredient": "orgeat"
                },
                {
                    "size": {
                        "quantity": 0.25, 
                        "unit": "ounce"
                    },
                    "ingredient": "rock candy syrup",
                    "notes:": [
                        "simple syrup with a drop or two of vanilla extract"
                    ]
                },
                {
                    "ingredient": "mint"
                }
            ],
            "directions": [
                "Pour all ingredients into a cocktail shaker and fill with ice. Shake well for 10 seconds and strain into a double old-fashioned glass filled with crushed ice. Garnish with lime shell and a sprig of fresh mint."
            ]
        },
        {
            "name": "Planters Punch",
            "author": "Paul Clarke",
            "photo": "20150406-cocktails-planters-punch-robyn-lee-1.jpg",
            "url": "http://www.seriouseats.com/recipes/2010/07/planters-punch-cocktail-recipe.html",
            "ingredients": [
                {
                    "size": {
                        "quantity": 3, 
                        "unit": "ounce"
                    },
                    "ingredient": "Coruba Dark Jamaican Rum"
                },
                {
                    "size": {
                        "quantity": 1, 
                        "unit": "ounce"
                    },
                    "ingredient": "simple syrup"
                },
                {
                    "size": {
                        "quantity": 0.75, 
                        "unit": "ounce"
                    },
                    "ingredient": "lime juice"
                },
                {
                    "size": {
                        "quantity": 3, 
                        "unit": "dash"
                    },
                    "ingredient": "Angostura bitter"
                }
            ],
            "directions": [
                "Combine ingredients in a tall glass and fill with crushed ice. Swizzle with a bar spoon until a frost forms on the outside of the glass. The ice will settle as you do this; add more crushed ice to fill, garnish with a mint sprig."
            ]
        },
        {
            "name": "Cosmopolitan",
            "author": "MICHAEL DIETSCH",
            "photo": "20150323-cocktails-vicky-wasik-cosmopolitan.jpg",
            "url": "http://www.seriouseats.com/recipes/2011/10/how-to-make-a-cosmopolitan-cocktail-best-recipe.html",
            "ingredients": [
                {
                    "ingredient": "Ice"
                },
                {
                    "size": {
                        "quantity":1.5, 
                        "unit": "ounce"
                    },
                    "ingredient": "citrus-flavoured vodka"
                },
                {
                    "size": {
                        "quantity": 0.5, 
                        "unit": "ounce"
                    },
                    "ingredient": "triple sec"
                },
                {
                    "size": {
                        "quantity": 0.5, 
                        "unit": "ounce"
                    },
                    "ingredient": "cranberry juice"
                },
                {
                    "size": {
                        "quantity":0.25, 
                        "unit": "ounce"
                    },
                    "ingredient": "lime juice"
                },
                {
                    "ingredient": "orange twist"
                }
            ],
            "directions": [
                "Fill a cocktail shaker with ice. Add vodka, triple sec, cranberry, and lime, and shake well. Strain into a chilled cocktail glass. Garnish with orange twist."
            ]
        },
        {
            "name": "Pisco Sour",
            "author": "Paul Clarke",
            "photo": "20150323-cocktails-vicky-wasik-pisco-sour.jpg",
            "url": "http://www.seriouseats.com/recipes/2011/02/time-for-a-drink-pisco-sour.html",
            "ingredients": [
                {
                    "size": {
                        "quantity": 3, 
                        "unit": "ounce"
                    },
                    "ingredient": "pisco"
                },
                {
                    "size": {
                        "quantity": 1, 
                        "unit": "ounce"
                    },
                    "ingredient": "lime juice"
                },
                {
                    "size": {
                        "quantity":0.75, 
                        "unit": "ounce"
                    },
                    "ingredient": "simple syrup"
                },
                {
                    "size": {
                        "quantity":1, 
                    },
                    "ingredient": "egg white"
                },
                {
                    "size": {
                        "quantity": 1, 
                        "unit": "dash"
                    },
                    "ingredient": "Angostura bitter"
                }
            ],
            "directions": [
                "Combine pisco, lime, simple syrup, and egg white in a cocktail shaker without ice and seal. Shake vigorously until egg white is foamy, about 10 seconds. Add ice to shaker and shake again very hard until well-chilled, about 10 seconds. Strain into chilled cocktail glass; dash bitters atop the egg-white foam.",
                "For simple syrup: In a jar, combine 1 cup water with 1 cup superfine sugar. Seal jar and shake until sugar is completely dissolved. Keep remainder refrigerated."
            ]
        },
        {
            "name": "Tom Collins",
            "author": "Paul Clarke",
            "photo": "20150323-cocktails-vicky-wasik-tom-collins.jpg",
            "url": "http://www.seriouseats.com/recipes/2008/08/tom-collins-recipe.html",
            "ingredients": [
                {
                    "size": {
                        "quantity": 2, 
                        "unit": "ounces"
                    },
                    "ingredient": "gin"
                },
                {
                    "size": {
                        "quantity": 0.5, 
                    },
                    "ingredient": "juice of a lemon"
                },
                {
                    "size": {
                        "quantity": 1, 
                        "unit": "teaspoon"
                    },
                    "ingredient": "sugar"
                },
                {
                    "ingredient": "chilled club soda"
                }
            ],
            "directions": [
                "Add gin, lemon and sugar to a Collins glass and stir to dissolve sugar (you can instead use simple syrup and make the process easier). Fill glass with large chunks of ice and top with chilled club soda. Insert straw and do what comes natural."
            ]
        },
        {
            "name": "The Last Word",
            "author": "Paul Clarke",
            "photo": "20150323-cocktails-vicky-wasik-last-word.jpg",
            "url": "http://www.seriouseats.com/recipes/2007/10/cocktails-the-last-word.html",
            "ingredients": [
                {
                    "size": {
                        "quantity":0.75, 
                        "unit": "ounce"
                    },
                    "ingredient": "gin"
                },
                {
                    "size": {
                        "quantity":0.75, 
                        "unit": "ounce"
                    },
                    "ingredient": "lime juice"
                },
                {
                    "size": {
                        "quantity":0.75, 
                        "unit": "ounce"
                    },
                    "ingredient": "maraschino liqueur"
                },
                {
                    "size": {
                        "quantity": 0.75, 
                        "unit": "ounce"
                    },
                    "ingredient": "green Chartreuse"
                }
            ],
            "directions": [
                "Combine ingredients in a cocktail shaker. Fill with ice, and shake briskly for 10 seconds. Strain into a chilled cocktail glass."
            ]
        }
    ]));
  }
};
