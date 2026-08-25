"use client";

import { useState } from "react";
import Icon from "./ui/Icon";

type Props = { title?: string; url: string; text: string };

export default function Share({ title = "Share this", url, text }: Props) {
  const [copied, setCopied] = useState(false);

  const enc = encodeURIComponent;
  const targets = [
    {
      name: "WhatsApp",
      icon: "whatsapp",
      href: `https://wa.me/?text=${enc(`${text} ${url}`)}`,
    },
    {
      name: "Facebook",
      icon: "facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}`,
    },
    {
      name: "X",
      icon: "x",
      href: `https://twitter.com/intent/tweet?text=${enc(text)}&url=${enc(url)}`,
    },
    {
      name: "Email",
      icon: "mail",
      href: `mailto:?subject=${enc(text)}&body=${enc(`${text}\n\n${url}`)}`,
    },
  ];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      /* clipboard unavailable — the share links still work */
    }
  };

  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/45">
        {title}
      </p>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
        {targets.map((t) => (
          <a
            key={t.name}
            href={t.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Share on ${t.name}`}
            className="flex h-11 w-11 items-center justify-center rounded-full glass text-white/70 transition-all hover:-translate-y-0.5 hover:border-gold/40 hover:text-gold"
          >
            <Icon name={t.icon} className="h-5 w-5" />
          </a>
        ))}
        <button
          onClick={copy}
          className="inline-flex h-11 items-center gap-2 rounded-full glass px-5 text-sm font-semibold text-white/70 transition-all hover:-translate-y-0.5 hover:border-gold/40 hover:text-gold"
        >
          <Icon name={copied ? "check" : "link"} className="h-4 w-4" />
          {copied ? "Link copied" : "Copy link"}
        </button>
      </div>
    </div>
  );
}
