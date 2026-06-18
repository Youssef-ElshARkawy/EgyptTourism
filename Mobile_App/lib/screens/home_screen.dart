import 'search_screen.dart';
import 'saved_screen.dart';
import 'profile_screen.dart';
import 'explore_screen.dart';
import 'package:flutter/material.dart';
import '../app.dart';
import '../widgets/slider_widget.dart';
import '../widgets/features_widget.dart';
import '../widgets/top_rated_widget.dart';
import '../widgets/all_governorates_widget.dart';
import '../widgets/deals_banner_widget.dart';
import '../widgets/newsletter_widget.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return Scaffold(
      appBar: _buildAppBar(context, isDark),
      body: const SingleChildScrollView(
        physics: BouncingScrollPhysics(),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            SliderWidget(),
            SizedBox(height: AppSpacing.lg),
            FeaturesWidget(),
            SizedBox(height: AppSpacing.lg),
            TopRatedWidget(),
            SizedBox(height: AppSpacing.lg),
            AllGovernoratesWidget(),
            SizedBox(height: AppSpacing.lg),
            DealsBannerWidget(),
            SizedBox(height: AppSpacing.lg),
            NewsletterWidget(),
            SizedBox(height: AppSpacing.xxl),
          ],
        ),
      ),
      bottomNavigationBar: _buildBottomNav(context),
    );
  }

  // ─── App Bar ──────────────────────────────────────────────────
  PreferredSizeWidget _buildAppBar(BuildContext context, bool isDark) {
    return AppBar(
      leading: Padding(
        padding: const EdgeInsets.all(10),
        child: Image.asset(
          'assets/logo1.png',
          width: 38,
          height: 38,
          errorBuilder: (_, __, ___) => const Icon(
            Icons.temple_buddhist,
            color: AppTheme.primary,
            size: 38,
          ),
        ),
      ),
      title: const Text('Egypt Tourism'),
      actions: [
        // Search icon
        IconButton(
          icon: Icon(Icons.search,
              color: isDark ? AppTheme.textPrimaryDk : AppTheme.textPrimary),
          onPressed: () {
            Navigator.push(
              context,
              MaterialPageRoute(
                builder: (context) => const SearchScreen(),
              ),
            );
          },
        ),
      ],
    );
  }

  // ─── Bottom Navigation ────────────────────────────────────────
  Widget _buildBottomNav(BuildContext context) {
    return BottomNavigationBar(
      type: BottomNavigationBarType.fixed,
      selectedFontSize: 11,
      unselectedFontSize: 11,
      elevation: 12,
      currentIndex: 0,
      onTap: (index) {
        if (index == 1) {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => const ExploreScreen(),
            ),
          );
        }
        if (index == 3) {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => const ProfileScreen(),
            ),
          );
        }
        if (index == 2) {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => const SavedScreen(),
            ),
          );
        }
      },
      items: const [
        BottomNavigationBarItem(icon: Icon(Icons.home_rounded), label: 'Home'),
        BottomNavigationBarItem(
            icon: Icon(Icons.explore_outlined), label: 'Explore'),
        BottomNavigationBarItem(
            icon: Icon(Icons.bookmark_border), label: 'Saved'),
        BottomNavigationBarItem(
            icon: Icon(Icons.person_outline), label: 'Profile'),
      ],
    );
  }
}
