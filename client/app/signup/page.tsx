"use client";

import { useState } from "react";
import styles from "./signup.module.css";

export default function SignupPage()
{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = (e: React.FormEvent) =>
    {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!username || !password || !confirmPassword)
        {
            setError("All fields are required");
            return;
        }

        if (password.length < 8)
        {
            setError("Password must be at least 8 characters");
            return;
        }

        if (password !== confirmPassword)
        {
            setError("Passwords do not match");
            return;
        }

        console.log("Signup:", { username, password });
        setSuccess("Account created");
    };

    return (
        <main className={styles.page}>
            <form className={styles.card} onSubmit={handleSubmit}>
                <h1>Create account</h1>

                {error && <p className={styles.error}>{error}</p>}
                {success && <p className={styles.success}>{success}</p>}

                <label>
                    Username
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Sam"
                    />
                </label>

                <label>
                    Password
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                    />
                </label>

                <label>
                    Confirm password
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) =>
                            setConfirmPassword(e.target.value)
                        }
                        placeholder="••••••••"
                    />
                </label>

                <button type="submit">Sign up</button>

                <p className={styles.hint}>
                    Already have an account?{" "}
                    <a href="/login">Log in</a>
                </p>
            </form>
        </main>
    );
}
