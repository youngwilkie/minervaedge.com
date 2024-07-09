export type Author = {
  name: string;
  image: string;
  bio?: string;
  _id?: number | string;
  _ref?: number | string;
};

export type Content = {
  _id: number;
  title: string;
  slug?: any;
  metadata: string;
  body?: string;
  image: any;
  author?: Author;
  tags?: string[];
  publishedAt?: string;
  description?: string;
  };

export type Feature = {
id: number;
icon: string;
title: string;
description: string;
};

export type Language = {
language: string;
rank: number;
};