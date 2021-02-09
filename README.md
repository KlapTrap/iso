# Iso

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.3.

## Tests

Run `ng test` to run tests.

## Application

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

Simply enter a iso code in the search panel to see information about the country you've searched for.

Tested in chrome.

Some future improvements:

1. Improve tests
   Test all components
2. Responsive-ness
   Minor tweaks to make the search page responsive
3. Handle non-country iso codes
   i.e sas - South Asia - The api can return partial data, in this case the app works but doesn't render the data very well.
4. Better error handling
   All errors are handled as 404s, server errors should be handled seperatly.
5. Better user input validation
   Is there a pattern to the iso codes? If so can we validate the input conforms to the standard?
6. Cross-broswer testing
   Only tested in chrome
