To fix this, I updated the Firebase security rules to allow writes from my client application.  The crucial step was ensuring the rules granted write access for the specific path I was targeting.

Here's how I adjusted the security rules:
```
// Original restrictive rules:
{
  "rules": {
    ".read": true, // Only allows reading
    ".write": false // Prevents writing
  }
}

// Corrected rules allowing writes:
{
  "rules": {
    ".read": true,
    "yourDataPath": {
      ".write": "auth != null" // Allow writes for authenticated users
    }
  }
}
```

By explicitly allowing writes to `yourDataPath` (replace with your actual path) for authenticated users, the issue was resolved.  The authenticated user ensures that only authorized clients can write to the database.  Remember to deploy the updated rules after making these changes.