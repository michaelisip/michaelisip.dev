---
slug: service-interface-pattern-in-laravel
title: Service Interface Pattern in Laravel
authors: [michaelisip]
tags: [laravel, web-development]
---

# The Service Pattern

Think of your Laravel app like a pizza shop. The controller is like the cashier—it takes the customer’s order. But the cashier doesn’t actually make the pizza, right? That’s the chef’s job.

In the Service Pattern, the **service class** is like the chef—it does the hard work (business logic) like making the pizza, while the controller just talks to the customer (takes the request and gives back the response). This way, the controller stays clean and focused, and the service handles the detailed stuff.

### The Service Interface Pattern

Now let’s say you have two chefs: one for Italian-style pizza and another for New York-style pizza. The shop owner wants the cashier to be able to call either chef without worrying about their style. So, the owner gives both chefs a checklist (an **interface**) to follow.

In Laravel, an interface is like that checklist. It makes sure that any service (like the Italian or New York chef) can be swapped in and out, as long as they follow the same rules. This is useful for testing, growing your app, or making changes later without breaking everything.

So, the Service Pattern organizes your code, and the Service Interface Pattern makes it flexible and easier to work with!

## Why Use the Service Interface Pattern?

1. **Abstraction**: Decouples the implementation from the code that uses it.

2. **Swappability**: You can replace the service implementation without modifying the dependent code.

3. **Testability**: Allows easy mocking of services in tests.

4. **Scalability**: Facilitates adding new implementations for the same service logic.

## Directory Structure

```markdown
app/
├── Services/
│ ├── UserService.php
│ └── Contracts/
│   └── UserServiceInterface.php
└── Providers/
    └── AppServiceProvider.php
```

## Steps to Implement the Service Interface Pattern

### 1. Create a Service Interface

Interfaces are usually placed in the App\Contracts or App\Services\Contracts directory.

- Create the directory for contracts:

```bash
mkdir -p app/Services/Contracts
```

- Define the service interface:

```php
<?php

namespace App\Services\Contracts;

interface UserServiceInterface
{
    public function registerUser(array $data);
}
```

### 2. Create a Concrete Implementation of the Interface

The concrete implementation resides in the app/Services directory.

2. Create the service class

```php
<?php

namespace App\Services;

use App\Services\Contracts\UserServiceInterface;
use App\Models\User;

class UserService implements UserServiceInterface
{
    public function registerUser(array $data)
    {
        // Business logic for registering a user
        $user = User::create($data);

        return $user;
    }
}
```

### 3. Bind the Interface to the Implementation

Use Laravel’s service container to bind the interface to the concrete class. This ensures the app uses the correct implementation whenever the interface is injected.

- Add the binding in `App\Providers\AppServiceProvider` or a dedicated service provider.

```php
<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\Contracts\UserServiceInterface;
use App\Services\UserService;

class AppServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind(UserServiceInterface::class, UserService::class);
    }
}
```

### 4. Use Dependency Injection in Controllers

Inject the interface into your controllers instead of the concrete class.

```php
<?php

namespace App\Http\Controllers;

use App\Services\Contracts\UserServiceInterface;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function __construct(
        private readonly UserServiceInterface $userService
    ) {
    }

    public function register(RegisterUserRequest $request)
    {
        $user = $this->userService->registerUser($validated);

        return response()->json(['user' => $user], 201);
    }
}

```
