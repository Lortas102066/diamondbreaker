"use client";
import { FocusCards, Card } from '../components/ui/focus-cards';
import React, { useState } from 'react';

export default function EventCard() {
  const [hovered, setHovered] = useState<number | null>(null);
  const cards = [
    {
      title: "Event 1",
      src: "/portrait1.jpg",
      date: "2022-01-01"
    },
    {
      title: "Event 2",
      src: "/portrait1.jpg",
      date: "2022-01-01"
    },
    {
      title: "Event 2",
      src: "/portrait1.jpg",
      date: "2022-01-01"
    },
    {
      title: "Event 2",
      src: "/portrait1.jpg",
      date: "2022-01-01"
    },
    {
      title: "Event 2",
      src: "/portrait1.jpg",
      date: "2022-01-01"
    },
    {
      title: "Event 2",
      src: "/portrait1.jpg",
      date: "2022-01-01"
    },
  ];

  return (
    <div className="container">
      <FocusCards cards={cards.map((card) => ({
          title: card.title,
          src: card.src,
          date: card.date,
        }))}
      />
    </div>
  );
}