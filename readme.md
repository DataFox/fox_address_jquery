# Datafox AU address autocomplete.

[www.data-fox.com.au](https://data-fox.com.au/)


## API

* `$(selector).dataAddress(options);`
    * Sets up autocomplete for input field(s).
    * `options`: An object literal which defines the settings to use for the autocomplete plugin. Available option settings listed below.

### Example

This example will add auticomplete to field `#address-lookup-field` and onSelect field `#streetNameFieldId` will have be populated with street name.

````
  $('#address-lookup-field').dataAddress({
      serviceUrl: 'https://api.data-fox.com.au/v1/geo/search',
      apiToken: '##################',
      formFields: {
        streetName: '#streetNameFieldId'
      }
    })
````

### Configuration Settings
  * `serviceUrl`: API endpoint
  * `apiToken`: API Access Token
  * `formFields`: List of fields to map values into

#### formFields Dataset
  * `address`: Full address line
  * `buildingName`: Building name if available
  * `flatNumber`: Flat/Unit number if available
  * `highlight`: Highlighted result
  * `latitude`: Latitude
  * `longitude`: Longitude
  * `localityName`: Suburb name
  * `lotId`: Full Plan/Lot ID
  * `lotNumber`: Lookup Plan/Lot ID
  * `postcode`: Location Postcode
  * `state`: State Name
  * `streetName`: Street Name
  * `streetSuffix`: Street Suffix
  * `streetType`: Street Type

## Instance Methods

Autocomplete instance has following methods:

* `setOptions(options)`: you may update any option at any time. Options are listed above.
* `clear`: clears suggestion cache and current suggestions.
* `clearCache`: clears suggestion cache.
* `disable`: deactivate autocomplete.
* `enable`: activates autocomplete if it was deactivated before.
* `hide`: hides suggestions.
* `dispose`: destroys autocomplete instance. All events are detached and suggestion containers removed.



## License

Based on Ajax Autocomplete for jQuery which is freely distributable under the
terms of an MIT-style [license](https://github.com/devbridge/jQuery-Autocomplete/blob/master/dist/license.txt).

Copyright notice and permission notice shall be included in all
copies or substantial portions of the Software.

## Authors

Tomas Kirda / [@tkirda](https://twitter.com/tkirda)

Alexander Tsirel / [@noma4i](https://github.com/noma4i)
