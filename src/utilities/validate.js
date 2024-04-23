export const validate = (object, schema) => Object
  .entries(schema)
  .map(([key, validate]) => [
    key,
    !validate.required || (key in object),
    validate.test(object[key]),
    validate.error
  ])
  .filter(([_, ...tests]) => !tests.every(Boolean))
  .map(([key, invalid, _, error]) => new Error(error))
;
