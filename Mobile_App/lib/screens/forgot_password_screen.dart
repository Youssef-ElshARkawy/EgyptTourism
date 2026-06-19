import 'package:flutter/material.dart';
import 'verification_screen.dart';
import 'login_screen.dart';

class ForgotPasswordScreen extends StatefulWidget {
  const ForgotPasswordScreen({super.key});

  @override
  State<ForgotPasswordScreen> createState() =>
      _ForgotPasswordScreenState();
}

class _ForgotPasswordScreenState
    extends State<ForgotPasswordScreen> {

  final emailController = TextEditingController();

  bool valid = false;

  void validate(String value) {

    setState(() {

      valid = RegExp(
        r'^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$',
      ).hasMatch(value);

    });
  }

  @override
  Widget build(BuildContext context) {

    return Scaffold(
      backgroundColor: Colors.black,

      body: Center(
        child: SingleChildScrollView(

          child: Container(
            margin: const EdgeInsets.all(18),
            padding: const EdgeInsets.all(24),

            decoration: BoxDecoration(
              color: const Color(0xff0B0B15),

              borderRadius: BorderRadius.circular(22),

              border: Border.all(
                color: Colors.white10,
              ),
            ),

            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [

                GestureDetector(
                  onTap: () {

                    Navigator.pushReplacement(
                      context,
                      MaterialPageRoute(
                        builder: (_) => const LoginScreen(),
                      ),
                    );

                  },

                  child: const Row(
                    children: [

                      Icon(
                        Icons.arrow_back,
                        color: Colors.white70,
                        size: 20,
                      ),

                      SizedBox(width: 6),

                      Text(
                        "Back to Login",
                        style: TextStyle(
                          color: Colors.white70,
                          fontSize: 14,
                        ),
                      ),
                    ],
                  ),
                ),

                const SizedBox(height: 35),

                Center(
                  child: RichText(
                    text: const TextSpan(
                      children: [

                        TextSpan(
                          text: 'Egypt',
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 38,
                            fontWeight: FontWeight.bold,
                          ),
                        ),

                        TextSpan(
                          text: 'Xplore',
                          style: TextStyle(
                            color: Color(0xff00C853),
                            fontSize: 38,
                            fontWeight: FontWeight.bold,
                          ),
                        ),

                      ],
                    ),
                  ),
                ),

                const SizedBox(height: 10),

                const Center(
                  child: Text(
                    "Forgot Password?",
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 32,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),

                const SizedBox(height: 20),

                const Center(
                  child: Text(
                    "Enter your email address and we'll send you a\nverification code.",
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      color: Colors.white70,
                      height: 1.5,
                    ),
                  ),
                ),

                const SizedBox(height: 35),

                const Text(
                  "EMAIL ADDRESS",
                  style: TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                    letterSpacing: 1,
                  ),
                ),

                const SizedBox(height: 12),

                TextField(
                  controller: emailController,
                  onChanged: validate,

                  style: const TextStyle(
                    color: Colors.white,
                  ),

                  decoration: InputDecoration(

                    hintText: "Enter your email",

                    hintStyle: const TextStyle(
                      color: Colors.white38,
                    ),

                    prefixIcon: const Icon(
                      Icons.email_outlined,
                    ),

                    filled: true,
                    fillColor: const Color(0xff141420),

                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(12),
                    ),
                  ),
                ),

                const SizedBox(height: 28),

                SizedBox(
                  width: double.infinity,
                  height: 56,

                  child: ElevatedButton(

                    style: ElevatedButton.styleFrom(
                      backgroundColor: const Color(0xff00C853),

                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(12),
                      ),
                    ),

                    onPressed: valid
                        ? () {

                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (_) =>
                              VerificationScreen(
                                email: emailController.text,
                              ),
                        ),
                      );

                    }
                        : null,

                    child: const Text(
                      "Send Verification Code",
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                ),

              ],
            ),
          ),
        ),
      ),
    );
  }
}