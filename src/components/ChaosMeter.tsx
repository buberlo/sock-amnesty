'use client';

import { useEffect, useState } from 'react';

type Trend = 'up' | 'down' | 'stable';

type ChaosMeterProps = {
  chaos: number;
  label?: string;
  sublabel?: string;
  trend?: Trend;
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const getTone = (chaos: number) => {
  if (chaos < 35) {
    return {
      name: 'Calm',
      text: 'text-emerald-600',
      stroke: '#10b981',
      soft: 'bg-emerald-50',
      ring: 'ring-emerald-200',
      message: 'The dryer is behaving.',
    };
  }

  if (chaos < 70) {
    return {
      name: 'Simmering',
      text: 'text-amber-600',
      stroke: '#f59e0b',
      soft: 'bg-amber-50',
      ring: 'ring-amber-200',
      message: 'A few socks are plotting.',
    };
  }

  return {
    name: 'Riot',
    text: 'text-rose-600',
    stroke: '#f43f5e',
    soft: 'bg-rose-50',
    ring: 'ring-rose-2