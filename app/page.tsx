"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Wallet } from "@coinbase/onchainkit/wallet";
import { Transaction } from "@coinbase/onchainkit/transaction";
import { calls } from "./calls";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.headerWrapper}>
        <Wallet />
      </header>

      <main className="flex flex-grow items-center justify-center">
        <div className="w-full max-w-4xl p-4">
          <div className="mx-auto mb-6 w-1/3">
            {/* Base Sepolia testnet'e bağlanacak şekilde düzeltildi */}
            <Transaction
              calls={calls}
              chainId={84532} // Base Sepolia Chain ID
              buttonText="Increment Counter"
              buttonClassName="bg-blue-500 text-white px-4 py-2 rounded"
            />
          </div>
        </div>
      </main>

      <div className={styles.content}>
        <Image
          priority
          src="/sphere.svg"
          alt="Sphere"
          width={200}
          height={200}
        />
        <h1 className={styles.title}>OnchainKit</h1>

        <p>
          Get started by editing <code>app/page.tsx</code>
        </p>

        <h2 className={styles.componentsTitle}>Explore Components</h2>

        <ul className={styles.components}>
          {[
            { name: "Transaction", url: "https://docs.base.org/onchainkit/transaction/transaction" },
            { name: "Swap", url: "https://docs.base.org/onchainkit/swap/swap" },
            { name: "Checkout", url: "https://docs.base.org/onchainkit/checkout/checkout" },
            { name: "Wallet", url: "https://docs.base.org/onchainkit/wallet/wallet" },
            { name: "Identity", url: "https://docs.base.org/onchainkit/identity/identity" },
          ].map((component) => (
            <li key={component.name}>
              <a target="_blank" rel="noreferrer" href={component.url}>
                {component.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}