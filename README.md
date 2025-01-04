# Firebase Realtime Database Silent Write Failure

This repository demonstrates a common, yet subtle, bug in Firebase Realtime Database interactions: a silent failure in write operations caused by overly restrictive security rules.

The `firebaseBug.js` file shows the client-side code attempting to write data.  It appears to work without error, but the data is not persisted.

`firebaseBugSolution.js` presents the corrected security rules and demonstrates how to resolve the issue.