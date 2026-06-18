import 'package:flutter/material.dart';
import '../app.dart';

class AllGovernoratesScreen extends StatelessWidget {
  const AllGovernoratesScreen({super.key});

  // Matches the real folder: assets/Governrates/<Name>.jpg
  // Add/adjust entries here as you confirm more file names from your folder.
  static const List<Map<String, String>> _govs = [
    {'name': 'Alexandria', 'image': 'assets/Governrates/Alexandria.jpg'},
    {'name': 'Aswan', 'image': 'assets/Governrates/Aswan.jpg'},
    {'name': 'Asyut', 'image': 'assets/Governrates/Asyut.jpg'},
    {'name': 'Behaira', 'image': 'assets/Governrates/Behira.jpg'},
    {'name': 'Beni Suef', 'image': 'assets/Governrates/Beni_Suef.jpg'},
    {'name': 'Cairo', 'image': 'assets/Governrates/Cairo.jpg'},
    {'name': 'Dakahlia', 'image': 'assets/Governrates/Dakahlia.jpg'},
    {'name': 'Damietta', 'image': 'assets/Governrates/Damietta.jpg'},
    {'name': 'Faiyum', 'image': 'assets/Governrates/Faiyum.jpg'},
    {'name': 'Gharbia', 'image': 'assets/Governrates/Gharbia.jpg'},
    {'name': 'Giza', 'image': 'assets/Governrates/Giza.jpg'},
    {'name': 'Ismailia', 'image': 'assets/Governrates/Ismailia.jpg'},
    {'name': 'Kafr El Sheikh', 'image': 'assets/Governrates/kafr_elshikh.jpg'},
    {'name': 'Luxor', 'image': 'assets/Governrates/Luxor.jpg'},
    {'name': 'Matrouh', 'image': 'assets/Governrates/Matrouh.jpg'},
    {'name': 'Minya', 'image': 'assets/Governrates/Minya.jpg'},
    {'name': 'Monufia', 'image': 'assets/Governrates/Monufia.jpg'},
    {'name': 'New Valley', 'image': 'assets/Governrates/New_Valley.jpg'},
    {'name': 'North Sinai', 'image': 'assets/Governrates/North_Sinai.jpg'},
    {'name': 'Port Said', 'image': 'assets/Governrates/Port_said.jpg'},
    {'name': 'Qalyubia', 'image': 'assets/Governrates/Qalyubia.jpg'},
    {'name': 'Qena', 'image': 'assets/Governrates/Qena.jpg'},
    {'name': 'Red Sea', 'image': 'assets/Governrates/Red_Sea.jpg'},
    {'name': 'Sharqia', 'image': 'assets/Governrates/Sharqia.jpg'},
    {'name': 'Sohag', 'image': 'assets/Governrates/Sohag.jpg'},
    {'name': 'South Sinai', 'image': 'assets/Governrates/South_Sinai.jpg'},
    {'name': 'Suez', 'image': 'assets/Governrates/Suez.jpg'},
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('All Destinations'),
        leading: IconButton(
          icon: const Icon(Icons.arrow_back),
          onPressed: () => Navigator.pop(context),
        ),
      ),
      body: Padding(
        padding: const EdgeInsets.all(AppSpacing.md),
        child: GridView.builder(
          gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 2,
            mainAxisSpacing: 12,
            crossAxisSpacing: 12,
            childAspectRatio: 1.3,
          ),
          itemCount: _govs.length,
          itemBuilder: (context, index) => _GovernorateCard(gov: _govs[index]),
        ),
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
