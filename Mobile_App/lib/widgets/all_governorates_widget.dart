import 'package:flutter/material.dart';
import '../app.dart';

class AllGovernoratesWidget extends StatelessWidget {
  const AllGovernoratesWidget({super.key});

  static const List<Map<String, String>> _govs = [
    {'name': 'Cairo',      'emoji': '🏙️'},
    {'name': 'Alexandria', 'emoji': '🌊'},
    {'name': 'Luxor',      'emoji': '🏛️'},
    {'name': 'Aswan',      'emoji': '⛵'},
    {'name': 'Sharm',      'emoji': '🌴'},
    {'name': 'Hurghada',   'emoji': '🤿'},
    {'name': 'Siwa',       'emoji': '🌵'},
    {'name': 'Dahab',      'emoji': '🏖️'},
  ];

  @override
  Widget build(BuildContext context) {
    final isDark     = Theme.of(context).brightness == Brightness.dark;
    final textColor  = isDark ? Colors.white : AppTheme.textPrimary;
    final cardColor  = isDark ? const Color(0xFF1E1E1E) : AppTheme.surface;
    final borderColor= isDark ? const Color(0xFF2A2A2A) : AppTheme.divider;

    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: AppSpacing.md),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text('All Destinations',
                style: TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: textColor)),
              TextButton(
                onPressed: () {},
                child: const Text('See All',
                  style: TextStyle(color: AppTheme.primary, fontSize: 13)),
              ),
            ],
          ),
          const SizedBox(height: AppSpacing.sm),
          GridView.builder(
            shrinkWrap: true,
            physics: const NeverScrollableScrollPhysics(),
            gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: 4,
              mainAxisSpacing: 10,
              crossAxisSpacing: 10,
              childAspectRatio: 0.9,
            ),
            itemCount: _govs.length,
            itemBuilder: (context, index) {
              final gov = _govs[index];
              return GestureDetector(
                onTap: () {},
                child: Container(
                  decoration: BoxDecoration(
                    color: cardColor,
                    borderRadius: BorderRadius.circular(14),
                    border: Border.all(color: borderColor),
                  ),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text(gov['emoji']!, style: const TextStyle(fontSize: 26)),
                      const SizedBox(height: 4),
                      Text(
                        gov['name']!,
                        style: TextStyle(
                          fontSize: 11,
                          fontWeight: FontWeight.w500,
                          color: textColor,
                        ),
                        textAlign: TextAlign.center,
                        overflow: TextOverflow.ellipsis,
                      ),
                    ],
                  ),
                ),
              );
            },
          ),
        ],
      ),
    );
  }
}