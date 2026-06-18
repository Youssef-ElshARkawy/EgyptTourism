import 'package:flutter/material.dart';
import '../app.dart';
import '../screens/all_governorates_screen.dart';

class AllGovernoratesWidget extends StatelessWidget {
  const AllGovernoratesWidget({super.key});

  // Matches the real folder: assets/Governrates/<Name>.jpg
  static const List<Map<String, String>> _govs = [
    {'name': 'Cairo', 'image': 'assets/Governrates/Cairo.jpg'},
    {'name': 'Giza', 'image': 'assets/Governrates/Giza.jpg'},
    {'name': 'Alexandria', 'image': 'assets/Governrates/Alexandria.jpg'},
    {'name': 'Luxor', 'image': 'assets/Governrates/Luxor.jpg'},
    {'name': 'Aswan', 'image': 'assets/Governrates/Aswan.jpg'},
    {'name': 'Asyut', 'image': 'assets/Governrates/Asyut.jpg'},
    {'name': 'Behaira', 'image': 'assets/Governrates/Behira.jpg'},
    {'name': 'Beni Suef', 'image': 'assets/Governrates/Beni_Suef.jpg'},
  ];

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final textColor = isDark ? Colors.white : AppTheme.textPrimary;

    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: AppSpacing.md),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text('All Destinations',
                  style: TextStyle(
                      fontSize: 20,
                      fontWeight: FontWeight.w700,
                      color: textColor)),
              TextButton(
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                        builder: (_) => const AllGovernoratesScreen()),
                  );
                },
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
              crossAxisCount: 2,
              mainAxisSpacing: 12,
              crossAxisSpacing: 12,
              childAspectRatio: 1.3,
            ),
            itemCount: _govs.length,
            itemBuilder: (context, index) =>
                _GovernorateCard(gov: _govs[index]),
          ),
        ],
      ),
    );
  }
}

class _GovernorateCard extends StatelessWidget {
  final Map<String, String> gov;
  const _GovernorateCard({required this.gov});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {},
      child: ClipRRect(
        borderRadius: BorderRadius.circular(16),
        child: Stack(
          fit: StackFit.expand,
          children: [
            Image.asset(
              gov['image']!,
              fit: BoxFit.cover,
              errorBuilder: (_, __, ___) => Container(
                color: AppTheme.secondary,
                child: const Center(
                  child: Icon(Icons.image_not_supported,
                      color: Colors.white38, size: 32),
                ),
              ),
            ),
            Container(
              decoration: const BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topCenter,
                  end: Alignment.bottomCenter,
                  colors: [Colors.transparent, Colors.black87],
                  stops: [0.4, 1.0],
                ),
              ),
            ),
            Positioned(
              bottom: 10,
              left: 12,
              right: 12,
              child: Text(
                gov['name']!,
                style: const TextStyle(
                  color: Colors.white,
                  fontSize: 14,
                  fontWeight: FontWeight.w700,
                ),
                overflow: TextOverflow.ellipsis,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
