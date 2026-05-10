import 'package:flutter/material.dart';
import '../app.dart';

class NewsletterWidget extends StatelessWidget {
  const NewsletterWidget({super.key});

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final textColor = isDark ? Colors.white : AppTheme.textPrimary;
    final subColor = isDark ? const Color(0xFF9CA3AF) : AppTheme.textSecondary;
    final bgColor =
        isDark ? const Color(0xFF1A1A1A) : AppTheme.primary.withOpacity(0.08);
    final borderColor = isDark
        ? AppTheme.primary.withOpacity(0.3)
        : AppTheme.primary.withOpacity(0.2);
    final fillColor = isDark ? const Color(0xFF2A2A2A) : AppTheme.surface;

    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: AppSpacing.md),
      child: Container(
        width: double.infinity,
        padding: const EdgeInsets.all(AppSpacing.lg),
        decoration: BoxDecoration(
          color: bgColor,
          borderRadius: BorderRadius.circular(20),
          border: Border.all(color: borderColor),
        ),
        child: Column(
          children: [
            const Icon(Icons.mail_outline_rounded,
                size: 36, color: AppTheme.primary),
            const SizedBox(height: 10),
            Text('Stay Updated',
                style: TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.w700,
                    color: textColor)),
            const SizedBox(height: 6),
            Text(
              'Subscribe to get the latest travel deals\nand discover hidden gems in Egypt.',
              textAlign: TextAlign.center,
              style: TextStyle(fontSize: 13, color: subColor, height: 1.5),
            ),
            const SizedBox(height: 16),
            Row(
              children: [
                Expanded(
                  child: TextField(
                    style: TextStyle(color: textColor),
                    decoration: InputDecoration(
                      hintText: 'Enter your email',
                      hintStyle: TextStyle(color: subColor, fontSize: 14),
                      prefixIcon:
                          Icon(Icons.email_outlined, size: 18, color: subColor),
                      filled: true,
                      fillColor: fillColor,
                      contentPadding: const EdgeInsets.symmetric(
                          vertical: 12, horizontal: 14),
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(12),
                        borderSide: BorderSide(
                            color: isDark
                                ? const Color(0xFF2A2A2A)
                                : AppTheme.divider),
                      ),
                      enabledBorder: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(12),
                        borderSide: BorderSide(
                            color: isDark
                                ? const Color(0xFF2A2A2A)
                                : AppTheme.divider),
                      ),
                    ),
                  ),
                ),
                const SizedBox(width: 10),
                ElevatedButton(
                  onPressed: () {},
                  style: ElevatedButton.styleFrom(
                    backgroundColor: AppTheme.primary,
                    padding: const EdgeInsets.symmetric(
                        horizontal: 18, vertical: 14),
                    shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(12)),
                  ),
                  child: const Text('Join',
                      style: TextStyle(
                          color: Colors.white, fontWeight: FontWeight.w600)),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
