# The L0 Parser

(( Under construction! ))

## Parser

The parser is implemented as a functional loop:

```elm
-- L0.Parser.Expression
parseTokenListToState : Int -> List Token -> State
parseTokenListToState lineNumber tokens =
    let
        state =
            tokens |> initWithTokens lineNumber |> run
    in
    state


run : State -> State
run state =
    loop state nextStep
        |> (\state_ -> { state_ | committed = List.reverse state_.committed })
```

where

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

The driver for the loop is the function

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