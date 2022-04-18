State Concept and Functional Path

The Grand State Definition Simplified

1. The State is a central repository for all components to interact with.

Functional Path from UI to State Interaction

2. a. When a user interacts(ie clicks a button) with the UI a component method is called.

   b.This component method can actually call a state method, dispatching info to the state by using the state action reference name.

   c. The component has been made aware of the state by the @Select decorator that passes in teh state, declaring it as an observable.

   d. The observable is implemented in the component through the constructor, which subscribes to the state store.
