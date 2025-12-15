1) How did you handle optional props in your components?
I used ? for optional props. Provided default values inside the component to ensure even if a prop is missing.
  
2) What considerations did you make when designing the component interfaces?
Only included props that the component actually needed and avoided passing unnecessary data. I also explicitly defined types (strings,        numbers, functions) to catch errors early.

3) How did you ensure type safety across your components?
I used TypeScript interfaces/types for all props and I also checked that all optional props had default values or conditional rendering to prevent undefined errors.


5) What challenges did you face when implementing component composition?
The main challenges were ensuring type compatibility across nested components, and handling optional children safely
