# Dependency Inversion Principle (DIP)

The Dependency Inversion Principle (DIP) is one of the SOLID principles in object-oriented design.
It suggests that high-level modules (such as business logic) should not depend on low-level modules (such as specific implementations),
but both should depend on abstractions (interfaces or abstract classes).
Additionally, abstractions should not depend on details; details should depend on abstractions.

In Simple words:

1. High-Level Modules

   - They should not depend on the specific implementations of low-level modules.
   - They should depend on abstractions (interfaces or abstract classes).

2. Low-Level Modules (Specific Implementations):

   - They should also depend on the same abstractions.
   - Abstractions should not depend on the details of low-level modules.

This principle helps to make our code very loosley coupled, and sclable.
