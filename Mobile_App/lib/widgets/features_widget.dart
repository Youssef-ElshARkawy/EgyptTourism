import 'package:flutter/material.dart';
import '../app.dart';

class FeaturesWidget extends StatelessWidget {
  const FeaturesWidget({super.key});

  static const List<Map<String, dynamic>> _features = [
    {'icon': Icons.hotel_outlined, 'label': 'Hotels'},
    {'icon': Icons.restaurant_outlined, 'label': 'Food'},
    {'icon': Icons.directions_bus_outlined, 'label': 'Transport'},
  ];

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final textColor = isDark ? Colors.white : AppTheme.textPrimary;
    final bgColor =
        isDark ? const Color(0xFF2A2A2A) : AppTheme.primary.withOpacity(0.1);
    final iconColor = isDark ? AppTheme.primary : AppTheme.primary;

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
            children: _features
                .map((f) => _FeatureItem(
                      icon: f['icon'] as IconData,
                      label: f['label'] as String,
                      textColor: textColor,
                      bgColor: bgColor,
                      iconColor: iconColor,
                    ))
                .toList(),
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

  const _FeatureItem({
    required this.icon,
    required this.label,
    required this.textColor,
    required this.bgColor,
    required this.iconColor,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
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
    );
  }
}
