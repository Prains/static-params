# StaticParams Class Documentation

The `StaticParams` class provides a structured way to manage query parameters for URLs in TypeScript applications. It is designed to handle both predefined query parameters and dynamic ones, allowing developers to construct URL query strings efficiently and safely.

## Features

- **Type Safety**: Utilizes TypeScript's generics to ensure type safety for keys and values of query parameters.
- **Default Parameters**: Allows setting default query parameters that can be overridden with dynamic values when needed.
- **URL Encoding**: Automatically handles URL encoding for keys and values to ensure the generated query string is safe to use in URLs.

## Installation

As this is a TypeScript class, ensure that your project is set up to compile TypeScript. Then, include the `StaticParams` class in your project by copying the provided TypeScript code into a file in your project, for example, `StaticParams.ts`.

## Usage

### Step 1: Define Your Query Parameters

Create an object type that defines the keys and default values for your query parameters. Each key in this object will be a string, and the value should be a string representing the default value for that parameter.

```typescript
type QueryList = {
  [key: string]: string;
};
```

### Step 2: Initialize the `StaticParams` Class

Instantiate the `StaticParams` class with your query parameters object. This object will serve as the default set of query parameters for your URLs.

```typescript
const queryList: QueryList = {
  page: "1",
  limit: "10",
  sort: "name",
};

const queryParams = new StaticParams(queryList);
```

### Step 3: Constructing Query Strings

Use the `constructQueryParams` method to construct a query string. You can pass an object with any overrides for the default values. The method will return a query string that you can append to your URLs.

```typescript
const customParams = { page: "2", limit: "5" };
const queryString = queryParams.constructQueryParams(customParams);
// Output: "page=2&limit=5&sort=name"
```






