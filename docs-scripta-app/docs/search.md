# Search

Searches are initiated by the `Search` clause of 
`Frontend.update`.  This clause invokes `Frontend.Search.search model`
which send the message

```elm
Types.SearchForDocuments StandardHandling model.currentUser model.inputSearchKey
```

to the backend where
`Backend.Search.withQuery` is called.  The real work is done by
this function from module `TextSearch.Search` (jxxcarlson/elm-text-search):

```elm
match = matchWithQueryString identity Search.NotCaseSensitive query
```

Query strings for `Search.queryWithString` 
look like `foo bar`, `foo -bar`, and `foo -bar | baz`.  The first
will match strings contaning both `foo` and `bar`,
the second will  match strings matching `foo` but not `bar`,
and the third will match either strings matching `foo` but not `bar`
or strings matching `baz`.  That is, the query string represents
a logical expression in disjunctive normal form.

*NOTE. There are other ways of invoking a search.  We need more 
order and less chaos here.*