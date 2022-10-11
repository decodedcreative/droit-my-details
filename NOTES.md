# Project Notes

## Approach

### Design system

The project was created by building out a suite of reusable UI components in React using Typescript. This helped showcase how to build out a design system. These components were then combined within `App.tsx` to create the page shown in the design.

The idea was to keep the components lean and only contain logic and/or provide styles which would be useful in multiple places within this and future applications.

For this reason there are a few areas where the final build does not entirely match the design in terms of component spacing etc. For example, the vertical spacing between the Add another (email) button and the form submit button. This was a conscious decision where spacing did not match any other elements in the design. In a real-world situation contact would have been made with the design team to discuss this and tweak the design to ideally only use theme spacing values, and when not possible, add new values to the theme.

### Styled Components

Styled Components has been used as it provides:

- A new style scope for every Styled Component created (prevents unwanted style rule clashes caused by conflicting definitions)
- A Theme Provider component which allows all theme values to be accessible from any component within the application

To add consistency to style definitions inspiration has been taken from BEM naming conventions. All Styled Components within a single `.styles.tsx` file have been named with a prefix of the component they are part of e.g - `Button`, `ButtonMedia`, `ButtonText`, etc.

They are then imported into a component via a single aliased import:

`import * as S from 'button.styles.tsx'`

They are then used within the returned JSX like so:

```
<S.Button>
  <S.ButtonText>Click me</S.ButtonText>
</S.Button>
```

### Grid

When adding a responsive grid layout to the application there were 2 possible options:

- Build the layout into the components themselves e.g - a Nav component which spans 3 columns
- Build dedicated grid and grid column components and place the "content" components within these

The latter option was chosen as a Grid component can be used to provide the layout for multiple components reducing the amount of repetitive styles within the application. It does however add a lot of bloat to the JSX component tree. With more time, explorations would have been made to reduce this - perhaps by creating some common layout components which group patterns of grid markup together.

## Responsive behaviour

No mobile or tablet device designs were provided. However, media queries have been added as part of component styling and sensible assumptions have been made about how to optimise the layout for the space available at each breakpoint.

### Form

The form on the My Details page has its state managed via a single `useState` hook. The state is held in the variable `form` and updated via the method `setForm`. Grouping the state of all form controls allows them to be managed together. For example, a `Cancel` button can clear the form by calling `setForm` with a new blank form state rather than having to clear all form controls individually.

The state variable `form` holds a Javascript object. Properties have been declared within it for all the initial form controls. Each property is named after the `name` attribute of its corresponding form control. This technique allows dynamic fields, such as those added by the `Add More` email addresses button, to also have their state managed by `setForm`.

The `Add another` (email address) button adds a maximum of 4 additional text input fields for the user to add extra contact details.

When the form submits, a state variable `formSubmitted` is updated from `false` to `true`. This change of state causes the App component to rerender. At this point all of the form fields are replaced with printed values of whatever is held in state for that field's value at that point in time. This allows the majority of the layout, labels and headings to be reused from the My Details form page for a confirmation page, allowing the user to sense check their entries. Clicking the Cancel button at any point in time will clear the form. However if it is clicked after the form has been submitted, the page will switch back from its state as a confirmation page to an edit form to allow the user to provide new values. With more time, further work would have allowed for the form to be loaded with previous values already in the fields. The Submit button could be replaced with an Edit button on the confirmation page to allow the user to trigger the required state change.

## Infrastructure

### Create React App

Create React App was chosen as a project start point to provide basic infrastructure such as:

- Web server (accessible via http://localhost:3000)
- React
- React DOM
- Typescript compilation
- React Testing Library / Jest (although unit tests were out deemed out of scope)

It was selected due to the scope of the application being small i.e - a single page, and also for developer familiarity. However if this was a commercial project and needed to be expanded upon, Create React App would not be used.

In a larger application, the importance of dividing the application up into, not only components, but also pages, would be much more important. It would also be assumed that dynamic data from an API may need to be served to multiple pages. Whilst this would still technically be possible using Create React App, it would place the onus on the developer(s) to add this infrastructure. Other projects such as [Next.js](https://nextjs.org/) or [Gatsby](https://www.gatsbyjs.com/) would be more suitable as they provide these tools out of the box on a per page basis and would save time.

### Next.js

For a larger application - i.e - an app containing all pages shown in the design's navigation - Next.js would be a good fit as a project start point. In particular to provide:

[Routing and Page components](https://nextjs.org/docs/routing/introduction)
[Layout component ](https://nextjs.org/docs/basic-features/layouts) for components common across multiple pages
[Pre-rendering](https://nextjs.org/docs/api-routes/introduction) Static Generation Vs Server Side Rendering

There are also other benefits such as providing a framework for error handling via Error Boundaries and image and font optimization.

## Scope

Due to time constraints, some expected features of this application have been strategically omitted such as:

**Unit Tests**
This project uses a similar tech stack and technical approach to [Decoded Creative React Components](https://github.com/decodedcreative/react-components). Examples of tests written using React Testing Library are found in each component's sub-directory e.g - [Decoded Creative Typography Tests](https://github.com/decodedcreative/react-components/blob/main/libs/react-components/src/lib/components/typography/typography.spec.tsx). These tests provide assertions for both functional logic and styles. As with this project, Styled Components (SC) is used to provide styling. In the main, styles have been tested using snapshots but due to use of SC, in some cases individual style rules have been tested. For example - checking that each size variant of the Typography component has the correct font-size applied. This line-by-line approach of testing style rules would obviously be extremely laborious if applied to the codebase in its entirety but used sparingly for certain use cases it can be effective.

With more time available, this project would have followed a similar approach.

**Form Validation**
The requirement for validating form input was omitted from both the designs and the README brief and so was deemed out of scope. However in a commercial project it would be essential and should this project be expanded upon, it would be recommended to make use of market-leading React validation libraries such as [Formik](https://formik.org/) or [React Hook Form](https://react-hook-form.com/). All form controls in this project have been developed as controlled components with their state passed in via props. This approach would allow either of these two libraries to be added seamlessly in the future.

**Email address tooltip icon**
This was purposefully omitted as there were no designs for the expected tooltip which would load if the user clicked on it for further information.
