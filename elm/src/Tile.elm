module Tile exposing (main)

import Browser
import Html exposing (div, h3, p, text, button, Html)
import Html.Attributes exposing (class, attribute)
import Html.Events exposing (onClick)

type Msg = Increment | Decrement

type alias State =
  { columns : Int
  , rows : Int
  , counter : Int
  }

type alias Props =
  { columns : Int
  , rows : Int
  }

view model =
    div[ class "tile" ] [
        h3 [] [ text "Elm: ", text (String.fromInt model.counter) ],
        p [] [
          text (String.fromInt model.columns), text " rows and ", text (String.fromInt model.rows), text " columns",
          Html.node "elm-extension" [ attribute "name" "smiley" ] []
        ],
        button [ onClick Increment ] [ text "Increment" ],
        button [ onClick Decrement ] [ text "Decrement" ]
    ]

update : Msg -> State -> (State, Cmd Msg)
update msg model =
    case msg of
        Increment ->
            ({ model | counter = model.counter + 1 }, Cmd.none)
        Decrement ->
            ({ model | counter = model.counter - 1 }, Cmd.none)

main : Program Props State Msg
main =
    Browser.element
        { init = init
        , view = view
        , update = update
        , subscriptions = always Sub.none
        }

init : Props -> (State, Cmd Msg)
init flag =
    ({ columns = flag.columns, rows = flag.rows, counter = 0 }, Cmd.none)
