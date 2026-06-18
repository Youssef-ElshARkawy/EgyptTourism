import 'package:flutter/material.dart';
import 'place_details_screen.dart';

class SearchScreen extends StatefulWidget {
  const SearchScreen({super.key});

  @override
  State<SearchScreen> createState() => _SearchScreenState();
}

class _SearchScreenState extends State<SearchScreen> {
  final List<Map<String, dynamic>> places = [
    {
      "name": "Pyramids of Giza",
      "location": "Giza",
      "rating": 4.9,
      "image": "https://images.unsplash.com/photo-1572252009286-268acec5ca0a",
      "description":
          "The Pyramids of Giza are among the most famous monuments in the world and one of the Seven Wonders of the Ancient World.",
    },
    {
      "name": "Karnak Temple",
      "location": "Luxor",
      "rating": 4.8,
      "image": "https://images.unsplash.com/photo-1564507592333-c60657eea523",
      "description":
          "Karnak Temple is one of the largest religious complexes ever built and represents ancient Egyptian civilization.",
    },
    {
      "name": "Abu Simbel",
      "location": "Aswan",
      "rating": 4.9,
      "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
      "description":
          "Abu Simbel is famous for its massive rock temples built by Pharaoh Ramses II.",
    },
    {
      "name": "White Desert",
      "location": "Farafra",
      "rating": 4.7,
      "image": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      "description":
          "The White Desert is known for its unique white chalk rock formations and stunning landscapes.",
    },
    {
      "name": "Siwa Oasis",
      "location": "Matruh",
      "rating": 4.7,
      "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      "description":
          "Siwa Oasis is a peaceful desert oasis famous for its natural springs and historical sites.",
    },
  ];

  String query = "";

  @override
  Widget build(BuildContext context) {
    final results = places.where((place) {
      return place["name"].toLowerCase().contains(query.toLowerCase());
    }).toList();

    return Scaffold(
      appBar: AppBar(
        title: const Text("Search"),
      ),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(16),
            child: TextField(
              decoration: const InputDecoration(
                hintText: "Search places...",
                prefixIcon: Icon(Icons.search),
                border: OutlineInputBorder(),
              ),
              onChanged: (value) {
                setState(() {
                  query = value;
                });
              },
            ),
          ),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16),
            child: Align(
              alignment: Alignment.centerLeft,
              child: Text(
                "${results.length} places found",
                style: const TextStyle(
                  fontSize: 14,
                  fontWeight: FontWeight.w500,
                ),
              ),
            ),
          ),
          const SizedBox(height: 10),
          Expanded(
            child: results.isEmpty
                ? const Center(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Icon(
                          Icons.search_off,
                          size: 60,
                          color: Colors.grey,
                        ),
                        SizedBox(height: 10),
                        Text(
                          "No places found",
                          style: TextStyle(
                            fontSize: 18,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        Text(
                          "Try searching for another place",
                        ),
                      ],
                    ),
                  )
                : ListView.builder(
                    itemCount: results.length,
                    itemBuilder: (context, index) {
                      return ListTile(
                        leading: const Icon(Icons.place),
                        title: Text(results[index]["name"]),
                        subtitle: Text(results[index]["location"]),
                        trailing: Text(
                          results[index]["rating"].toString(),
                        ),
                        onTap: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (context) => PlaceDetailsScreen(
                                name: results[index]["name"],
                                location: results[index]["location"],
                                rating: results[index]["rating"],
                                description: results[index]["description"],
                                imageUrl: results[index]["image"],
                              ),
                            ),
                          );
                        },
                      );
                    },
                  ),
          ),
        ],
      ),
    );
  }
}
