

Sample smart folder:

Old style:
```text
| title
Jim

[tags :folder]

| type folder get:jim ; 

```

New style:
```text
| title
Jim

[tags :folder, gettag:jim]

```




```
| title
Dylan

[tags :folder, gettag:dylan]

| type folder get:dylan ; 
```


```elm
makeSmartDocCommand : Document -> Bool -> String -> Command FrontendOnly ToBackend FrontendMsg
makeSmartDocCommand doc allowOpenFolder currentUserName
```