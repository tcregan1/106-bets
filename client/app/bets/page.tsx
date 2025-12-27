"use client";

import { useEffect, useState } from "react";
import styles from "./bets.module.css";

type Bet = {
    id: string;
    event: string;
    selection: string;
    odds: number;
    stake: number;
    status: "PENDING" | "WON" | "LOST";
};

const MOCK_BETS: Bet[] = [
    { id: "1", event: "AAAAAAAAAA", selection: "AAAAAAAAAAA", odds: 1.85, stake: 10, status: "PENDING" },
    { id: "2", event: "AAAAAAAAAA", selection: "AAAAAAAAAAA", odds: 5.0, stake: 15, status: "LOST" },
    { id: "3", event: "AAAAAAAAAA", selection: "AAAAAAAAAAA", odds: -5, stake: 5, status: "WON" },
    { id: "4", event: "AAAAAAAAAA", selection: "AAAAAAAAAAA", odds: 1.85, stake: 10, status: "PENDING" },
    { id: "5", event: "AAAAAAAAAA", selection: "AAAAAAAAAAA", odds: 5.0, stake: 15, status: "LOST" },
    { id: "6", event: "AAAAAAAAAA", selection: "AAAAAAAAAAA", odds: -5, stake: 5, status: "WON" },
    { id: "7", event: "AAAAAAAAAA", selection: "AAAAAAAAAAA", odds: 1.85, stake: 10, status: "PENDING" },
    { id: "8", event: "AAAAAAAAAA", selection: "AAAAAAAAAAA", odds: 5.0, stake: 15, status: "LOST" },
    { id: "9", event: "AAAAAAAAAA", selection: "AAAAAAAAAAA", odds: -5, stake: 5, status: "WON" },
];

export default function BetsPage()
{
    const [activeBet, setActiveBet] = useState<Bet | null>(null);

    useEffect(() =>
    {
        const onEscape = (e: KeyboardEvent) =>
        {
            if (e.key === "Escape") setActiveBet(null);
        };

        window.addEventListener("keydown", onEscape);
        return () => window.removeEventListener("keydown", onEscape);
    }, []);

    return (
        <main className={styles.page}>
            <header className={styles.header}>Active Bets</header>

            <section className={styles.list}>
                {MOCK_BETS.map((bet) => (
                    <article
                        key={bet.id}
                        className={styles.betCard}
                        onClick={() =>
                            setActiveBet((current) =>
                                current?.id === bet.id ? null : bet
                            )
                        }
                    >
                        <strong>{bet.event}</strong>
                        <div>{bet.selection}</div>

                        <div className={styles.betMeta}>
                            <span>Odds: {bet.odds.toFixed(2)}</span>
                            <span>Stake: £{bet.stake}</span>
                            <span>{bet.status}</span>
                        </div>
                    </article>
                ))}
            </section>

            {activeBet && (
                <div
                    className={styles.overlay}
                    onClick={() => setActiveBet(null)}
                >
                    <aside
                        className={styles.modal}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className={styles.closeButton}
                            onClick={() => setActiveBet(null)}
                        >
                            ✕
                        </button>

                        <h3>Bet Details</h3>
                        <p><strong>Event:</strong> {activeBet.event}</p>
                        <p><strong>Selection:</strong> {activeBet.selection}</p>
                        <p><strong>Odds:</strong> {activeBet.odds}</p>
                        <p><strong>Stake:</strong> £{activeBet.stake}</p>
                        <p><strong>Status:</strong> {activeBet.status}</p>
                    </aside>
                </div>
            )}
        </main>
    );
}
