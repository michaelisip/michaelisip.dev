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
git clone https://github.com/spatie/package-skeleton-laravel.git my-awesome-package
cd my-awesome-package
```

2. Use the configure.php script to set up the package:

```bash
php ./configure.php
```

3. During the setup, you'll be prompted to:

- Provide author and vendor details.
- Name your package (e.g., my-awesome-package).
- Provide a description for your package.

The script will automatically replace placeholders (like `:author_name`) with your provided details and rename files accordingly.

## 3. Local Development

To use your package in a Laravel project, you can set up a local link using Composer.

1. Create a Local Laravel App for Testing: Create a Laravel application to test your package:

```bash
laravel new laravel-package-test
cd laravel-package-test
```

2. Link Your Package:

In your Laravel app's root directory, run:

```bash
composer config repositories.my-awesome-package path ../path-to-my-awesome-package
composer require your-vendor/my-awesome-package:@dev
```

This tells Composer to use the local copy of your package instead of downloading it from Packagist.

```json
"repositories": {
   "my-awesome-package": {
      "type": "path",
      "url": "../my-awesome-package"
   }
}
```

3. Require the package using Composer:

```bash
composer require vendor-name/my-awesome-package:@dev
```

Replace `vendor-name/my-awesome-package` with the name defined in your package's composer.json file.

4. Publish Package Assets

If your package includes configuration files, migrations, or views that need to be published, run:

```bash
php artisan vendor:publish --provider="YourVendor\AwesomePackage\AwesomePackageServiceProvider"
```

This will publish the package's assets (e.g., config files) into the Laravel application for testing.

5. Verify Installation

Check that your package's ServiceProvider is loaded by looking in the `config/app.php` file (if auto-discovery is disabled, add the provider manually).

## 5. Test Your Package Locally

Modify your package code in the src directory.

Make changes visible in the Laravel app:

If you've cached configuration, routes, or views, clear the cache:

```bash
php artisan config:clear
php artisan route:clear
php artisan view:clear
```

If you're making changes to migrations, roll them back and re-run:

```bash
php artisan migrate
```

Write test routes or controllers in the Laravel app to verify that your package works as expected.

## 6. Publish the Package

1. Push to a GitHub Repository:

   - Create a repository for your package.
   - Push your package code to the repository.

2. Submit to Packagist:
   - Go to Packagist and log in.
   - Submit your repository to make it installable via Composer.

## 7. Install Your Package in a Laravel App

After publishing, you can install your package in any Laravel app using Composer:

```bash
composer require your-vendor/my-awesome-package
```

## 8. Update Your Package

- When making updates, increment the version number in composer.json following Semantic Versioning.
- Push changes to GitHub to update the package.

By using Spatie's package skeleton, you adhere to best practices and make your package modular, testable, and easy to maintain.
