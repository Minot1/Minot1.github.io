# n00bzCTF 2023 - Lost Writeup
## Challenge:

> I got lost. Help me find out where I am. Flag format is n00bz{Name_Of_Pin_On_Google_Maps}

and we get an image file called `where.png`:

![Challenge image](/n00bzCTF2023/Lost/where.png)

## Solution:
It is a photograph of a scenery and seems like we need to find this place. It also says in the challenge that the flag is the name of the pin on Google Maps.

So let's use the image search of Google:

![Google image search results](/n00bzCTF2023/Lost/image_search_results.png)

There is no exact match, but all results indicate that it is San Francisco. Specifically, it must be a hill that has a nice view of the sea, including a bridge.

![San Francisco in Maps](/n00bzCTF2023/Lost/san_francisco_maps.png)

So I started to investigate some popular hills in San Francisco with the help of Google Maps and Google Street views, but couldn't find the exact view.

Then, a detail in the image caught my attention:

![Little detail](/n00bzCTF2023/Lost/pier.png)

There is a very recognizable structure near the sea and the street climbs directly from the sea to the exact point where the photo was taken. So, if I can find that structure in Google Streets, I could go up the street and find the flag.

I started to investigate the shore. Unfortunately, there were tens, if not hundreds, of those structures alongside the shore ("Piers" to be more precise). This was a bit disappointing but I kept searching along the shore.

Then, I realized that not all Piers had a street in front of them that goes up. Some had skyscrapers in front of them, some had no roads connected. This narrowed down the search significantly. There were 2 or 3 places to look.

I checked each of them and:

![View from Pier 9](/n00bzCTF2023/Lost/view_from_pier.png)

I went up through the street and it turns out that it is called Vallejo Steps.

## n00bz{Vallejo_Steps}
