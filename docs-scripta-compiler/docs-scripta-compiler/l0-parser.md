# The L0 Parser

(( Under construction! ))

## Functional loops 

Functional loops are used throughout the compiler, and in
particular in the L0 parser.  The key element of 
such a loop is a driver function
`f : state -> Step state a` that does some computation
on the state and returns either a value of type `Done a`
or a value of type `Loop state`.   In the first case
the loop terminates with the indicated value.  In the
second case it runs again with the new state value.˜

```elm
-- Parser.Helpers
type Step state a
    = Loop state
    | Done a


loop : state -> (state -> Step state a) -> a
loop s f =
    case f s of
        Loop s_ ->
            loop s_ f

        Done b ->
            b
```

## Parser

The parser is implemented as a functional loop with state
defined by

```elm
-- L0.Parser.Expression
type alias State =
    { step : Int
    , tokens : List Token
    , numberOfTokens : Int
    , tokenIndex : Int
    , committed : List Expr
    , stack : List Token
    , messages : List String
    , lineNumber : Int
    }
```

and driving function `State -> Step State State`
defined by

```elm
-- L0.Parser.Expression
nextStep : State -> Step State State
nextStep state =
    case getToken state of
        Nothing ->
            if stackIsEmpty state then
                Done state

            else
                recoverFromError state

        Just token ->
            state
                |> advanceTokenIndex
                |> pushOrCommit token
                |> reduceState
                |> (\st -> { st | step = st.step + 1 })
                |> Loop
```

The `reduceState` function asks whether the stack
is reducible using the function  `isReducible` discussed
below.  If it is, it reduces the stack using
`reduceStack`, returning the updated state.  If not,
the state is passed on unchanged.

```elm
-- L0.Parser.Expression
reduceState : State -> State
reduceState state =
    if tokensAreReducible state then
        { state | stack = [], committed = reduceStack state ++ state.committed }

    else
        state
```

## Reducibility




```elm
-- L0.Parser.Match:
isReducible : List Symbol -> Bool
isReducible symbols_ =
    let
        symbols =
            List.filter (\sym -> sym /= WS) symbols_
    in
    case symbols of
        M :: rest ->
            List.head (List.reverse rest) == Just M

        C :: rest ->
            List.head (List.reverse rest) == Just C

        L :: ST :: rest ->
            case List.head (List.reverse rest) of
                Just R ->
                    hasReducibleArgs (dropLast rest)

                _ ->
                    False

        _ ->
            False
```