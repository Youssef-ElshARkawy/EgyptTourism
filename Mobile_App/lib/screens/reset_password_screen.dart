import 'package:flutter/material.dart';
import 'login_screen.dart';

class ResetPasswordScreen extends StatefulWidget {
  const ResetPasswordScreen({super.key});

  @override
  State<ResetPasswordScreen> createState() =>
      _ResetPasswordScreenState();
}

class _ResetPasswordScreenState
    extends State<ResetPasswordScreen> {

  final pass1 = TextEditingController();
  final pass2 = TextEditingController();

  bool obscure1 = true;
  bool obscure2 = true;

  bool valid = false;

  String errorText = "";

  void validate() {

    final password = pass1.text;

    final hasUppercase =
    RegExp(r'[A-Z]').hasMatch(password);

    final hasLowercase =
    RegExp(r'[a-z]').hasMatch(password);

    final hasNumber =
    RegExp(r'[0-9]').hasMatch(password);

    final hasSymbol =
    RegExp(r'[!@#$%^&*(),.?":{}|<>]')
        .hasMatch(password);

    final hasMinLength =
        password.length >= 8;

    if (!hasMinLength) {

      errorText =
      "Password must be at least 8 characters";

    } else if (!hasUppercase) {

      errorText =
      "Password must contain a capital letter";

    } else if (!hasLowercase) {

      errorText =
      "Password must contain a small letter";

    } else if (!hasNumber) {

      errorText =
      "Password must contain a number";

    } else if (!hasSymbol) {

      errorText =
      "Password must contain a symbol";

    } else if (pass1.text != pass2.text) {

      errorText =
      "Passwords do not match";

    } else {

      errorText = "";
    }

    setState(() {

      valid =
          hasUppercase &&
              hasLowercase &&
              hasNumber &&
              hasSymbol &&
              hasMinLength &&
              pass1.text == pass2.text;

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

                const SizedBox(height: 10),

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

                const SizedBox(height: 18),

                const Center(
                  child: Text(
                    "Reset Your Password",
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 30,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),

                const SizedBox(height: 14),

                const Center(
                  child: Text(
                    "Enter your new password below.",
                    style: TextStyle(
                      color: Colors.white70,
                    ),
                  ),
                ),

                const SizedBox(height: 35),

                const Text(
                  "NEW PASSWORD",
                  style: TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                    letterSpacing: 1,
                  ),
                ),

                const SizedBox(height: 12),

                TextField(
                  controller: pass1,
                  obscureText: obscure1,
                  onChanged: (_) => validate(),

                  style: const TextStyle(
                    color: Colors.white,
                  ),

                  decoration: InputDecoration(

                    hintText: "Enter new password",

                    hintStyle: const TextStyle(
                      color: Colors.white38,
                    ),

                    prefixIcon: const Icon(
                      Icons.lock_outline,
                    ),

                    suffixIcon: IconButton(
                      icon: Icon(
                        obscure1
                            ? Icons.visibility_outlined
                            : Icons.visibility_off_outlined,
                      ),

                      onPressed: () {

                        setState(() {
                          obscure1 = !obscure1;
                        });

                      },
                    ),

                    filled: true,
                    fillColor: const Color(0xff141420),

                    border: OutlineInputBorder(
                      borderRadius:
                      BorderRadius.circular(12),
                    ),
                  ),
                ),

                const SizedBox(height: 10),

                Text(
                  errorText.isEmpty
                      ? "Password must be at least 8 characters"
                      : errorText,

                  style: TextStyle(
                    color: errorText.isEmpty
                        ? Colors.white54
                        : Colors.redAccent,
                    fontSize: 13,
                  ),
                ),

                const SizedBox(height: 25),

                const Text(
                  "CONFIRM PASSWORD",
                  style: TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                    letterSpacing: 1,
                  ),
                ),

                const SizedBox(height: 12),

                TextField(
                  controller: pass2,
                  obscureText: obscure2,
                  onChanged: (_) => validate(),

                  style: const TextStyle(
                    color: Colors.white,
                  ),

                  decoration: InputDecoration(

                    hintText: "Confirm new password",

                    hintStyle: const TextStyle(
                      color: Colors.white38,
                    ),

                    prefixIcon: const Icon(
                      Icons.lock_outline,
                    ),

                    suffixIcon: IconButton(
                      icon: Icon(
                        obscure2
                            ? Icons.visibility_outlined
                            : Icons.visibility_off_outlined,
                      ),

                      onPressed: () {

                        setState(() {
                          obscure2 = !obscure2;
                        });

                      },
                    ),

                    filled: true,
                    fillColor: const Color(0xff141420),

                    border: OutlineInputBorder(
                      borderRadius:
                      BorderRadius.circular(12),
                    ),
                  ),
                ),

                const SizedBox(height: 35),

                SizedBox(
                  width: double.infinity,
                  height: 56,

                  child: ElevatedButton(

                    style: ElevatedButton.styleFrom(
                      backgroundColor:
                      const Color(0xff00C853),

                      shape: RoundedRectangleBorder(
                        borderRadius:
                        BorderRadius.circular(12),
                      ),
                    ),

                    onPressed: valid
                        ? () {

                      ScaffoldMessenger.of(context)
                          .showSnackBar(

                        const SnackBar(
                          content: Text(
                            "Password Reset Successfully",
                          ),
                        ),
                      );

                      Navigator.pushAndRemoveUntil(
                        context,
                        MaterialPageRoute(
                          builder: (_) =>
                          const LoginScreen(),
                        ),
                            (route) => false,
                      );

                    }
                        : null,

                    child: const Text(
                      "Reset Password",
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                ),

                const SizedBox(height: 25),

                Center(
                  child: TextButton(
                    onPressed: () {

                      Navigator.pushAndRemoveUntil(
                        context,
                        MaterialPageRoute(
                          builder: (_) =>
                          const LoginScreen(),
                        ),
                            (route) => false,
                      );

                    },

                    child: const Text(
                      "Back to Login",
                      style: TextStyle(
                        color: Colors.white70,
                        fontSize: 16,
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