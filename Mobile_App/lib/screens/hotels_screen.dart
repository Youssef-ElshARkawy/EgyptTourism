import 'package:flutter/material.dart';
import '../app.dart';
import '../models/hotels.dart';

class HotelsScreen extends StatelessWidget {
  const HotelsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return Scaffold(
      appBar: AppBar(
        title: const Text('Hotels'),
        leading: IconButton(
          icon: const Icon(Icons.arrow_back),
          onPressed: () => Navigator.pop(context),
        ),
      ),
      // Using placeholder data for now — once the backend server is running,
      // this list will be replaced by a call to ApiService().getHotels()
      body: ListView.builder(
        padding: const EdgeInsets.all(AppSpacing.md),
        itemCount: placeholderHotels.length,
        itemBuilder: (context, index) => _HotelCard(
          hotel: placeholderHotels[index],
          isDark: isDark,
        ),
      ),
    );
  }
}

class _HotelCard extends StatelessWidget {
  final Hotel hotel;
  final bool isDark;
  const _HotelCard({required this.hotel, required this.isDark});

  @override
  Widget build(BuildContext context) {
    final textColor = isDark ? Colors.white : AppTheme.textPrimary;
    final subColor = isDark ? const Color(0xFF9CA3AF) : AppTheme.textSecondary;
    final cardColor = isDark ? const Color(0xFF1E1E1E) : AppTheme.surface;
    final borderColor = isDark ? const Color(0xFF2A2A2A) : AppTheme.divider;

    return Container(
      margin: const EdgeInsets.only(bottom: 16),
      decoration: BoxDecoration(
        color: cardColor,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: borderColor),
      ),
      child: Row(
        children: [
          // Hotel image
          ClipRRect(
            borderRadius:
                const BorderRadius.horizontal(left: Radius.circular(16)),
            child: Image.asset(
              hotel.imageUrl,
              width: 110,
              height: 110,
              fit: BoxFit.cover,
              errorBuilder: (_, __, ___) => Container(
                width: 110,
                height: 110,
                color: AppTheme.secondary,
                child: const Icon(Icons.hotel, color: Colors.white38, size: 32),
              ),
            ),
          ),

          // Hotel info
          Expanded(
            child: Padding(
              padding: const EdgeInsets.all(12),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    hotel.name,
                    style: TextStyle(
                        fontSize: 15,
                        fontWeight: FontWeight.w700,
                        color: textColor),
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                  ),
                  const SizedBox(height: 4),
                  Row(
                    children: [
                      Icon(Icons.location_on, size: 13, color: subColor),
                      const SizedBox(width: 2),
                      Text(hotel.location,
                          style: TextStyle(fontSize: 12, color: subColor)),
                    ],
                  ),
                  const SizedBox(height: 8),
                  Row(
                    children: [
                      Container(
                        padding: const EdgeInsets.symmetric(
                            horizontal: 6, vertical: 2),
                        decoration: BoxDecoration(
                          color: AppTheme.primary.withOpacity(0.15),
                          borderRadius: BorderRadius.circular(6),
                        ),
                        child: Row(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            const Icon(Icons.star_rounded,
                                color: AppTheme.primary, size: 13),
                            const SizedBox(width: 2),
                            Text(hotel.rating.toString(),
                                style: const TextStyle(
                                    fontSize: 11,
                                    fontWeight: FontWeight.w700,
                                    color: AppTheme.primary)),
                          ],
                        ),
                      ),
                      const Spacer(),
                      Text(
                        '${hotel.pricePerNight} EGP',
                        style: const TextStyle(
                            fontSize: 14,
                            fontWeight: FontWeight.w700,
                            color: AppTheme.primary),
                      ),
                      Text(' /night',
                          style: TextStyle(fontSize: 11, color: subColor)),
                    ],
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
