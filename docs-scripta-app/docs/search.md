# Search

## Search by Abstract

The abstract of a document summarizes information
about a document, e.g, its title, author and tags.
Thus a search by abstract with query "einstein" might match
"einstein" in the title, author field, or it might
match a document tag.

Queries for documents using [jxxcarlson/elm-text-search](https://package.elm-lang.org/packages/jxxcarlson/elm-text-search/latest/)
look like the following:

- "foo": retrieve documents whose abstract digest contains "foo"


- "foo bar": retrieve documents whose abstract digest contains "foo"
and "bar"


- "foo -bar": retrieve documents whose abstract digest contains "foo"
  but not "bar"


- "foo | bar": retrieve documents whose abstract digest contains "foo"
    or "bar"


- "'foo bar'": retrieve documents whose abstract digest contains the
phrase "foo bar".  This search excludes documents containing
"bar foo", "foo baz bar", etc.

To be technical, any query in disjunctive normal form is
is accepted.


## Document Abstracts

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

## Initiating a Search by Astract



User document searches are initiated by the `Search` clause of
`Frontend.update`.  This clause invokes `Frontend.Search.search`
which send the message

```elm
SearchForDocuments StandardHandling model.currentUser model.inputSearchKey
```

to the backend, where the code for `idsFromAbstractDict`
is eventually invoked:

```elm
idsFromAbstractDict : Dict String Abstract -> String -> List DocId
idsFromAbstractDict abstractDict query =
    Dict.toList abstractDict
        |> Text.Search.withQueryString digest Text.Search.NotCaseSensitive query
        |> List.map (\( id, _ ) -> id)
```

The result is a list of id's of documents which match
the search query.  This is turned into a list of
documents which is then forwarded to the front end.


## Search by Tag


((Under Construction))