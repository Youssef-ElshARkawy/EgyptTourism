import 'package:flutter/material.dart';
import '../models/hotels.dart';

class HotelDetailsScreen extends StatelessWidget {
  final Hotel hotel;

  const HotelDetailsScreen({super.key, required this.hotel});

  @override
  Widget build(BuildContext context) {
    // A small gallery built from the same Unsplash photo at different
    // crops, so each hotel shows multiple images without needing
    // separate uploads for every property.
    final List<String> gallery = [
      hotel.imageUrl,
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
      'https://images.unsplash.com/photo-1551918120-9739cb430c6d',
    ];

    return Scaffold(
      backgroundColor: Theme.of(context).scaffoldBackgroundColor,
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // ── Header image with back button ──────────────────
            Stack(
              children: [
                ClipRRect(
                  borderRadius: const BorderRadius.only(
                    bottomLeft: Radius.circular(25),
                    bottomRight: Radius.circular(25),
                  ),
                  child: Image.network(
                    hotel.imageUrl,
                    height: 240,
                    width: double.infinity,
                    fit: BoxFit.cover,
                    errorBuilder: (_, __, ___) => Container(
                      height: 240,
                      color: Colors.grey.shade800,
                      child: const Icon(Icons.hotel,
                          color: Colors.white38, size: 48),
                    ),
                  ),
                ),
                Positioned(
                  top: 40,
                  left: 15,
                  child: CircleAvatar(
                    radius: 22,
                    backgroundColor: Colors.black87,
                    child: IconButton(
                      icon: const Icon(Icons.arrow_back, color: Colors.white),
                      onPressed: () => Navigator.pop(context),
                    ),
                  ),
                ),
              ],
            ),

            Padding(
              padding: const EdgeInsets.all(20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // ── Name ──────────────────────────────────────
                  Text(
                    hotel.name,
                    style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                          fontWeight: FontWeight.bold,
                        ),
                  ),
                  const SizedBox(height: 10),

                  // ── Location ──────────────────────────────────
                  Row(
                    children: [
                      const Icon(Icons.location_on, color: Colors.amber),
                      const SizedBox(width: 5),
                      Text(
                        '${hotel.location}, Egypt',
                        style: TextStyle(
                          color: Theme.of(context).textTheme.bodyMedium?.color,
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 15),

                  // ── Rating + Price ────────────────────────────
                  Row(
                    children: [
                      const Icon(Icons.star, color: Colors.amber),
                      const SizedBox(width: 5),
                      Text(
                        hotel.rating.toString(),
                        style: TextStyle(
                          color: Theme.of(context).textTheme.bodyLarge?.color,
                          fontWeight: FontWeight.w600,
                        ),
                      ),
                      const Spacer(),
                      Text(
                        '${hotel.pricePerNight} EGP',
                        style: const TextStyle(
                          color: Colors.amber,
                          fontSize: 18,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      Text(
                        ' / night',
                        style: TextStyle(
                          color: Theme.of(context).textTheme.bodyMedium?.color,
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 25),

                  // ── Photo gallery ─────────────────────────────
                  Text(
                    'Photos',
                    style: Theme.of(context).textTheme.titleLarge?.copyWith(
                          fontWeight: FontWeight.bold,
                        ),
                  ),
                  const SizedBox(height: 12),
                  SizedBox(
                    height: 110,
                    child: ListView.separated(
                      scrollDirection: Axis.horizontal,
                      itemCount: gallery.length,
                      separatorBuilder: (_, __) => const SizedBox(width: 10),
                      itemBuilder: (context, index) => ClipRRect(
                        borderRadius: BorderRadius.circular(14),
                        child: Image.network(
                          gallery[index],
                          width: 150,
                          height: 110,
                          fit: BoxFit.cover,
                          errorBuilder: (_, __, ___) => Container(
                            width: 150,
                            height: 110,
                            color: Colors.grey.shade800,
                            child: const Icon(Icons.image_not_supported,
                                color: Colors.white38),
                          ),
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(height: 25),

                  // ── About ─────────────────────────────────────
                  Text(
                    'About',
                    style: Theme.of(context).textTheme.titleLarge?.copyWith(
                          fontWeight: FontWeight.bold,
                        ),
                  ),
                  const SizedBox(height: 10),
                  Text(
                    hotel.description,
                    style: TextStyle(
                      color: Theme.of(context).textTheme.bodyMedium?.color,
                      fontSize: 16,
                      height: 1.5,
                    ),
                  ),
                  const SizedBox(height: 30),

                  // ── Book button (visual only for now) ─────────
                  SizedBox(
                    width: double.infinity,
                    height: 55,
                    child: ElevatedButton(
                      style: ElevatedButton.styleFrom(
                        backgroundColor: Colors.amber,
                      ),
                      onPressed: () {},
                      child: const Text(
                        'Book Now',
                        style: TextStyle(
                          fontSize: 18,
                          color: Colors.black,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(height: 20),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
