# Search

## Search by Abstract

Queries for documents using [jxxcarlson/elm-text-search](https://package.elm-lang.org/packages/jxxcarlson/elm-text-search/latest/)
look like the following:

- "foo": retrieve documents whose abastract digest contains "foo"


- "foo bar": retrieve documents whose abastract digest contains "foo"
and "bar"


- "foo -bar": retrieve documents whose abastract digest contains "foo"
  but not "bar"


- "foo | bar": retrieve documents whose abastract digest contains "foo"
    or "bar"


- "'foo bar'": retrieve documents whose abastract digest contains the
phrase "foo bar".  This search excludes documents containing
"bar foo", "foo baz bar", etc.

A document abstract has type

```elm
type alias Abstract =
    { title : String
    , author : String
    , abstract : String
    , tags : String
    , digest : String }
```

The `digest` is computed by

```elm
toString : Abstract -> String
toString a =
    [ a.title, a.author, a.tags ] |> String.join "; "

```

Abstracts are held in the field 
`abstractDict : Dict DocId Abstract` of the 
backend model.  This dictionary is updated 
every `Config.backendTickSeconds` by the 
update function of the backend model:

```elm
Tick newTime ->
    -- Do regular tasks
    ( { model | currentTime = newTime }
        |> updateAbstracts
        |> Backend.Update.updateDocumentTags
    , Command.none
    )
```






## Code

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