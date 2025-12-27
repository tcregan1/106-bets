"use client";

import { useState } from "react";
import styles from "./login.module.css";

export default function LoginPage()
{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) =>
    {
        e.preventDefault();
        setError("");

        if (!username || !password)
        {
            setError("Please enter username and password");
            return;
        }

        console.log("Login:", { username, password });
    };

    return (
        <main className={styles.page}>
            <form className={styles.card} onSubmit={handleSubmit}>
                <h1>Sign in</h1>

                {error && <p className={styles.error}>{error}</p>}

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

                <button type="submit">Log in</button>

                <p className={styles.hint}>
                    Dont have an account? <a href="/signup">Sign up</a>
                </p>
            </form>
        </main>
    );
}
