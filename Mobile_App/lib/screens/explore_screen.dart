import 'package:flutter/material.dart';
import 'place_details_screen.dart';

class ExploreScreen extends StatelessWidget {
  const ExploreScreen({super.key});

  final List<Map<String, dynamic>> places = const [
    {
      'name': 'Pyramids of Giza',
      'location': 'Giza',
      'rating': 4.9,
      'image':
          'https://images.unsplash.com/photo-1572252009286-268acec5ca0a',
      'description':
          'The Pyramids of Giza are among the most famous monuments in the world and one of the Seven Wonders of the Ancient World.',
    },
    {
      'name': 'Karnak Temple',
      'location': 'Luxor',
      'rating': 4.8,
      'image':
          'https://images.unsplash.com/photo-1564507592333-c60657eea523',
      'description':
          'Karnak Temple is one of the largest religious complexes ever built and represents ancient Egyptian civilization.',
    },
    {
      'name': 'Abu Simbel',
      'location': 'Aswan',
      'rating': 4.9,
      'image':
          'https://images.unsplash.com/photo-1524492412937-b28074a5d7da',
      'description':
          'Abu Simbel is famous for its massive rock temples built by Pharaoh Ramses II.',
    },
    {
      'name': 'White Desert',
      'location': 'Farafra',
      'rating': 4.7,
      'image':
          'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
      'description':
          'The White Desert is known for its unique white chalk rock formations and stunning landscapes.',
    },
    {
      'name': 'Siwa Oasis',
      'location': 'Matruh',
      'rating': 4.7,
      'image':
          'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      'description':
          'Siwa Oasis is a peaceful desert oasis famous for its natural springs and historical sites.',
    },
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).scaffoldBackgroundColor,
      appBar: AppBar(
        title: const Text('Explore Places'),
        centerTitle: true,
      ),
      body: ListView.builder(
        itemCount: places.length,
        itemBuilder: (context, index) {
          final place = places[index];

          return Card(
            margin: const EdgeInsets.symmetric(
              horizontal: 12,
              vertical: 8,
            ),
            child: ListTile(
              leading: const Icon(
                Icons.location_on,
                color: Colors.amber,
              ),
              title: Text(place['name']),
              subtitle: Text(place['location']),
              trailing: Text(
                place['rating'].toString(),
              ),
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (_) => PlaceDetailsScreen(
                      name: place['name'],
                      location: place['location'],
                      rating: place['rating'],
                      description: place['description'],
                      imageUrl: place['image'],
                    ),
                  ),
                );
              },
            ),
          );
        },
      ),
    );
  }
}