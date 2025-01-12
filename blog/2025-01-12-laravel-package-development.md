---
slug: laravel-package-development
title: Laravel Package Development
authors: [michaelisip]
tags: [laravel, package-development, spatie, package-skeleton-laravel]
---

# Laravel Package Development With Spatie Package Skeleton

Spatie provides an excellent [package skeleton](https://github.com/spatie/package-skeleton-laravel) for Laravel developers who want to develop and distribute their own Laravel packages. Here's a step-by-step guide to using Spatie's package skeleton for Laravel package development:

## 1. Install the Spatie Package Skeleton

Spatie's skeleton repository can be used as a starting point for your Laravel package.

1. Clone the repository:

```bash
git clone https://github.com/spatie/package-skeleton-laravel.git your-package-name
cd your-package-name
```

2. Use the configure-skeleton.sh script to set up the package:

```bash
php ./configure.php
````

3. During the setup, you'll be prompted to:
- Provide your name, email, and GitHub username.
- Name your package (e.g., my-awesome-package).
- Provide a description for your package.

The script will automatically replace placeholders (like :author_name) with your provided details and rename files accordingly.

## 2. Publish the Package
1. Push to a GitHub Repository:
    - Create a repository for your package.
-Push your package code to the repository.

2. Submit to Packagist:
    - Go to Packagist and log in.
    - Submit your repository to make it installable via Composer.

## 3. Install Your Package in a Laravel App
After publishing, you can install your package in any Laravel app using Composer:

```bash
composer require your-vendor/your-package
```

## 4. Update Your Package
- When making updates, increment the version number in composer.json following Semantic Versioning.
- Push changes to GitHub to update the package.

By using Spatie's package skeleton, you adhere to best practices and make your package modular, testable, and easy to maintain.