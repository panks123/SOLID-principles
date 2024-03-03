# Interface Segregation Principle (ISP)

It states that a class should not be forced to implement interfaces it does not use.

1. Small, Focused Interfaces:

   - Instead of having a large, all-encompassing interface, break it into smaller, specific interfaces. Each interface should represent a specific set of related behaviors.

2. Classes Should Only Implement What They Need:

   - A class should not be required to implement methods it doesn't use. If an interface has methods that are irrelevant to a class, that class should not be forced to provide implementations for those methods.


Using this principle We can keep our code de-coupled
