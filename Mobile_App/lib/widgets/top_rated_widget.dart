import 'package:flutter/material.dart';
import '../app.dart';

class TopRatedWidget extends StatelessWidget {
  const TopRatedWidget({super.key});

  static const List<Map<String, dynamic>> _places = [
    {
      'name': 'Pyramids of Giza',
      'location': 'Giza',
      'rating': 4.9,
      'color': 0xFF1A3C5E
    },
    {
      'name': 'Karnak Temple',
      'location': 'Luxor',
      'rating': 4.8,
      'color': 0xFF9B6E22
    },
    {
      'name': 'Abu Simbel',
      'location': 'Aswan',
      'rating': 4.9,
      'color': 0xFFE8543C
    },
    {
      'name': 'White Desert',
      'location': 'Farafra',
      'rating': 4.7,
      'color': 0xFF2E7D6B
    },
    {
      'name': 'Siwa Oasis',
      'location': 'Matruh',
      'rating': 4.7,
      'color': 0xFF6A4C93
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
              Text('Top Rated Places',
                  style: TextStyle(
                      fontSize: 20,
                      fontWeight: FontWeight.w700,
                      color: textColor)),
              TextButton(
                onPressed: () {},
                child: const Text('See All',
                    style: TextStyle(color: AppTheme.primary, fontSize: 13)),
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
            itemBuilder: (context, index) => _PlaceCard(place: _places[index]),
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
    return Container(
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
            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
            decoration: BoxDecoration(
              color: Colors.white.withOpacity(0.2),
              borderRadius: BorderRadius.circular(8),
            ),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                const Icon(Icons.star_rounded, color: Colors.amber, size: 13),
                const SizedBox(width: 3),
                Text(place['rating'].toString(),
                    style: const TextStyle(
                        color: Colors.white,
                        fontSize: 11,
                        fontWeight: FontWeight.w600)),
              ],
            ),
          ),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(place['name'] as String,
                  style: AppTextStyles.cardTitle,
                  maxLines: 2,
                  overflow: TextOverflow.ellipsis),
              const SizedBox(height: 4),
              Row(
                children: [
                  const Icon(Icons.location_on,
                      color: Colors.white70, size: 12),
                  const SizedBox(width: 2),
                  Text(place['location'] as String,
                      style: AppTextStyles.cardSubtitle),
                ],
              ),
            ],
          ),
        ],
      ),
    );
  }
}
