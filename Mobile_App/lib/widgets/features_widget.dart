import 'package:flutter/material.dart';
import '../app.dart';
import '../screens/hotels_screen.dart';

class FeaturesWidget extends StatelessWidget {
  const FeaturesWidget({super.key});

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final textColor = isDark ? Colors.white : AppTheme.textPrimary;
    final bgColor =
        isDark ? const Color(0xFF2A2A2A) : AppTheme.primary.withOpacity(0.1);
    const iconColor = AppTheme.primary;

    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: AppSpacing.md),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Our Services',
            style: TextStyle(
              fontSize: 20,
              fontWeight: FontWeight.w700,
              color: textColor,
              letterSpacing: -0.3,
            ),
          ),
          const SizedBox(height: AppSpacing.md),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              _FeatureItem(
                icon: Icons.hotel_outlined,
                label: 'Hotels',
                textColor: textColor,
                bgColor: bgColor,
                iconColor: iconColor,
                onTap: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (_) => const HotelsScreen()),
                  );
                },
              ),
              _FeatureItem(
                icon: Icons.restaurant_outlined,
                label: 'Food',
                textColor: textColor,
                bgColor: bgColor,
                iconColor: iconColor,
                onTap: () {}, // Not wired yet
              ),
              _FeatureItem(
                icon: Icons.directions_bus_outlined,
                label: 'Transport',
                textColor: textColor,
                bgColor: bgColor,
                iconColor: iconColor,
                onTap: () {}, // Not wired yet
              ),
            ],
          ),
        ],
      ),
    );
  }
}

class _FeatureItem extends StatelessWidget {
  final IconData icon;
  final String label;
  final Color textColor;
  final Color bgColor;
  final Color iconColor;
  final VoidCallback onTap;

  const _FeatureItem({
    required this.icon,
    required this.label,
    required this.textColor,
    required this.bgColor,
    required this.iconColor,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Column(
        children: [
          Container(
            width: 60,
            height: 60,
            decoration: BoxDecoration(
              color: bgColor,
              borderRadius: BorderRadius.circular(16),
            ),
            child: Icon(icon, color: iconColor, size: 28),
          ),
          const SizedBox(height: 8),
          Text(
            label,
            style: TextStyle(
              fontSize: 12,
              fontWeight: FontWeight.w500,
              color: textColor,
            ),
          ),
        ],
      ),
    );
  }
}
