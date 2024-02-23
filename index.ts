import { StaticParams } from "./dist/StaticParams";

const params = new StaticParams({
  sort: "",
  filter: "",
});

console.log(
  params.constructQueryParams({
    sort: "asc",
    filter: "name",
  })
);
