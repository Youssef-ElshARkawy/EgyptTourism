import 'package:flutter/material.dart';
import '../screens/place_details_screen.dart';
import '../app.dart';

class TopRatedWidget extends StatelessWidget {
  const TopRatedWidget({super.key});

  static const List<Map<String, dynamic>> _places = [
    {
      'name': 'Pyramids of Giza',
      'location': 'Giza',
      'rating': 4.9,
      'color': 0xFF1A3C5E,
      'image':
          'https://images.unsplash.com/photo-1572252009286-268acec5ca0a',
      'description':
          'The Pyramids of Giza are among the most famous monuments in the world and one of the Seven Wonders of the Ancient World.',
    },
    {
      'name': 'Karnak Temple',
      'location': 'Luxor',
      'rating': 4.8,
      'color': 0xFF9B6E22,
      'image':
          'https://images.unsplash.com/photo-1564507592333-c60657eea523',
      'description':
          'Karnak Temple is one of the largest religious complexes ever built and represents ancient Egyptian civilization.',
    },
    {
      'name': 'Abu Simbel',
      'location': 'Aswan',
      'rating': 4.9,
      'color': 0xFFE8543C,
      'image':
          'https://images.unsplash.com/photo-1524492412937-b28074a5d7da',
      'description':
          'Abu Simbel is famous for its massive rock temples built by Pharaoh Ramses II.',
    },
    {
      'name': 'White Desert',
      'location': 'Farafra',
      'rating': 4.7,
      'color': 0xFF2E7D6B,
      'image':
          'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
      'description':
          'The White Desert is known for its unique white chalk rock formations and stunning landscapes.',
    },
    {
      'name': 'Siwa Oasis',
      'location': 'Matruh',
      'rating': 4.7,
      'color': 0xFF6A4C93,
      'image':
          'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      'description':
          'Siwa Oasis is a peaceful desert oasis famous for its natural springs and historical sites.',
    },
  ];

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final textColor = isDark ? Colors.white : AppTheme.textPrimary;

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: AppSpacing.md),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                'Top Rated Places',
                style: TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.w700,
                  color: textColor,
                ),
              ),
              TextButton(
                onPressed: () {},
                child: const Text(
                  'See All',
                  style: TextStyle(
                    color: AppTheme.primary,
                    fontSize: 13,
                  ),
                ),
              ),
            ],
          ),
        ),
        const SizedBox(height: AppSpacing.sm),
        SizedBox(
          height: 190,
          child: ListView.separated(
            scrollDirection: Axis.horizontal,
            padding: const EdgeInsets.symmetric(horizontal: AppSpacing.md),
            physics: const BouncingScrollPhysics(),
            itemCount: _places.length,
            separatorBuilder: (_, __) => const SizedBox(width: 12),
            itemBuilder: (context, index) =>
                _PlaceCard(place: _places[index]),
          ),
        ),
      ],
    );
  }
}

class _PlaceCard extends StatelessWidget {
  final Map<String, dynamic> place;

  const _PlaceCard({required this.place});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => PlaceDetailsScreen(
              name: place['name'],
              location: place['location'],
              rating: place['rating'],
              description: place['description'],
              imageUrl: place['image'],
            ),
          ),
        );
      },
      child: Container(
        width: 150,
        decoration: BoxDecoration(
          color: Color(place['color'] as int),
          borderRadius: BorderRadius.circular(16),
        ),
        padding: const EdgeInsets.all(14),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Container(
              padding:
                  const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
              decoration: BoxDecoration(
                color: Colors.white.withOpacity(0.2),
                borderRadius: BorderRadius.circular(8),
              ),
              child: Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  const Icon(
                    Icons.star_rounded,
                    color: Colors.amber,
                    size: 13,
                  ),
                  const SizedBox(width: 3),
                  Text(
                    place['rating'].toString(),
                    style: const TextStyle(
                      color: Colors.white,
                      fontSize: 11,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                ],
              ),
            ),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  place['name'],
                  style: AppTextStyles.cardTitle,
                  maxLines: 2,
                  overflow: TextOverflow.ellipsis,
                ),
                const SizedBox(height: 4),
                Row(
                  children: [
                    const Icon(
                      Icons.location_on,
                      color: Colors.white70,
                      size: 12,
                    ),
                    const SizedBox(width: 2),
                    Text(
                      place['location'],
                      style: AppTextStyles.cardSubtitle,
                    ),
                  ],
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}